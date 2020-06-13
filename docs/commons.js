(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["commons"],{

/***/ "./node_modules/@worker-runner/core/esm/core.js":
/*!******************************************************!*\
  !*** ./node_modules/@worker-runner/core/esm/core.js ***!
  \******************************************************/
/*! exports provided: CODE_TO_ERROR_MAP, NodeAndLocalRunnerResolverBase, NodeResolverAction, NodeRunnerResolverBase, RUNNER_BRIDGE_CONTROLLER, RunnerBridge, RunnerController, RunnerControllerAction, RunnerDestroyError, RunnerEnvironment, RunnerEnvironmentAction, RunnerExecuteError, RunnerInitError, RunnerWasDisconnectedError, TransferRunnerData, WORKER_RUNNER_ERROR_CODE, WORKER_RUNNER_ERROR_MESSAGES, WorkerNotInitError, WorkerResolverAction, WorkerRunnerError, WorkerRunnerErrorCode, WorkerRunnerErrorSerializer, WorkerRunnerResolverBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CODE_TO_ERROR_MAP", function() { return CODE_TO_ERROR_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeAndLocalRunnerResolverBase", function() { return NodeAndLocalRunnerResolverBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeResolverAction", function() { return NodeResolverAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeRunnerResolverBase", function() { return NodeRunnerResolverBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RUNNER_BRIDGE_CONTROLLER", function() { return RUNNER_BRIDGE_CONTROLLER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerBridge", function() { return RunnerBridge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerController", function() { return RunnerController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerControllerAction", function() { return RunnerControllerAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerDestroyError", function() { return RunnerDestroyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerEnvironment", function() { return RunnerEnvironment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerEnvironmentAction", function() { return RunnerEnvironmentAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerExecuteError", function() { return RunnerExecuteError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerInitError", function() { return RunnerInitError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerWasDisconnectedError", function() { return RunnerWasDisconnectedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferRunnerData", function() { return TransferRunnerData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKER_RUNNER_ERROR_CODE", function() { return WORKER_RUNNER_ERROR_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKER_RUNNER_ERROR_MESSAGES", function() { return WORKER_RUNNER_ERROR_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerNotInitError", function() { return WorkerNotInitError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerResolverAction", function() { return WorkerResolverAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerRunnerError", function() { return WorkerRunnerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerRunnerErrorCode", function() { return WorkerRunnerErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerRunnerErrorSerializer", function() { return WorkerRunnerErrorSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerRunnerResolverBase", function() { return WorkerRunnerResolverBase; });
/* harmony import */ var _worker_runner_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @worker-runner/core */ "./node_modules/@worker-runner/core/esm/core.js");


var NodeResolverAction;
(function (NodeResolverAction) {
    NodeResolverAction[NodeResolverAction["INIT_RUNNER"] = 0] = "INIT_RUNNER";
    NodeResolverAction[NodeResolverAction["DESTROY"] = 1] = "DESTROY";
})(NodeResolverAction || (NodeResolverAction = {}));

var RunnerControllerAction;
(function (RunnerControllerAction) {
    RunnerControllerAction[RunnerControllerAction["EXECUTE"] = 10] = "EXECUTE";
    RunnerControllerAction[RunnerControllerAction["DISCONNECT"] = 11] = "DISCONNECT";
    RunnerControllerAction[RunnerControllerAction["DESTROY"] = 12] = "DESTROY";
    RunnerControllerAction[RunnerControllerAction["RESOLVE"] = 13] = "RESOLVE";
})(RunnerControllerAction || (RunnerControllerAction = {}));

var RunnerEnvironmentAction;
(function (RunnerEnvironmentAction) {
    RunnerEnvironmentAction[RunnerEnvironmentAction["EXECUTED"] = 10] = "EXECUTED";
    RunnerEnvironmentAction[RunnerEnvironmentAction["EXECUTED_WITH_RUNNER_RESULT"] = 11] = "EXECUTED_WITH_RUNNER_RESULT";
    RunnerEnvironmentAction[RunnerEnvironmentAction["DISCONNECTED"] = 12] = "DISCONNECTED";
    RunnerEnvironmentAction[RunnerEnvironmentAction["DESTROYED"] = 13] = "DESTROYED";
    RunnerEnvironmentAction[RunnerEnvironmentAction["EXECUTE_ERROR"] = 14] = "EXECUTE_ERROR";
    RunnerEnvironmentAction[RunnerEnvironmentAction["DESTROY_ERROR"] = 15] = "DESTROY_ERROR";
    RunnerEnvironmentAction[RunnerEnvironmentAction["RESOLVED"] = 16] = "RESOLVED";
})(RunnerEnvironmentAction || (RunnerEnvironmentAction = {}));

var WorkerResolverAction;
(function (WorkerResolverAction) {
    WorkerResolverAction[WorkerResolverAction["WORKER_INITED"] = 0] = "WORKER_INITED";
    WorkerResolverAction[WorkerResolverAction["RUNNER_INITED"] = 1] = "RUNNER_INITED";
    WorkerResolverAction[WorkerResolverAction["RUNNER_INIT_ERROR"] = 2] = "RUNNER_INIT_ERROR";
    WorkerResolverAction[WorkerResolverAction["DESTROYED"] = 3] = "DESTROYED";
})(WorkerResolverAction || (WorkerResolverAction = {}));

var WorkerRunnerErrorCode;
(function (WorkerRunnerErrorCode) {
    WorkerRunnerErrorCode[WorkerRunnerErrorCode["RUNNER_INIT_ERROR"] = 0] = "RUNNER_INIT_ERROR";
    WorkerRunnerErrorCode[WorkerRunnerErrorCode["RUNNER_EXECUTE_ERROR"] = 1] = "RUNNER_EXECUTE_ERROR";
    WorkerRunnerErrorCode[WorkerRunnerErrorCode["RUNNER_DESTROY_ERROR"] = 2] = "RUNNER_DESTROY_ERROR";
    WorkerRunnerErrorCode[WorkerRunnerErrorCode["RUNNER_NOT_INIT"] = 3] = "RUNNER_NOT_INIT";
    WorkerRunnerErrorCode[WorkerRunnerErrorCode["WORKER_NOT_INIT"] = 4] = "WORKER_NOT_INIT";
    WorkerRunnerErrorCode[WorkerRunnerErrorCode["UNEXPECTED_ERROR"] = 5] = "UNEXPECTED_ERROR";
})(WorkerRunnerErrorCode || (WorkerRunnerErrorCode = {}));

const WORKER_RUNNER_ERROR_MESSAGES = {
    CONSTRUCTOR_NOT_FOUND(config = {}) {
        const runnerName = config.runnerName ? `<${config.runnerName}> ` : '';
        return `Runner constructor ${runnerName}not found`;
    },
    RUNNER_WAS_DISCONNECTED(config = {}) {
        const runnerName = config.runnerName ? `<${config.runnerName}> ` : '';
        return `The Runner ${runnerName}was destroyed or disconnected`;
    },
    RUNNER_INIT_ERROR(config = {}) {
        const runnerName = config.runnerName ? ` <${config.runnerName}>` : '';
        return `An error occurred while initializing Runner${runnerName}`;
    },
    EXECUTE_ERROR(config = {}) {
        const methodInfo = new Array();
        if (config.runnerName) {
            methodInfo.push(config.runnerName);
        }
        if (config.methodName) {
            methodInfo.push(config.methodName + '(...)');
        }
        let methodInfoString = methodInfo.join('.');
        if (methodInfoString) {
            methodInfoString = ` <${methodInfoString}>`;
        }
        return `Runtime Error ${methodInfoString}`;
    },
    WORKER_NOT_INIT() {
        return 'Worker not init';
    },
    UNEXPECTED_ERROR(config = {}) {
        const runnerName = config.runnerName ? ` with <${config.runnerName}>` : '';
        return `Unexpected Error${runnerName}`;
    },
    WORKER_DESTROYED_WITHOUT_CALL() {
        return 'An action was received about the successful destroy,'
            + ' but the destroy method was not previously called';
    },
};

var _a;
const WORKER_RUNNER_ERROR_CODE = Symbol('Worker Runner error code');
class WorkerRunnerError extends Error {
    constructor(config = {}) {
        super(config.message);
        if (config.stack) {
            this.stack = config.stack;
        }
        else if (Error.captureStackTrace) {
            if (config.captureOpt) {
                Error.captureStackTrace(this, config.captureOpt);
            }
            Error.captureStackTrace(WorkerRunnerError);
        }
        this.name = config.name || WorkerRunnerError.name;
    }
}
class WorkerRunnerUnexpectedError extends WorkerRunnerError {
    constructor(config = {}) {
        super({
            name: config.name || WorkerRunnerUnexpectedError.name,
            message: config.message || WORKER_RUNNER_ERROR_MESSAGES.UNEXPECTED_ERROR(),
            stack: config.stack,
            captureOpt: config.captureOpt || WorkerRunnerUnexpectedError,
        });
        this[_a] = WorkerRunnerErrorCode.UNEXPECTED_ERROR;
    }
}
_a = WORKER_RUNNER_ERROR_CODE;

var _a$1, _b, _c, _d, _e;
class RunnerInitError extends WorkerRunnerError {
    constructor(config = {}) {
        super({
            name: config.name || RunnerInitError.name,
            message: config.message || WORKER_RUNNER_ERROR_MESSAGES.CONSTRUCTOR_NOT_FOUND(),
            stack: config.stack,
            captureOpt: config.captureOpt || RunnerInitError,
        });
        this[_a$1] = WorkerRunnerErrorCode.RUNNER_INIT_ERROR;
    }
}
_a$1 = WORKER_RUNNER_ERROR_CODE;
class RunnerWasDisconnectedError extends WorkerRunnerError {
    constructor(config = {}) {
        super({
            name: config.name || RunnerWasDisconnectedError.name,
            message: config.message || WORKER_RUNNER_ERROR_MESSAGES.RUNNER_WAS_DISCONNECTED(),
            stack: config.stack,
            captureOpt: config.captureOpt || RunnerWasDisconnectedError,
        });
        this[_b] = WorkerRunnerErrorCode.RUNNER_NOT_INIT;
    }
}
_b = WORKER_RUNNER_ERROR_CODE;
class RunnerExecuteError extends WorkerRunnerError {
    constructor(config = {}) {
        super({
            name: config.name || RunnerExecuteError.name,
            message: config.message || WORKER_RUNNER_ERROR_MESSAGES.EXECUTE_ERROR(),
            stack: config.stack,
            captureOpt: config.captureOpt || RunnerExecuteError,
        });
        this[_c] = WorkerRunnerErrorCode.RUNNER_EXECUTE_ERROR;
    }
}
_c = WORKER_RUNNER_ERROR_CODE;
class RunnerDestroyError extends WorkerRunnerError {
    constructor(config = {}) {
        super({
            name: config.name || RunnerDestroyError.name,
            message: config.message || WORKER_RUNNER_ERROR_MESSAGES.RUNNER_WAS_DISCONNECTED(),
            stack: config.stack,
            captureOpt: config.captureOpt || RunnerDestroyError,
        });
        this[_d] = WorkerRunnerErrorCode.RUNNER_DESTROY_ERROR;
    }
}
_d = WORKER_RUNNER_ERROR_CODE;
class WorkerNotInitError extends WorkerRunnerError {
    constructor(config = {}) {
        super({
            name: config.name || WorkerNotInitError.name,
            message: config.message || WORKER_RUNNER_ERROR_MESSAGES.WORKER_NOT_INIT(),
            stack: config.stack,
            captureOpt: config.captureOpt || WorkerNotInitError,
        });
        this[_e] = WorkerRunnerErrorCode.RUNNER_NOT_INIT;
    }
}
_e = WORKER_RUNNER_ERROR_CODE;

const CODE_TO_ERROR_MAP = {
    [WorkerRunnerErrorCode.RUNNER_INIT_ERROR]: RunnerInitError,
    [WorkerRunnerErrorCode.RUNNER_EXECUTE_ERROR]: RunnerExecuteError,
    [WorkerRunnerErrorCode.RUNNER_DESTROY_ERROR]: RunnerDestroyError,
    [WorkerRunnerErrorCode.RUNNER_NOT_INIT]: RunnerWasDisconnectedError,
    [WorkerRunnerErrorCode.WORKER_NOT_INIT]: WorkerNotInitError,
    [WorkerRunnerErrorCode.UNEXPECTED_ERROR]: WorkerRunnerUnexpectedError,
};

class WorkerRunnerErrorSerializer {
    constructor() {
        this.codeToErrorMap = CODE_TO_ERROR_MAP;
    }
    serialize(error = {}, alternativeError = {}) {
        if (error instanceof Error) {
            let errorCode = error[WORKER_RUNNER_ERROR_CODE];
            if (typeof errorCode !== 'number') {
                errorCode = alternativeError.errorCode;
                if (typeof errorCode !== 'number') {
                    errorCode = WorkerRunnerErrorCode.UNEXPECTED_ERROR;
                }
            }
            return {
                errorCode,
                name: error.name || alternativeError.name || WorkerRunnerUnexpectedError.name,
                message: error.message || alternativeError.message || WORKER_RUNNER_ERROR_MESSAGES.UNEXPECTED_ERROR(),
                stack: error.stack || alternativeError.stack,
            };
        }
        return {
            errorCode: typeof alternativeError.errorCode === 'number' ?
                alternativeError.errorCode : WorkerRunnerErrorCode.UNEXPECTED_ERROR,
            name: alternativeError.name || WorkerRunnerUnexpectedError.name,
            message: error ? String(error) : (alternativeError.message
                || WORKER_RUNNER_ERROR_MESSAGES.UNEXPECTED_ERROR()),
            stack: alternativeError.stack,
        };
    }
    deserialize(error) {
        let errorConstructor = this.codeToErrorMap[error.errorCode];
        if (!errorConstructor) {
            errorConstructor = WorkerRunnerUnexpectedError;
        }
        return new errorConstructor(Object.assign({ captureOpt: this.deserialize }, error));
    }
}
const WORKER_RUNNER_ERROR_SERIALIZER = new WorkerRunnerErrorSerializer();

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const EXECUTE_RUNNER_BRIDGE_METHOD = Symbol('Execute RunnerBridge method');
const RUNNER_BRIDGE_CONTROLLER = Symbol('Execute via NodeResolver method');
class RunnerBridge {
    constructor(controller) {
        this[RUNNER_BRIDGE_CONTROLLER] = controller;
    }
    static isRunnerBridge(instance) {
        return !!instance && !!instance[RUNNER_BRIDGE_CONTROLLER];
    }
    [EXECUTE_RUNNER_BRIDGE_METHOD](methodName, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return this[RUNNER_BRIDGE_CONTROLLER].execute(methodName, args);
        });
    }
    /** Unsubscribe from runner, if the control object was the last, then runner will be automatically destroyed */
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this[RUNNER_BRIDGE_CONTROLLER].disconnect();
        });
    }
    /** Destroying and remove Runner instance from resolved Runners list in `RunnerResolver` instance */
    destroy() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this[RUNNER_BRIDGE_CONTROLLER].destroy();
        });
    }
    /** Returns a new control object for the same Runner instance */
    cloneControl() {
        return __awaiter(this, void 0, void 0, function* () {
            const runnerController = yield this[RUNNER_BRIDGE_CONTROLLER].cloneControl();
            return runnerController.resolvedRunner;
        });
    }
    /**
     * When a Runner is flagged for transfer, if it is used as argument or as method result,
     * the original control will be transferred. The original Resolved Runner will lose control.
     * In this case, the transfer of the Resolved Runner will be faster
     * because it will not take time to request a copy of the control.
     * It is convenient to use as an automatic disconnect after returning the result of a method.
     */
    markForTransfer() {
        this[RUNNER_BRIDGE_CONTROLLER].markForTransfer();
        return this;
    }
}

