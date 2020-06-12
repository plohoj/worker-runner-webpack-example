const WORKER_LOG_STYLE = 'background-color: #FFCC33; padding: 4px; border-radius: 3px; color: black;';
const BOOK_LOG_STYLE = 'font-weight: bold;';
const SECONDS_LOG_STYLE = BOOK_LOG_STYLE;

export class LibraryRunner {
    private books: string[]
    constructor (books: string[] = []) {
        this.books = books;
    }

    public addBook(book: string): void {
        this.books.push(book);
        console.log(`%cWorker:%c Book %c"${book}"%c added to library`, WORKER_LOG_STYLE, '', BOOK_LOG_STYLE, '');
    }

    public checkBook(book: string): boolean {
        const isExist = this.books.indexOf(book) !== -1;
        console.log(`%cWorker:%c Book %c"${book}"%c is exist in the library: `,
            WORKER_LOG_STYLE, '', BOOK_LOG_STYLE, '', isExist);
        return isExist;
    }

    public async reserveBook(book: string, seconds: number): Promise<string> {
        console.log(`%cWorker:%c Book %c"${book}"%c reserved for %c${seconds}%c seconds`,
            WORKER_LOG_STYLE, '', BOOK_LOG_STYLE, '', SECONDS_LOG_STYLE, '');

        this.books = this.books.filter(libraryBook => libraryBook !== book);

        await new Promise(resolve => setTimeout(() => resolve(), seconds * 1000));
        this.books.push(book);

        console.log(`%cWorker:%c Reservation for book %c"${book}"%c completed after %c${seconds}%c seconds`,
            WORKER_LOG_STYLE, '', BOOK_LOG_STYLE, '', SECONDS_LOG_STYLE, '');
        return book;
    }
}