import Logger from "../lib/logger";
import Book from "../models/Book";

class BookServices {

  public async getAll() {
    try {
      return await Book.find();
    } catch (err) {
      Logger.error(err);
      return false;
    }
  }

  public async getById(id: string) {
    try {
      return await Book.findById(id);
    } catch (err) {
      Logger.error(err);
      return false;
    }
  }

  public async createBook(book: Object) {
    try {
      return await Book.create(book);
    } catch (err) {
      Logger.error(err);
      return false;
    }
  }

  public async updateBook(id: string, newBookData: Object) {
    try {
      return await Book.findByIdAndUpdate(id, newBookData, { new: false });
    } catch (err) {
      Logger.error(err);
      return false;
    }
  }

  public async destroy(id: string) {
    try {
      return await Book.findByIdAndDelete(id);
    } catch (err) {
      Logger.error(err);
      return false;
    }
  }
}

export default new BookServices();