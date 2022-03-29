module.exports = (sequelize, DataTypes) => {
    const alias = 'Brands'
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }
    const config = {
        tablename: 'brands',
        timestamps: false
    }

    const Brand = sequelize.define(alias, cols, config)

    Brand.associate = (models) => {
        Brand.hasMany(models.Products, {
            as: 'brands',
            foreignKey: 'brand_id'
        })
    }

    return Brand
}