function recursiveOverrideProperty(construct, proto) {
    for (const key of Object.getOwnPropertyNames(proto.prototype)) {
        if (!(key in RunnerBridge.prototype)) {
            construct.prototype[key] = function (...args) {
                return this[EXECUTE_RUNNER_BRIDGE_METHOD](key, args);
            };
        }
        const parent = Object.getPrototypeOf(proto);
        if (parent.prototype) {
            recursiveOverrideProperty(construct, parent);
        }
    }
}
function resolveRunnerBridgeConstructor(runner) {
    const className = 'Resolved' + runner.name;
    const ResolvedRunner = { [className]: class extends RunnerBridge {
        } }[className];
    recursiveOverrideProperty(ResolvedRunner, runner);
    return ResolvedRunner;
}

class PromisesResolver {
    constructor() {
        this.promises = new Map();
    }
    promise(id) {
        return new Promise((resolve, reject) => this.promises.set(id, { resolve: resolve, reject }));
    }
    resolve(id, data) {
        const promise$ = this.promises.get(id);
        if (promise$) {
            this.promises.delete(id);
            promise$.resolve(data);
        }
    }
    reject(id, error) {
        const promise$ = this.promises.get(id);
        if (promise$) {
            this.promises.delete(id);
            promise$.reject(error);
        }
    }
    forget(id) {
        const promise$ = this.promises.get(id);
        this.promises.delete(id);
        return promise$;
    }
}

