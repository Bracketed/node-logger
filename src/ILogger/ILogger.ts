import type { LogLevel } from './ILogLevel';

export interface ILogger {
	/**
	 * Checks whether a level is supported.
	 * @param level The level to check.
	 */
	has(level: LogLevel): boolean;

	/**
	 * Alias of {@link ILogger.write} with {@link LogLevel.Trace} as level.
	 * @param values The values to log.
	 */
	trace(...values: readonly unknown[]): void;

	/**
	 * Alias of {@link ILogger.write} with {@link LogLevel.Debug} as level.
	 * @param values The values to log.
	 */
	debug(...values: readonly unknown[]): void;

	/**
	 * Alias of {@link ILogger.write} with {@link LogLevel.Info} as level.
	 * @param values The values to log.
	 */
	info(...values: readonly unknown[]): void;

	/**
	 * Alias of {@link ILogger.write} with {@link LogLevel.Warn} as level.
	 * @param values The values to log.
	 */
	warn(...values: readonly unknown[]): void;

	/**
	 * Alias of {@link ILogger.write} with {@link LogLevel.Error} as level.
	 * @param values The values to log.
	 */
	error(...values: readonly unknown[]): void;

	/**
	 * Alias of {@link ILogger.write} with {@link LogLevel.Fatal} as level.
	 * @param values The values to log.
	 */
	fatal(...values: readonly unknown[]): void;

	/**
	 * Writes the log message given a level and the value(s).
	 * @param level The log level.
	 * @param values The values to log.
	 */
	write(level: LogLevel, ...values: readonly unknown[]): void;
}
