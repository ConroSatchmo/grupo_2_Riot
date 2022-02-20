module.exports = (sequelize, DataTypes) => {
    const alias = 'Images'
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        file_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
    const config = {
        tablename: 'images',
        timestamps: false
    }

    const Image = sequelize.define(alias, cols, config)

    Image.associate = (models) => {
        Image.belongsTo(models.Products, {
            as: 'products',
            foreignKey: 'product_id'
        })
    }

    return Image
}