class RunnerController {
    constructor(config) {
        this.isMarkedForTransfer = false;
        this.promises = new PromisesResolver();
        this.lastActionId = 0;
        this.errorSerializer = WORKER_RUNNER_ERROR_SERIALIZER;
        const bridgeConstructor = config.runnerBridgeConstructors[config.runnerId];
        if (!bridgeConstructor) {
            throw new RunnerInitError({
                message: WORKER_RUNNER_ERROR_MESSAGES.RUNNER_WAS_DISCONNECTED({ runnerName: this.runnerName }),
            });
        }
        this.resolvedRunner = new bridgeConstructor(this);
        this.runnerId = config.runnerId;
        this.port = config.port;
        this.port.onmessage = this.onPortMessage.bind(this);
        this.onDisconnected = config.onDisconnected;
        this.runnerBridgeConstructors = config.runnerBridgeConstructors;
        this.runners = config.runners;
    }
    onPortMessage(message) {
        this.handleAction(message.data);
    }
    nextActionId() {
        return this.lastActionId++;
    }
    execute(methodName, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const actionId = this.nextActionId();
            const executePromise$ = this.promises
                .promise(actionId);
            let serializedArgumentsData;
            try {
                serializedArgumentsData = yield NodeRunnerResolverBase.serializeArguments(args);
            }
            catch (error) {
                this.promises.forget(actionId);
                throw error;
            }
            this.sendAction({
                type: RunnerControllerAction.EXECUTE,
                id: actionId,
                args: serializedArgumentsData.args,
                method: methodName,
            }, serializedArgumentsData.transfer);
            const actionResult = yield executePromise$;
            if (actionResult.type === RunnerEnvironmentAction.EXECUTED_WITH_RUNNER_RESULT) {
                return this.buildControlClone(actionResult.runnerId, actionResult.port).resolvedRunner;
            }
            return actionResult.response;
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            const actionId = this.nextActionId();
            const disconnectPromise$ = this.promises.promise(actionId);
            this.sendAction({
                type: RunnerControllerAction.DISCONNECT,
                id: actionId,
            });
            yield disconnectPromise$;
            this.onDisconnect();
        });
    }
    destroy() {
        return __awaiter(this, void 0, void 0, function* () {
            const actionId = this.nextActionId();
            const destroyPromise$ = this.promises.promise(actionId);
            this.sendAction({
                type: RunnerControllerAction.DESTROY,
                id: actionId,
            });
            yield destroyPromise$;
        });
    }
    buildControlClone(runnerId, port) {
        return new this.constructor({
            runnerId,
            runnerBridgeConstructors: this.runnerBridgeConstructors,
            port,
            runners: this.runners,
        });
    }
    get runnerName() {
        return this.runners[this.runnerId].name;
    }
    cloneControl() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.buildControlClone(this.runnerId, yield this.resolveControl());
        });
    }
    transferControl() {
        if (!this.port) {
            throw new RunnerWasDisconnectedError({
                message: WORKER_RUNNER_ERROR_MESSAGES.RUNNER_WAS_DISCONNECTED({ runnerName: this.runnerName }),
            });
        }
        const port = this.port;
        this.onDisconnect(false);
        return port;
    }
    markForTransfer() {
        if (!this.port) {
            throw new RunnerWasDisconnectedError({
                message: WORKER_RUNNER_ERROR_MESSAGES.RUNNER_WAS_DISCONNECTED({ runnerName: this.runnerName }),
            });
        }
        this.isMarkedForTransfer = true;
    }
    resolveControl() {
        return __awaiter(this, void 0, void 0, function* () {
            const actionId = this.nextActionId();
            const promise$ = this.promises.promise(actionId);
            this.sendAction({
                type: RunnerControllerAction.RESOLVE,
                id: actionId,
            });
            return (yield promise$).port;
        });
    }
    resolveOrTransferControl() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isMarkedForTransfer) {
                return this.transferControl();
            }
            return this.resolveControl();
        });
    }
    handleAction(action) {
        switch (action.type) {
            case RunnerEnvironmentAction.DISCONNECTED:
            case RunnerEnvironmentAction.EXECUTED:
            case RunnerEnvironmentAction.EXECUTED_WITH_RUNNER_RESULT:
            case RunnerEnvironmentAction.RESOLVED:
                this.promises.resolve(action.id, action);
                break;
            case RunnerEnvironmentAction.DESTROYED:
                const resolvedPromise = this.promises.forget(action.id);
                this.onDisconnect();
                resolvedPromise === null || resolvedPromise === void 0 ? void 0 : resolvedPromise.resolve(action);
                break;
            case RunnerEnvironmentAction.EXECUTE_ERROR:
                this.promises.reject(action.id, this.errorSerializer.deserialize(action));
                break;
            case RunnerEnvironmentAction.DESTROY_ERROR:
                const rejectedPromise = this.promises.forget(action.id);
                this.onDisconnect();
                rejectedPromise === null || rejectedPromise === void 0 ? void 0 : rejectedPromise.reject(this.errorSerializer.deserialize(action));
                break;
        }
    }
    sendAction(action, transfer) {
        if (!this.port) {
            if (action.type === RunnerControllerAction.EXECUTE) {
                throw new RunnerExecuteError({
                    message: WORKER_RUNNER_ERROR_MESSAGES.RUNNER_WAS_DISCONNECTED({ runnerName: this.runnerName }),
                });
            }
            else {
                throw new RunnerWasDisconnectedError({
                    message: WORKER_RUNNER_ERROR_MESSAGES.RUNNER_WAS_DISCONNECTED({ runnerName: this.runnerName }),
                });
            }
        }
        this.port.postMessage(action, transfer);
    }
    onDisconnect(closePort = true) {
        var _a;
        this.promises.promises.forEach(promise => {
            promise.reject(new RunnerWasDisconnectedError({
                message: WORKER_RUNNER_ERROR_MESSAGES.RUNNER_WAS_DISCONNECTED({ runnerName: this.runnerName }),
            }));
        });
        this.promises.promises.clear();
        if (!this.port) {
            throw new RunnerWasDisconnectedError({
                message: WORKER_RUNNER_ERROR_MESSAGES.RUNNER_WAS_DISCONNECTED({ runnerName: this.runnerName }),
            });
        }
        if (closePort) {
            this.port.close();
        }
        this.port.onmessage = null;
        this.port = undefined;
        (_a = this.onDisconnected) === null || _a === void 0 ? void 0 : _a.call(this);
    }
}

