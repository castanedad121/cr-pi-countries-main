const { Country, Activity } = require("../db");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;



const getAllCountries = async (name) => {
  const { count, rows }  = await Country.findAndCountAll({
    include:{
      model: Activity,
      as: "Activities"
    },
    where: {
      nameCommon: {
        [Op.iLike]: `${name}%`,
      },
    },
    order: [["nameCommon", "ASC"]],
    
  });
  return { count, rows } ;
};

module.exports = getAllCountries;
