import { HostRunnerResolver } from "@worker-runner/promise";
import { runners } from "./common/runners";

new HostRunnerResolver({ runners }).run();

