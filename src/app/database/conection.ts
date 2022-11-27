import {createConnection} from 'typeorm'

createConnection()
.then(() => console.log('✅ Sucessfully connected with database'))
.catch((error) => console.log('❌ Error'))
