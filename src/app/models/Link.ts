import { DataTypes, Model, Optional } from 'sequelize'

import { Link as TypeLink } from '../types/link'

import database from '../../database/'

interface ILinkCreationAttributes extends Optional<TypeLink, 'id'>{}

export interface ILinkModel extends Model<TypeLink, ILinkCreationAttributes>, TypeLink {}

const LinkModel = database.connection?.define<ILinkModel>('Link',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false
    },
    hits: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    timestamps: true
  }
)

/* LinkModel?.sync()
LinkModel?.sync({ force: true }) */

export default LinkModel
