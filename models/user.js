import Sequelize from 'sequelize';
import sequelize from './index';

export default sequelize.define('user', {
  login: Sequelize.STRING,
  password: Sequelize.STRING,
}, { createdAt: false, updatedAt: false });
