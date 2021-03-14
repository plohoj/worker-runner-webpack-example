class Logger {
    private readonly MAIN_AREA_LOG_STYLE = 'background-color: #33CC33; padding: 4px; border-radius: 3px; color: black;';
    private readonly WORKER_LOG_STYLE = 'background-color: #FFCC33; padding: 4px; border-radius: 3px; color: black;';

    mainArea(...message: unknown[]) {
        console.log('%cMain Area:%c', this.MAIN_AREA_LOG_STYLE, '', ...message);
    }

    workerArea(...message: unknown[]) {
        console.log('%cWorker Area:%c', this.WORKER_LOG_STYLE, '', ...message);
    }
};

export const logger = new Logger;
