import Sequelize from 'sequelize';
import config from '../config/config.json';

export default new Sequelize(config['development']);
