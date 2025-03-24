import app from './app';
const port = 3005;
import { AppDataSource } from './db/connection';

async function main() {
    try {
        console.log('hola')
        await AppDataSource.initialize();
        console.log("Base de datos conectada")
        app.listen(port, () => {
            console.log(`Servidor activo en el puerto: ${port}`);
        });
    } catch (err) {
        if (err instanceof Error) {
            console.log(err.message);
        }
    }
}

main();
