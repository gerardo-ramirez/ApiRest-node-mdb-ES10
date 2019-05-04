import express, { json } from 'express';
const app = express();
//importamos rutas
import router from './routes/index.routes';
import TaskRoutes from './routes/tasks.routes';


//setting
app.set('port', process.env.PORT || 8080);
//middleware
app.use(json());
//rutes
app.use(router);
app.use('/tasks', TaskRoutes);



//entendr los datos json que envie el cliente



export default app;
