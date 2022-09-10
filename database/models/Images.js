module.exports = (sequelize, dataTypes)=> {
    let alias ='Images';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaruKey: true,
            allowNull: false,
            autoIncrement: true
        },
        url: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },

    };
    let config = {

        tableName: 'images',
        timestamps : false,
        underscored: true
    }

const Color = sequelize.define(alias,cols,config);

//Asociacion

Color.associate = function(models){
    Color.belongsTo(models.Products,{
        as: 'products',
        foreignKey: 'product_id'

    });
}
return Images;
};