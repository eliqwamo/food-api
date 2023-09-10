import Sequelize from "sequelize";

const connection = new Sequelize(
    "food_db", //Name of database
    "root", //Username
    "root", //Password
    {
        dialect: "mysql",
        host: "localhost"
    }
);

export default connection;