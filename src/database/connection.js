import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_BASE,
  process.env.DB_USER,
  process.env.DB_PASS, 
  {
  host:  process.env.DB_HOST,
  port: 5432,
  dialect: 'postgres'
});

module.exports = sequelize;

// export const connection = new Sequelize(process.env.DATABASE_URL, {
//     dialect: "postgres",
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//     },
//   });