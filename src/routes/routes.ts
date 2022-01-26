import { Router } from 'express';
import BookController from '../controllers/BookController';

const routes = Router();

routes.get('/books', BookController.index);
routes.get('/books/:id', BookController.getOne);

routes.post('/books', BookController.create);

routes.put('/books/:id', BookController.update);

routes.delete('/books/:id', BookController.delete);

export default routes;
