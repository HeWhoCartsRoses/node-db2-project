exports.seed = async function (knex) {
    const testData = [{
            vin: 17584756,
            make: 'Tesla',
            model: 'Model S',
            mileage: 69420
        },
        {
            vin: 19673846,
            make: 'Honda',
            model: 'Civic',
            mileage: 69420
        },
        {
            vin: 19762534,
            make: 'Ford',
            model: 'Crown Vic',
            mileage: 69420
        },
        {
            vin: 10293847,
            make: 'Volkswagen',
            model: 'Superbeetle',
            mileage: 69420
        },
        {
            vin: 56483920,
            make: 'Ford',
            model: 'Bronco',
            mileage: 69420
        },
        {
            vin: 60183958,
            make: 'Mazda',
            model: '3',
            mileage: 69420
        },
        {
            vin: 18923458,
            make: 'Nissan',
            model: 'Leaf',
            mileage: 69420
        },
        {
            vin: 10987264,
            make: 'Jeep',
            model: 'Wrangler',
            mileage: 69420
        },
        {
            vin: 11748859,
            make: 'Toyota',
            model: 'Tacoma',
            mileage: 69420
        },
        {
            vin: 10299937,
            make: 'Mitsubishi',
            model: 'good car',
            mileage: 69420
        }
    ];

    await knex('cars').truncate();

    return knex('cars').insert(testData);
};