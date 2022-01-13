import {createConnection} from 'typeorm';

createConnection().catch(error => {
    console.log('error in connection: ',error);
}).then(snap => {
    console.log('Connection is OK')
})

