import 'reflect-metadata';
import  express  from 'express';
import cors from 'cors';
import 'dotenv/config';
import routes from './routes';
import './app/database/conection'

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(3000, ()=> console.log('🔥 Server started at http://localhost:3000'));