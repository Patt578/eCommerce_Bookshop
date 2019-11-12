module.exports = (sequelize, DataTypes) =>{
    const Book = sequelize.define('book',{
        title:{
            type: DataTypes.STRING,
            allowNull: false,

        },
        author:{
            type: DataTypes.STRING,
            allowNull: false,

        },
        description:{
            type: DataTypes.STRING,
            allowNull: false,

        },
        images:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        price:{
            type:DataTypes.DOUBLE,
            allowNull: false,

        }

    })
    return Book;
}