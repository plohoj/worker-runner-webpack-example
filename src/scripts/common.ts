import { RunnerResolver } from "@worker-runner/promise";
import { LibraryRunner } from "./library-runner";

export const runnerResolver = new RunnerResolver({
    runners: [LibraryRunner],
    workerPath: 'worker-injector.js'
});
