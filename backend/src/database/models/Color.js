module.exports = (sequelize, DataTypes) => {
    const alias = 'Colors'
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
        tablename: 'colors',
        timestamps: false
    }

    const Color = sequelize.define(alias, cols, config)

    Color.associate = (models) => {
        Color.hasMany(models.Products, {
            as: 'colors',
            foreignKey: 'color_id'
        })
    }

    return Color
}