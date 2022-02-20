module.exports = (sequelize, DataTypes) => {
    const alias = 'Categories'
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50)
        }
    }
    const config = {
        tablename: 'categories',
        timestamps: false
    }

    const Categorie = sequelize.define(alias, cols, config)

    Categorie.associate = (models) => {
        Categorie.hasMany(models.Users, {
            as: 'users',
            foreignKey: 'category_id'
        })
    }

    return Categorie
}