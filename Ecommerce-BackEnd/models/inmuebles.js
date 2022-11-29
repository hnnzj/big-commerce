const { DataTypes } = require("sequelize");

const { sequelize } = require("../database");

const Inmuebles = sequelize.define(
  "inmuebles",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.ENUM({
        values: ["departamento", "casa", "cochera", "edificio", "habitacion"],
      }),
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.TEXT,
      defaultValue:
        "https://img.freepik.com/vector-premium/error-404-linda-mascota-casa_152558-80986.jpg?w=740",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = {
  Inmuebles,
};