var RunnerArgumentType;
(function (RunnerArgumentType) {
    RunnerArgumentType[RunnerArgumentType["JSON"] = 0] = "JSON";
    RunnerArgumentType[RunnerArgumentType["RUNNER_INSTANCE"] = 1] = "RUNNER_INSTANCE";
})(RunnerArgumentType || (RunnerArgumentType = {}));

/** Allows you to use `Transferable` data as argument or a method result. */
class TransferRunnerData {
    constructor(data, transfer) {
        this.data = data;
        this.transfer = transfer;
    }
}

const DEFAULT_RUNNER_RESOLVER_BASE_CONFIG = {
    workerName: 'Worker Runner',
    runners: [],
    workerPath: 'worker.js',
};
class NodeRunnerResolverBase {
    constructor(config) {
        this.initPromises = new PromisesResolver();
        this.lastActionId = 0;
        this.workerMessageHandler = this.onWorkerMessage.bind(this);
        this.RunnerControllerConstructor = RunnerController;
        this.errorSerializer = WORKER_RUNNER_ERROR_SERIALIZER;
        this.runnerControllers = new Set();
        this.runnerBridgeConstructors = new Array();
        this.runners = config.runners || DEFAULT_RUNNER_RESOLVER_BASE_CONFIG.runners;
        this.workerName = config.workerPath || DEFAULT_RUNNER_RESOLVER_BASE_CONFIG.workerName;
        this.workerPath = config.workerPath || DEFAULT_RUNNER_RESOLVER_BASE_CONFIG.workerPath;
    }
    static serializeArguments(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const serializedArgs = {
                args: new Array(),
                transfer: new Array(),
            };
            const argsMap = new Map();
            yield Promise.all(args.map((argumentWithTransferData, index) => __awaiter(this, void 0, void 0, function* () {
                let argument;
                if (argumentWithTransferData instanceof TransferRunnerData) {
                    serializedArgs.transfer.push(...argumentWithTransferData.transfer);
                    argument = argumentWithTransferData.data;
                }
                else {
                    argument = argumentWithTransferData;
                }
                if (RunnerBridge.isRunnerBridge(argument)) {
                    const controller = argument[RUNNER_BRIDGE_CONTROLLER];
                    const transferPort = yield controller.resolveOrTransferControl();
                    argsMap.set(index, {
                        type: RunnerArgumentType.RUNNER_INSTANCE,
                        port: transferPort,
                        runnerId: controller.runnerId,
                    });
                    serializedArgs.transfer.push(transferPort);
                }
                else {
                    argsMap.set(index, {
                        type: RunnerArgumentType.JSON,
                        data: argument,
                    });
                }
            })));
            for (let i = 0; i < args.length; i++) {
                serializedArgs.args.push(argsMap.get(i));
            }
            return serializedArgs;
        });
    }
    /** Launches and prepares RunnerResolver for work */
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            this.runnerBridgeConstructors = this.runners.map(runner => resolveRunnerBridgeConstructor(runner));
            yield this.initWorker();
        });
    }
    /** Returns a runner control object that will call the methods of the source instance */
    resolve(runner, ...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const runnerId = this.getRunnerId(runner);
            const action = yield this.sendInitAction(runnerId, args);
            return this.buildRunnerController(runnerId, action.port).resolvedRunner;
        });
    }
    getRunnerId(runner) {
        const runnerId = this.runners.indexOf(runner);
        if (runnerId < 0) {
            throw new RunnerInitError({
                message: WORKER_RUNNER_ERROR_MESSAGES.CONSTRUCTOR_NOT_FOUND({ runnerName: runner.name }),
            });
        }
        return runnerId;
    }
    buildRunnerController(runnerId, port) {
        const runnerController = new this.RunnerControllerConstructor({
            onDisconnected: () => this.runnerControllers.delete(runnerController),
            port,
            runnerBridgeConstructors: this.runnerBridgeConstructors,
            runnerId,
            runners: this.runners,
        });
        this.runnerControllers.add(runnerController);
        return runnerController;
    }
    sendInitAction(runnerId, args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const actionId = this.nextActionId();
                const promise$ = this.initPromises.promise(actionId);
                const serializedArgs = yield NodeRunnerResolverBase.serializeArguments(args);
                this.sendAction({
                    type: NodeResolverAction.INIT_RUNNER,
                    id: actionId,
                    runnerId,
                    args: serializedArgs.args,
                }, serializedArgs.transfer);
                return yield promise$;
            }
            catch (error) {
                if (error instanceof WorkerRunnerError) {
                    throw error;
                }
                throw new RunnerInitError(this.errorSerializer.serialize(error, {
                    message: WORKER_RUNNER_ERROR_MESSAGES.RUNNER_INIT_ERROR({
                        runnerName: this.runners[runnerId].name,
                    }),
                }));
            }
        });
    }
    nextActionId() {
        return this.lastActionId++;
    }
    onWorkerMessage(message) {
        this.handleWorkerAction(message.data);
    }
    handleWorkerAction(action) {
        switch (action.type) {
            case WorkerResolverAction.RUNNER_INITED:
                this.initPromises.resolve(action.id, action);
                break;
            case WorkerResolverAction.RUNNER_INIT_ERROR:
                this.initPromises.reject(action.id, this.errorSerializer.deserialize(action));
                break;
            case WorkerResolverAction.DESTROYED:
                if (!this.destroyPromise) {
                    throw new WorkerRunnerUnexpectedError({
                        message: WORKER_RUNNER_ERROR_MESSAGES.WORKER_DESTROYED_WITHOUT_CALL(),
                    });
                }
                this.destroyPromise.resolve();
                this.destroyPromise = undefined;
                break;
        }
    }
    initWorker() {
        return __awaiter(this, void 0, void 0, function* () {
            const worker = new Worker(this.workerPath, { name: this.workerName });
            yield new Promise(resolve => {
                worker.onmessage = (message) => {
                    if (message.data && message.data.type === WorkerResolverAction.WORKER_INITED) {
                        resolve();
                    }
                };
            });
            this.worker = worker;
            this.worker.addEventListener('message', this.workerMessageHandler);
        });
    }
    destroyRunnerControllers() {
        this.runnerControllers.forEach(state => state.onDisconnect());
        this.runnerControllers.clear();
    }
    /**
     * Destroying of all resolved Runners instance
     * @param force Destroy by skipping the call the destruction method on the remaining instances
     */
    destroy(force = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.worker) {
                const destroyPromise$ = new Promise((resolve, reject) => {
                    this.destroyPromise = { resolve, reject };
                });
                this.sendAction({
                    type: NodeResolverAction.DESTROY,
                    force,
                });
                yield destroyPromise$;
                this.destroyRunnerControllers();
                this.worker.terminate();
                this.worker = undefined;
            }
            else {
                throw new WorkerNotInitError();
            }
        });
    }
    sendAction(action, transfer) {
        if (this.worker) { // TODO use MessageChanel
            this.worker.postMessage(action, transfer);
        }
        else {
            throw new WorkerNotInitError();
        }
    }
}

