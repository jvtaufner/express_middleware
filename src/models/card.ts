"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbSequelize/connection"); 

class Card extends Model {}

Card.init(
  {
    CustomerName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CardToken: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LinksMethod: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Links.Method',
    },
    LinksRel: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Links.Rel', 
    },
    LinksHref: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Links.Href', 
    },
  },
  {
    sequelize,
    modelName: "Card",
    timestamps: false,
  }
);

module.exports = Card;
