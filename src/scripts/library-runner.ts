import { logger } from "./logger";

export class LibraryRunner {
    private books: string[]
    constructor (books: string[] = []) {
        logger.workerArea('Construct with books:', books);
        this.books = books;
    }

    public addBook(book: string): void {
        this.books.push(book);
        logger.workerArea(`Book "${book}" added to library`);
    }

    public checkBook(book: string): boolean {
        const isExist = this.books.indexOf(book) !== -1;
        logger.workerArea(`Book "${book}" is exist in the library: `, isExist);
        return isExist;
    }

    public async checkBookWithDelay(book: string, seconds: number): Promise<boolean> {
        logger.workerArea(`Setting a delay of ${seconds} seconds before returning a response`);
        
        await new Promise<void>(resolve => setTimeout(() => resolve(), seconds * 1000));

        return this.checkBook(book);
    }
}