class NodeAndLocalRunnerResolverBase extends NodeRunnerResolverBase {
    initWorker() {
        const _super = Object.create(null, {
            initWorker: { get: () => super.initWorker }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (this.WorkerResolverConstructor) {
                this.localWorkerRunnerResolver = new this.WorkerResolverConstructor({ runners: this.runners });
                this.localMessageChanel = new MessageChannel();
                this.localMessageChanel.port1.onmessage = this.onWorkerMessage.bind(this);
                this.localWorkerRunnerResolver.sendAction
                    = this.localMessageChanel.port2.postMessage.bind(this.localMessageChanel.port2);
                this.localMessageChanel.port2.onmessage
                    = this.localWorkerRunnerResolver.onMessage.bind(this.localWorkerRunnerResolver);
            }
            else {
                return _super.initWorker.call(this);
            }
        });
    }
    destroy(force = false) {
        const _super = Object.create(null, {
            destroy: { get: () => super.destroy }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (this.WorkerResolverConstructor) {
                if (this.localWorkerRunnerResolver) {
                    const destroyPromise$ = new Promise((resolve, reject) => {
                        this.destroyPromise = { resolve, reject };
                    });
                    this.sendAction({ type: _worker_runner_core__WEBPACK_IMPORTED_MODULE_0__["NodeResolverAction"].DESTROY, force });
                    yield destroyPromise$;
                    this.destroyRunnerControllers();
                    this.localWorkerRunnerResolver.sendAction = undefined;
                    if (this.localMessageChanel) {
                        this.localMessageChanel.port2.onmessage = undefined;
                        this.localMessageChanel.port1.onmessage = undefined;
                        this.localMessageChanel = undefined;
                    }
                    this.localWorkerRunnerResolver = undefined;
                }
                else {
                    throw new WorkerNotInitError();
                }
            }
            else {
                return _super.destroy.call(this, force);
            }
        });
    }
    sendAction(action, transfer) {
        if (this.WorkerResolverConstructor) {
            if (this.localMessageChanel) {
                this.localMessageChanel.port1.postMessage(action, transfer);
            }
            else {
                throw new WorkerNotInitError();
            }
        }
        else {
            super.sendAction(action, transfer);
        }
    }
    /**
     * Wraps the Runner and returns a Runner control object that will call the methods of the original Runner instance.
     * The original Runner instance will be executed in the same area in which it was wrapped.
     */
    wrapRunner(runnerInstance) {
        if (!this.localWorkerRunnerResolver) {
            throw new WorkerNotInitError();
        }
        const runnerId = this.getRunnerId(Object.getPrototypeOf(runnerInstance).constructor);
        const port = this.localWorkerRunnerResolver.wrapRunner(runnerInstance);
        const controller = this.buildRunnerController(runnerId, port);
        return controller.resolvedRunner;
    }
}

