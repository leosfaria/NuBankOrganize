var moment = require("moment")

module.exports = {
    createCategories: (events) => {
        const categories = []

        for(let event in events) {
            const date = moment(event.time)

            console.log(date)
            console.log(date.month)
        }

        console.log(events)

        return categories
    }
}