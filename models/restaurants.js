const Sequelize = require('sequelize')

module.exports = {
    init()
    {
        const sequelize = new Sequelize('Restaurants', null, null, {
            dialect: 'sqlite',
            storage: 'restaurants.sqlite'
        })

        const dataRestaurants = sequelize.define('restaurants', {
            id: { type: Sequelize.INTEGER, primaryKey: true },
            address: Sequelize.STRING,
            name: Sequelize.STRING,
            capacity: Sequelize.STRING,
            open_at: Sequelize.STRING,
            closed_at: Sequelize.STRING,
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE
        })
        sequelize.sync()
    },
    create(informations)
    {
        const sequelize = new Sequelize('Restaurants', null, null, {
            dialect: 'sqlite',
            storage: 'restaurants.sqlite'
        })

        const dataRestaurants = sequelize.define('restaurants', {
            id: { type: Sequelize.INTEGER, primaryKey: true },
            address: Sequelize.STRING,
            name: Sequelize.STRING,
            capacity: Sequelize.STRING,
            open_at: Sequelize.STRING,
            closed_at: Sequelize.STRING,
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE
        })
        sequelize.sync()
        const data = dataRestaurants.build({
            address: informations.address,
            name: informations.name,
            capacity: informations.capacity,
            open_at: informations.open_at,
            closed_at: informations.closed_at
        }).save()
        return data
    },
    get()
    {
        const sequelize = new Sequelize('Restaurants', null, null, {
            dialect: 'sqlite',
            storage: 'restaurants.sqlite'
        })

        const dataRestaurants = sequelize.define('restaurants', {
            id: { type: Sequelize.INTEGER, primaryKey: true },
            address: Sequelize.STRING,
            name: Sequelize.STRING,
            capacity: Sequelize.STRING,
            open_at: Sequelize.STRING,
            closed_at: Sequelize.STRING
        })

        const data = dataRestaurants.findAll({ limit : 10 })

        return data
    },
    delete(restoId)
    {
        const sequelize = new Sequelize('Restaurants', null, null, {
            dialect: 'sqlite',
            storage: 'restaurants.sqlite'
        })

        const dataRestaurants = sequelize.define('restaurants', {
            id: { type: Sequelize.INTEGER, primaryKey: true },
            address: Sequelize.STRING,
            name: Sequelize.STRING,
            capacity: Sequelize.STRING,
            open_at: Sequelize.STRING,
            closed_at: Sequelize.STRING
        })

        const data = dataRestaurants.destroy({ where: {id: restoId}})

        return data
    }
}