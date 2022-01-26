import { Request, Response } from 'express';
import BookServices from '../services/BookServices';

class BookController {
  public async index(req: Request, res: Response): Promise<Response> {
    const books = await BookServices.getAll();

    if (!books) return res.status(500).json({message: 'An error occurred!', code: res.statusCode});
    
    return res.status(200).json(books);
  }

  public async getOne(req: Request, res: Response): Promise<Response> {
    const book = await BookServices.getById(req.params.id);

    if (!book) return res.status(404).json({message: 'An error occurred. Book not found.', code: res.statusCode});
    
    return res.status(200).json(book);
  }

  public async create(req: Request, res: Response): Promise<Response> {
      const createdBook = await BookServices.createBook(req.body);
      
      if (!createdBook) return res.status(500).json({message: 'An error occurred!', code: res.statusCode});
      
      return res.status(201).json(createdBook);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const updatedBook = await BookServices.updateBook(id, req.body);

    if (!updatedBook) return res.status(500).json({message: 'An error occurred!', code: res.statusCode});

    return res.sendStatus(200);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deletedBook = await BookServices.destroy(id);

    if (!deletedBook) return res.status(500).json({message: 'An error occurred!', code: res.statusCode});

    return res.sendStatus(200);
  }
}

export default new BookController();
