const sequelize = require('../database')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, primaryKey: true, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketCertificate = sequelize.define('basket-certificate',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Certificate = sequelize.define('certificate',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0}
})

const Category = sequelize.define('category',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const CertificateInfo = sequelize.define('certificate-info',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

const Rating = sequelize.define('rating',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER , allowNull: false}
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketCertificate)
BasketCertificate.belongsTo(Basket)

Certificate.hasMany(BasketCertificate)
BasketCertificate.belongsTo(Certificate)

Certificate.hasMany(Rating)
Rating.belongsTo(Certificate)

Category.hasMany(Certificate)
Certificate.belongsTo(Category)

Certificate.hasOne(CertificateInfo, {as: 'info'})
CertificateInfo.belongsTo(Certificate)

module.exports = {
    User, Basket, BasketCertificate, Certificate, CertificateInfo, Category, Rating
}