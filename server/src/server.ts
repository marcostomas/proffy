import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

/*
    1.  O Express não entende JSON por padrão, para solucionar este problema, 
        utilizamos esta linha.

    2. Corpo (Request Body) => Dados para criação ou atualização de um registro.

    3.  request => Informações que foram pedidas pelo front-end para o back-end.
        response => Informações que serão retornadas ao front-end pelo back-end.
*/
app.use(cors());

// 1. ↓
app.use(express.json());

app.use(routes);

app.listen(3333);