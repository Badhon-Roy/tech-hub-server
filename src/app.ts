import express, { Request, Response } from 'express';
import router from './app/routes';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('💐 Welcome to the Tech Hub');
});

app.use("/api/v1", router)

export default app;