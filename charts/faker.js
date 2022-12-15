const faker = require("faker");
    const fs = require("fs");
    var data = {
        user: []
    }

    for (let id=1; id <= 100000; id++) {
        data.user.push({
            "id": id,
            "name": faker.name.firstName(),
            // "firstName": faker.name.firstName(),
            "age": faker.datatype.number(85),
            "country": faker.address.country(),
            "carName": faker.vehicle.vehicle(),
            "carModel": faker.vehicle.model(),
            "carMaker": faker.vehicle.manufacturer(),
            "carAge": faker.datatype.number({
                'min': 1,
                'max': 12
            })
        })
    }

    fs.writeFileSync('db.json', JSON.stringify(data, null, '\t'));
    module.exports = function() {
        return data;
    }