class RunnerEnvironment {
    constructor(config) {
        this.ports = new Array();
        this.connectedControllers = new Array();
        this.errorSerializer = WORKER_RUNNER_ERROR_SERIALIZER;
        this.runnerInstance = config.runner;
        this.workerRunnerResolver = config.workerRunnerResolver;
        this.ports.push(config.port);
        config.port.onmessage = this.onPortMessage.bind(this, config.port);
        this.onDestroyed = config.onDestroyed;
    }
    onPortMessage(port, message) {
        this.handleAction(port, message.data);
    }
    get runnerName() {
        return this.runnerInstance.constructor.name;
    }
    handleAction(port, action) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (action.type) {
                case RunnerControllerAction.EXECUTE:
                    try {
                        yield this.execute(port, action);
                    }
                    catch (error) {
                        this.sendAction(port, Object.assign({ id: action.id, type: RunnerEnvironmentAction.EXECUTE_ERROR }, this.errorSerializer.serialize(error, {
                            errorCode: WorkerRunnerErrorCode.RUNNER_EXECUTE_ERROR,
                            name: RunnerExecuteError.name,
                            message: WORKER_RUNNER_ERROR_MESSAGES.UNEXPECTED_ERROR({ runnerName: this.runnerName }),
                            stack: (error === null || error === void 0 ? void 0 : error.stack) || new Error().stack,
                        })));
                    }
                    break;
                case RunnerControllerAction.DESTROY:
                    try {
                        yield this.destroy(port, action);
                    }
                    catch (error) {
                        this.sendAction(port, Object.assign({ id: action.id, type: RunnerEnvironmentAction.DESTROY_ERROR }, this.errorSerializer.serialize(error, {
                            errorCode: WorkerRunnerErrorCode.RUNNER_DESTROY_ERROR,
                            name: RunnerDestroyError.name,
                            message: WORKER_RUNNER_ERROR_MESSAGES.UNEXPECTED_ERROR({ runnerName: this.runnerName }),
                            stack: (error === null || error === void 0 ? void 0 : error.stack) || new Error().stack,
                        })));
                    }
                    break;
                case RunnerControllerAction.RESOLVE:
                    yield this.resolve(port, action);
                    break;
                case RunnerControllerAction.DISCONNECT:
                    yield this.disconnect(port, action);
                    break;
            }
        });
    }
    execute(port, action) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            const deserializeArgumentsData = this.workerRunnerResolver.deserializeArguments(action.args);
            try {
                response = this.runnerInstance[action.method](...deserializeArgumentsData.args);
            }
            catch (error) {
                this.sendAction(port, Object.assign({ id: action.id, type: RunnerEnvironmentAction.EXECUTE_ERROR }, this.errorSerializer.serialize(error, {
                    errorCode: WorkerRunnerErrorCode.RUNNER_EXECUTE_ERROR,
                    message: WORKER_RUNNER_ERROR_MESSAGES.EXECUTE_ERROR({
                        runnerName: this.runnerName,
                        methodName: action.method,
                    }),
                    name: RunnerExecuteError.name,
                    stack: (error === null || error === void 0 ? void 0 : error.stack) || new Error().stack,
                })));
                yield Promise.all(deserializeArgumentsData.controllers
                    .map(controller => controller.disconnect()));
                return;
            }
            if (response instanceof Promise) {
                try {
                    yield this.handleExecuteResponse(port, action, yield response);
                }
                catch (error) {
                    this.sendAction(port, Object.assign({ id: action.id, type: RunnerEnvironmentAction.EXECUTE_ERROR }, this.errorSerializer.serialize(error, {
                        errorCode: WorkerRunnerErrorCode.RUNNER_EXECUTE_ERROR,
                        message: WORKER_RUNNER_ERROR_MESSAGES.EXECUTE_ERROR({
                            runnerName: this.runnerName,
                            methodName: action.method,
                        }),
                        name: RunnerExecuteError.name,
                        stack: (error === null || error === void 0 ? void 0 : error.stack) || new Error().stack,
                    })));
                    yield Promise.all(deserializeArgumentsData.controllers
                        .map(controller => controller.disconnect()));
                    return;
                }
            }
            else {
                yield this.handleExecuteResponse(port, action, response);
            }
            this.addConnectedControllers(deserializeArgumentsData.controllers);
        });
    }
    addConnectedControllers(controllers) {
        this.connectedControllers.push(...controllers);
    }
    disconnect(port, action) {
        return __awaiter(this, void 0, void 0, function* () {
            const portIndex = this.ports.indexOf(port);
            this.ports.splice(portIndex, 1);
            if (this.ports.length === 0) {
                yield this.destroy();
            }
            this.sendAction(port, {
                type: RunnerEnvironmentAction.DISCONNECTED,
                id: action.id,
            });
            port.onmessage = null;
            port.close();
        });
    }
    handleExecuteResponse(port, action, responseWithTransferData, transferable = []) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            if (responseWithTransferData instanceof TransferRunnerData) {
                transferable.push(...responseWithTransferData.transfer);
                response = responseWithTransferData.data;
            }
            else {
                response = responseWithTransferData;
            }
            if (RunnerBridge.isRunnerBridge(response)) {
                const runnerController = yield response[RUNNER_BRIDGE_CONTROLLER];
                const transferPort = yield runnerController.resolveOrTransferControl();
                this.sendAction(port, {
                    type: RunnerEnvironmentAction.EXECUTED_WITH_RUNNER_RESULT,
                    id: action.id,
                    port: transferPort,
                    runnerId: runnerController.runnerId,
                }, [transferPort, ...transferable]);
            }
            else {
                this.sendAction(port, {
                    type: RunnerEnvironmentAction.EXECUTED,
                    id: action.id,
                    response: response,
                }, transferable);
            }
        });
    }
    notifyControllersAboutDestruction() {
        for (const port of this.ports) {
            this.sendAction(port, {
                type: RunnerEnvironmentAction.DESTROYED,
                id: -1,
            });
            port.onmessage = null;
            port.close();
        }
        this.ports = [];
    }
    destroy(port, action) {
        return __awaiter(this, void 0, void 0, function* () {
            let destroyError;
            if (this.runnerInstance.destroy) {
                let response;
                try {
                    response = this.runnerInstance.destroy();
                }
                catch (error) {
                    if (action && port) {
                        destroyError = Object.assign({ id: action.id, type: RunnerEnvironmentAction.DESTROY_ERROR }, this.errorSerializer.serialize(error, {
                            errorCode: WorkerRunnerErrorCode.RUNNER_DESTROY_ERROR,
                            message: WORKER_RUNNER_ERROR_MESSAGES.EXECUTE_ERROR({
                                runnerName: this.runnerName,
                                methodName: 'destroy',
                            }),
                            name: RunnerExecuteError.name,
                            stack: (error === null || error === void 0 ? void 0 : error.stack) || new Error().stack,
                        }));
                    }
                }
                if (response instanceof Promise) {
                    try {
                        yield response;
                    }
                    catch (error) {
                        if (action && port) {
                            destroyError = Object.assign({ id: action.id, type: RunnerEnvironmentAction.DESTROY_ERROR }, this.errorSerializer.serialize(error, {
                                errorCode: WorkerRunnerErrorCode.RUNNER_DESTROY_ERROR,
                                message: WORKER_RUNNER_ERROR_MESSAGES.EXECUTE_ERROR({
                                    runnerName: this.runnerName,
                                    methodName: 'destroy',
                                }),
                                name: RunnerExecuteError.name,
                                stack: (error === null || error === void 0 ? void 0 : error.stack) || new Error().stack,
                            }));
                        }
                    }
                }
            }
            if (port) {
                const portIndex = this.ports.indexOf(port);
                this.ports.splice(portIndex, 1);
                port.onmessage = null;
                this.notifyControllersAboutDestruction();
                if (action) {
                    this.sendAction(port, destroyError || {
                        id: action.id,
                        type: RunnerEnvironmentAction.DESTROYED,
                    });
                }
                port.close();
            }
            else {
                this.notifyControllersAboutDestruction();
            }
            this.onDestroyed();
        });
    }
    resolve(port, action) {
        return __awaiter(this, void 0, void 0, function* () {
            const messageChanel = new MessageChannel();
            messageChanel.port1.onmessage = this.onPortMessage.bind(this, messageChanel.port1);
            this.ports.push(messageChanel.port1);
            this.sendAction(port, {
                type: RunnerEnvironmentAction.RESOLVED,
                id: action.id,
                port: messageChanel.port2,
            }, [messageChanel.port2]);
        });
    }
    sendAction(port, action, transfer) {
        port.postMessage(action, transfer);
    }
}

