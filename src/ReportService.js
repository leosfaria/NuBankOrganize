var moment = require("moment")

let categories = {}
let glados = []

function gladosWhatTagIsThis(event, tagDescription) {
    const match = glados.filter( item => event.description == item.description && event.title == item.title )

    if(match.length == 0) {
        return tagDescription
    }

    let map = {}

    for(let occurrency of match) {
        if(map[occurrency.tag]) {
            map[occurrency.tag]++
        } else {
            map[occurrency.tag] = 1
        }
    }

    let tagDescriptionFound = tagDescription
    let tagCount = 0

    Object.keys(map).forEach( key => {
        if(map[key] > tagCount) {
            tagCount = map[key]
            tagDescriptionFound = key
        }
    } )

    return tagDescriptionFound
}

function getAmount(event) {
    if(event.details && event.details.charges) {
        return event.details.charges.amount
    }

    return event.amount
}

function getInstallments(event) {
    if(event.details && event.details.charges) {
        return event.details.charges.count
    }

    return 1
}

function mountTagDetails(event) {
    let latitude, longitude
        
    if(event.details) {
        latitude = event.details.lat
        longitude = event.details.lon
    } 

    return {
        date: event.time,
        amount: getAmount(event),
        nuBankDescription: event.description,
        nuBankTitle: event.title,
        lat: latitude,
        lon: longitude
    }
}

function addNewDataToGlados(event, tagDescription) {
    glados.push({
        date: event.time,
        description: event.description,
        title: event.title,
        tag: tagDescription,
        amount: getAmount(event),
        installments: getInstallments(event)
    })
}

function mountTagList(event, tagList) {
    try{
        let tagDescription = "outros"
        
        if(event.details && event.details.tags && event.details.tags.length > 0) {
            tagDescription = event.details.tags[0] //Este programa assume que vc coloca apenas uma tag por compra
            addNewDataToGlados(event, tagDescription)
        }
        
        if(tagDescription == "outros") {
            tagDescription = gladosWhatTagIsThis(event, tagDescription)
        }

        if(!tagList || tagList.length == 0) {
            return [{
                description: tagDescription,
                amount: getAmount(event),
                details: [mountTagDetails(event)]
            }]  
        } else {
            let descriptionFound = false

            for(let i = 0; i < tagList.length; i++) {
                if(tagList[i].description === tagDescription) {
                    tagList[i].amount += getAmount(event),
                    tagList[i].details.push(mountTagDetails(event))
                    descriptionFound = true
                }
            }

            if(!descriptionFound) {
                tagList.push({
                    description: tagDescription,
                    amount: getAmount(event),
                    details: [mountTagDetails(event)]
                })
            }

            return tagList
        }
    } catch (e) {
        console.log("Erro trying to generate Tag, event: " + JSON.stringify(event))
        console.log("Erro: " + JSON.stringify(e))
        process.exit(1)
    }
}

function mountCategory(event, month) {
    if(!categories[month]) {
        categories[month] = {
            amount: getAmount(event),
            tags: mountTagList(event) 
        }
    } else {
        categories[month].amount += getAmount(event)
        categories[month].tags = mountTagList(event, categories[month].tags)
    }
}

module.exports = {
    createCategories: (events) => {        
        categories = {}

        for(let i = events.length - 1; i > 0; i--) {
            const event = events[i]
            const date = moment(event.time)
            const month = date.format('MMMM-YYYY')
            
            //TODO: Pagamento em debito entra ??
            if(event.category === "transaction") {
                mountCategory(event, month)
            }

            if(event.category === "rewards_fee") {
                mountCategory(event, month)
            }

            // if(month === "November-2019") {
            //     console.log("event: " + JSON.stringify(event, null, 2))
            // }
        }

        console.log(JSON.stringify(categories))
        // console.log(JSON.stringify(glados))

        return categories
    }
}