import { HostRunnerResolver } from "@worker-runner/promise";
import { runners } from "./common";

new HostRunnerResolver({ runners }).run();

