import "reflect-metadata";
import {createExpressServer} from 'routing-controllers';
import {FileControllers} from './Controllers/FileControllers';

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
    controllers: [FileControllers], // we specify controllers we want to use
});

// run express application on port 3000
app.listen(3000, () => {
    console.log(`Servidor Iniciado`);
    console.log(`Host: http://localhost:${3000}`);
});
