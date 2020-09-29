import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(morgan("dev"));


app.use(routes);

const PORT = 8000;


app.use((req: any, res: any) => {
    res.status(404).send("Not found");
})
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
}
module.exports = app;
