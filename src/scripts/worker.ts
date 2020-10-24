import { WorkerRunnerResolver } from "@worker-runner/promise";
import { runners } from "./common";

new WorkerRunnerResolver({ runners }).run();