class WorkerRunnerResolverBase {
    constructor(config) {
        this.runnerEnvironments = new Set();
        this.runnerBridgeConstructors = new Array();
        this.RunnerEnvironmentConstructor = RunnerEnvironment;
        this.errorSerializer = WORKER_RUNNER_ERROR_SERIALIZER;
        this.RunnerControllerConstructor = RunnerController;
        this.runners = config.runners;
        this.runnerBridgeConstructors = this.runners.map(runner => resolveRunnerBridgeConstructor(runner));
    }
    run() {
        self.addEventListener('message', this.onMessage.bind(this));
        this.sendAction({ type: WorkerResolverAction.WORKER_INITED });
    }
    onMessage(message) {
        this.handleAction(message.data);
    }
    handleAction(action) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (action.type) {
                case NodeResolverAction.INIT_RUNNER:
                    try {
                        yield this.initRunnerInstance(action);
                    }
                    catch (error) {
                        this.sendAction(Object.assign({ id: action.id, type: WorkerResolverAction.RUNNER_INIT_ERROR }, this.errorSerializer.serialize(error, {
                            errorCode: WorkerRunnerErrorCode.RUNNER_INIT_ERROR,
                            name: RunnerInitError.name,
                            message: WORKER_RUNNER_ERROR_MESSAGES.UNEXPECTED_ERROR(),
                            stack: (error === null || error === void 0 ? void 0 : error.stack) || new Error().stack,
                        })));
                    }
                    break;
                case NodeResolverAction.DESTROY:
                    try {
                        yield this.destroyWorker(action.force);
                    }
                    catch (error) {
                        this.sendAction({ type: WorkerResolverAction.DESTROYED });
                    }
                    break;
            }
        });
    }
    initRunnerInstance(action) {
        return __awaiter(this, void 0, void 0, function* () {
            const runnerConstructor = this.runners[action.runnerId];
            if (runnerConstructor) {
                const messageChanel = new MessageChannel();
                const deserializeArgumentsData = this.deserializeArguments(action.args);
                let runner;
                try {
                    runner = new runnerConstructor(...deserializeArgumentsData.args);
                }
                catch (error) {
                    this.sendAction(Object.assign({ id: action.id, type: WorkerResolverAction.RUNNER_INIT_ERROR }, this.errorSerializer.serialize(error, {
                        errorCode: WorkerRunnerErrorCode.RUNNER_INIT_ERROR,
                        message: WORKER_RUNNER_ERROR_MESSAGES.RUNNER_INIT_ERROR({
                            runnerName: runnerConstructor.name,
                        }),
                        name: RunnerInitError.name,
                        stack: (error === null || error === void 0 ? void 0 : error.stack) || new Error().stack,
                    })));
                    yield Promise.all(deserializeArgumentsData.controllers
                        .map(controller => controller.disconnect()));
                    return;
                }
                const runnerEnvironment = new this.RunnerEnvironmentConstructor({
                    port: messageChanel.port1,
                    runner,
                    workerRunnerResolver: this,
                    onDestroyed: () => this.runnerEnvironments.delete(runnerEnvironment),
                });
                this.runnerEnvironments.add(runnerEnvironment);
                runnerEnvironment.addConnectedControllers(deserializeArgumentsData.controllers);
                this.sendAction({
                    type: WorkerResolverAction.RUNNER_INITED,
                    id: action.id,
                    port: messageChanel.port2,
                }, [messageChanel.port2]);
            }
            else {
                throw new RunnerInitError();
            }
        });
    }
    deserializeArguments(args) {
        const result = {
            args: new Array(),
            controllers: new Array(),
        };
        for (const argument of args) {
            switch (argument.type) {
                case RunnerArgumentType.RUNNER_INSTANCE:
                    const controller = new this.RunnerControllerConstructor({
                        runnerId: argument.runnerId,
                        runnerBridgeConstructors: this.runnerBridgeConstructors,
                        port: argument.port,
                        runners: this.runners,
                    });
                    result.controllers.push(controller);
                    result.args.push(controller.resolvedRunner);
                    break;
                default:
                    result.args.push(argument.data);
            }
        }
        return result;
    }
    destroyWorker(force = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!force) {
                const destroying$ = new Array();
                this.runnerEnvironments.forEach((runnerEnvironment) => {
                    destroying$.push(runnerEnvironment.destroy());
                });
                yield Promise.all(destroying$);
            }
            this.runnerEnvironments.clear();
            this.sendAction({ type: WorkerResolverAction.DESTROYED });
        });
    }
    sendAction(action, transfer) {
        // @ts-ignore
        postMessage(action, transfer);
    }
    wrapRunner(runner) {
        const messageChanel = new MessageChannel();
        const runnerEnvironment = new this.RunnerEnvironmentConstructor({
            port: messageChanel.port1,
            runner,
            workerRunnerResolver: this,
            onDestroyed: () => this.runnerEnvironments.delete(runnerEnvironment),
        });
        this.runnerEnvironments.add(runnerEnvironment);
        return messageChanel.port2;
    }
}


