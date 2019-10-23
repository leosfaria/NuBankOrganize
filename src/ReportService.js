var moment = require("moment")

module.exports = {
    createCategories: (events) => {
        const categories = {}

        //TODO: Pagamento em debito entra ??
        const transactionEvents = events.filter(e => {
            console.log(JSON.stringify(e))
            return e.category === "transaction" 
        })

        for(let event in transactionEvents) {
            console.log("event: " + JSON.stringify(events[event], null, 2))

            // const date = moment(event.time)
            // const month = date.format('MMMM-YYYY')

            // console.log(date.format('MMMM-YYYY'))
            // if(!categories[month]) {
            //     console.log("oi " + event)
            //     categories[month] = {
            //         amount: event.amount 
            //     }
            // } else {
            //     console.log("tchau " + event)
            //     categories[month].amount += event.amount
            // }
        }

        console.log(categories)

        return categories
    }
}