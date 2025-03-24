export enum LogLevel {
    NONE = '',
    DEBUG = 'debug',
    INFO = 'info',
    WARN = 'warn',
    ERROR = 'error',
}

export class Logger {
    private static instance: Logger;
    private minLogLevel: LogLevel = LogLevel.INFO;
    private readonly levelsOrder: LogLevel[] = [
        LogLevel.NONE,
        LogLevel.DEBUG,
        LogLevel.INFO,
        LogLevel.WARN,
        LogLevel.ERROR,
    ];

    constructor() {}

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public setMinLogLevel(level: LogLevel): void {
        if (!this.isValidLogLevel(level)) {
            throw new Error(`Invalid log level: ${level}`);
        }
        this.minLogLevel = level;
    }

    private isValidLogLevel(level: LogLevel): boolean {
        return this.levelsOrder.includes(level);
    }

    private log(level: LogLevel, ...message: unknown[]): void {
        if (level === LogLevel.NONE || !this.allowLevelLog(level)) {
            return;
        }

        const timestamp = new Date().toISOString();
        console[level](`[${timestamp}] [${level.toLowerCase()}]`, ...message);
    }

    private allowLevelLog(level: LogLevel): boolean {
        if (!this.isValidLogLevel(level)) {
            throw new Error(`Invalid log level: ${level}`);
        }

        const currentLevelIndex = this.levelsOrder.indexOf(level);
        const minLevelIndex = this.levelsOrder.indexOf(this.minLogLevel);
        return currentLevelIndex >= minLevelIndex;
    }

    public debug(...message: unknown[]): void {
        this.log(LogLevel.DEBUG, ...message);
    }

    public info(...message: unknown[]): void {
        this.log(LogLevel.INFO, ...message);
    }

    public warn(...message: unknown[]): void {
        this.log(LogLevel.WARN, ...message);
    }

    public error(...message: unknown[]): void {
        this.log(LogLevel.ERROR, ...message);
    }
}
