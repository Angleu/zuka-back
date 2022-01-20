import path from 'fs';
console.log(process.env.DATABASE_URL);
module.exports = {
   "type": "postgres",
   "url": process.env.DATABASE_URL,
   // "host": "ec2-18-234-17-166.compute-1.amazonaws.com",
   // "port": 5432,
   // "username": "lrlpgtfoisugwb",
   // "password": "98db7f1db7348866443395dd61e2521a62b0bd35517d9365d2fb4aff70f09494",
   // "database": "d8f08eeicmbh8n",
   "entities": [
      path.join(__dirname, `dist/model/**/*.js`)
   ],
   "migrations": [
      path.join(__dirname, `dist/migration/**/*.js`)
   ],
   "synchronize":false,
   "ssl":{
      "require": true,
      "rejectUnauthorized": false,
   },
   "cli": {
      "entitiesDir": "src/model",
      "migrationsDir": "src/migration"
   }
}
