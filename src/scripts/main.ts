import { ClientRunnerResolver } from "@worker-runner/promise";
import { runners } from "./common";
import { LibraryRunner } from "./library-runner";
import { logger } from "./logger";

async function main() {
    const runnerResolver = new ClientRunnerResolver({
        runners,
        connection: new Worker(new URL('./worker', import.meta.url)),
    });
    await runnerResolver.run();

    const libraryRunner = await runnerResolver.resolve(LibraryRunner, ['Book №1']);
    console.log('\n');

    logger.mainArea('Adding "Book №2" to library:');
    await libraryRunner.addBook('Book №2');
    console.log('\n');

    logger.mainArea('Book №2" is exist:', await libraryRunner.checkBook('Book №2'));
    console.log('\n');

    logger.mainArea('"Book №2" is exist after delay:', await libraryRunner.checkBookWithDelay('Book №2', 3));

    await libraryRunner.destroy();
}
main();