//# sourceMappingURL=core.js.map


/***/ }),

/***/ "./node_modules/@worker-runner/promise/esm/promise.js":
/*!************************************************************!*\
  !*** ./node_modules/@worker-runner/promise/esm/promise.js ***!
  \************************************************************/
/*! exports provided: LocalRunnerResolver, NodeRunnerResolver, RunnerResolver, WorkerRunnerResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalRunnerResolver", function() { return LocalRunnerResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeRunnerResolver", function() { return NodeRunnerResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerResolver", function() { return RunnerResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerRunnerResolver", function() { return WorkerRunnerResolver; });
/* harmony import */ var _worker_runner_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @worker-runner/core */ "./node_modules/@worker-runner/core/esm/core.js");


class NodeRunnerResolver extends _worker_runner_core__WEBPACK_IMPORTED_MODULE_0__["NodeAndLocalRunnerResolverBase"] {
}

class WorkerRunnerResolver extends _worker_runner_core__WEBPACK_IMPORTED_MODULE_0__["WorkerRunnerResolverBase"] {
}

class LocalRunnerResolver extends NodeRunnerResolver {
    constructor() {
        super(...arguments);
        this.WorkerResolverConstructor = WorkerRunnerResolver;
    }
}

class RunnerResolver extends NodeRunnerResolver {
    constructor(config) {
        super(config);
        this.workerRunnerResolver = new WorkerRunnerResolver(config);
    }
    runInWorker() {
        this.workerRunnerResolver.run();
    }
}


//# sourceMappingURL=promise.js.map


/***/ }),

/***/ "./src/scripts/common.ts":
/*!*******************************!*\
  !*** ./src/scripts/common.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.runnerResolver = void 0;
var promise_1 = __webpack_require__(/*! @worker-runner/promise */ "./node_modules/@worker-runner/promise/esm/promise.js");
var library_runner_1 = __webpack_require__(/*! ./library-runner */ "./src/scripts/library-runner.ts");
exports.runnerResolver = new promise_1.RunnerResolver({
    runners: [library_runner_1.LibraryRunner],
    workerPath: 'worker-injector.js',
});


/***/ }),

/***/ "./src/scripts/library-runner.ts":
/*!***************************************!*\
  !*** ./src/scripts/library-runner.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryRunner = void 0;
var WORKER_LOG_STYLE = 'background-color: #FFCC33; padding: 4px; border-radius: 3px; color: black;';
var BOOK_LOG_STYLE = 'font-weight: bold;';
var SECONDS_LOG_STYLE = BOOK_LOG_STYLE;
var LibraryRunner = /** @class */ (function () {
    function LibraryRunner(books) {
        if (books === void 0) { books = []; }
        this.books = books;
    }
    LibraryRunner.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("%cWorker:%c Book %c\"" + book + "\"%c added to library", WORKER_LOG_STYLE, '', BOOK_LOG_STYLE, '');
    };
    LibraryRunner.prototype.checkBook = function (book) {
        var isExist = this.books.indexOf(book) !== -1;
        console.log("%cWorker:%c Book %c\"" + book + "\"%c is exist in the library: ", WORKER_LOG_STYLE, '', BOOK_LOG_STYLE, '', isExist);
        return isExist;
    };
    LibraryRunner.prototype.reserveBook = function (book, seconds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("%cWorker:%c Book %c\"" + book + "\"%c reserved for %c" + seconds + "%c seconds", WORKER_LOG_STYLE, '', BOOK_LOG_STYLE, '', SECONDS_LOG_STYLE, '');
                        this.books = this.books.filter(function (libraryBook) { return libraryBook !== book; });
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, seconds * 1000); })];
                    case 1:
                        _a.sent();
                        this.books.push(book);
                        console.log("%cWorker:%c Reservation for book %c\"" + book + "\"%c completed after %c" + seconds + "%c seconds", WORKER_LOG_STYLE, '', BOOK_LOG_STYLE, '', SECONDS_LOG_STYLE, '');
                        return [2 /*return*/, book];
                }
            });
        });
    };
    return LibraryRunner;
}());
exports.LibraryRunner = LibraryRunner;


/***/ })

}]);
//# sourceMappingURL=commons.js.map