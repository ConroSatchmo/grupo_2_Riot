module.exports = (sequelize, DataTypes) => {
    const alias = 'Products'
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
        },
        description: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        price: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false
        },
        brand_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        color_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
    const config = {
        tablename: 'products',
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = (models) => {
        Product.belongsTo(models.Brands, {
            as: 'brands',
            foreignKey: 'brand_id'
        })

        Product.belongsTo(models.Colors, {
            as: 'colors',
            foreignKey: 'color_id'
        })

        Product.hasMany(models.Images, {
            as: 'images',
            foreignKey: 'product_id'
        })
    }

    return Product
}