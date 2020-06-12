import { runnerResolver } from "./common";
import { LibraryRunner } from "./library-runner";

const MAIN_AREA_LOG_STYLE = 'background-color: #33CC33; padding: 4px; border-radius: 3px; color: black;';
const BOOK_LOG_STYLE = 'font-weight: bold;';

async function main() {
    await runnerResolver.run();
    const libraryRunner = await runnerResolver.resolve(LibraryRunner, ['Book №1']);

    await libraryRunner.addBook('Book №2');

    console.log('%cMain Area:%c "%cBook №2%c" is exist:',
        MAIN_AREA_LOG_STYLE, '', BOOK_LOG_STYLE, '',
        await libraryRunner.checkBook('Book №2'),
    );

    const reservedBookPromise = libraryRunner.reserveBook('Book №2', 3);

    console.log('%cMain Area:%c "%cBook №2%c" is exist after reserve:',
        MAIN_AREA_LOG_STYLE, '', BOOK_LOG_STYLE, '',
        await libraryRunner.checkBook('Book №2')
    );

    await reservedBookPromise;
    console.log('%cMain Area:%c Reservation for book "%cBook №2%c" completed',
        MAIN_AREA_LOG_STYLE, '', BOOK_LOG_STYLE, '',
    );

    console.log('%cMain Area:%c "%cBook №2%c" is exist after awaiting reserve:',
        MAIN_AREA_LOG_STYLE, '', BOOK_LOG_STYLE, '',
        await libraryRunner.checkBook('Book №2'),
    );

    await libraryRunner.destroy();
}
main();