const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
      "Activity",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        hard: {
            type: DataTypes.INTEGER,
            allowNull : false,
            validate: {
                min: 1,
                max: 5
              }
        },
        duration: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        season: {
            type: DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring"),
            allowNull: false,
          },
      },
      { timestamps: true } // *third argument that adds or does not add the creation date
    );
  };