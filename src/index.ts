import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import estudiantesRoutes from'./routes/estudiantesRoutes';
import profesoresRoutes from'./routes/profesoresRoutes';
import cursosRoutes from'./routes/cursosRoutes';

const port = 3005;
const app = express();

app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
    console.log('Hola mundo');
    res.send('Hola mundo');
});

app.listen(port, () => {
    console.log(`Servidor activo en el puerto: ${port}`);
});

app.use('/estudiantes', estudiantesRoutes);
app.use('/profesores', profesoresRoutes);
app.use('/cursos', cursosRoutes);