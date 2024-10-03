import 'reflect-metadata';
import app from './app';
import { AppDataSource } from './db/data-source';

const port = 3000;

AppDataSource.initialize().then(() => {
  console.log('Database connected');
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
