const path = require("path");

console.log(process.env.DATABASE_URL);
module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  logging: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
    // synchronize: true,
    entities: ["dist/model/*.js"],
    subscribers: ["dist/subscriber/*.js"],
    migrations: ["dist/migration/*.js"],
    cli: {
      entitiesDir: "src/model",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber",
    },
  }
