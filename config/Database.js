import {Sequelize} from "sequelize";

const db = new Sequelize('testaia','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;