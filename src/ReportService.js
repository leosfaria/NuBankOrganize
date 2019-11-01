var moment = require("moment")

let categories = {}

function mountTagDetails(event) {
    let latitude, longitude
        
    if(event.details) {
        latitude = event.details.lat
        longitude = event.details.lon
    } 

    return {
        date: event.time,
        amount: event.amount,
        nuBankDescription: event.description,
        nuBankTitle: event.title,
        lat: latitude,
        lon: longitude
    }
}

function mountTagList(event, tagList) {
    try{
        let tagDescription = "outros"
        
        if(event.details && event.details.tags && event.details.tags.length > 0) {
            tagDescription = event.details.tags[0] //Este programa assume que vc coloca apenas uma tag por compra
        } 

        if(!tagList || tagList.length == 0) {
            return [{
                description: tagDescription,
                amount: event.amount,
                details: [mountTagDetails(event)]
            }]  
        } else {
            let descriptionFound = false

            for(let i = 0; i < tagList.length; i++) {
                if(tagList[i].description === tagDescription) {
                    tagList[i].amount += event.amount,
                    tagList[i].details.push(mountTagDetails(event))
                    descriptionFound = true
                }
            }

            if(!descriptionFound) {
                tagList.push({
                    description: tagDescription,
                    amount: event.amount,
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
            amount: event.amount,
            tags: mountTagList(event) 
        }
    } else {
        categories[month].amount += event.amount
        categories[month].tags = mountTagList(event, categories[month].tags)
    }
}

module.exports = {
    createCategories: (events) => {        
        categories = {}

        for(let eventIndex in events) {
            const event = events[eventIndex]
            const date = moment(event.time)
            const month = date.format('MMMM-YYYY')
            
            //TODO: Pagamento em debito entra ??
            if(event.category === "transaction") {
                mountCategory(event, month)
            }

            if(event.category === "rewards_fee") {
                mountCategory(event, month)
            }

            // if(month === "October-2019") {
            //     console.log("event: " + JSON.stringify(event, null, 2))
            // }
        }

        console.log(JSON.stringify(categories))

        return categories
    }
}