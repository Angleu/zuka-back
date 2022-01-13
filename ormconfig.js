console.log(process.env.DATABASE_URL);
module.exports = {
   "type": "postgres",
   "url": process.env.DATABASE_URL,
   "entities": [
      "dist/model/**/*.js"
   ],
   "migrations": [
      "dist/migration/**/*.js"
   ],
   "cli": {
      "entitiesDir": "src/model",
      "migrationsDir": "src/migration",
   }
}
