module.exports = (sequelize, DataTypes) => {
    const alias = 'Categories'
    const cols = {
        
    }
    const config = {
        tablename: 'users',
        timestamps: false
    }

    const Categorie = sequelize.define(alias, cols, config)

    Categorie.associate = (models) => {
        Categorie.hasMany(models.Categories, {
            as: 'categories',
            foreignKey: 'Categorie_id'
        })
    }

    return Categorie
}