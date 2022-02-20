module.exports = (sequelize, DataTypes) => {
    const alias = 'Users'
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        user_name: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }
    const config = {
        tablename: 'users',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = (models) => {
        User.hasMany(models.Categories, {
            as: 'categories',
            foreignKey: 'user_id'
        })
    }

    return User
}