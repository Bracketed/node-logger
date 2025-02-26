import type { LoggerLevelOptions } from './LevelOptions';

/**
 * The logger format options.
 * @since 1.0.0
 */
export interface LoggerFormatOptions {
	/**
	 * The logger options for the lowest log level, used when calling {@link ILogger.trace}.
	 * @since 1.0.0
	 */
	trace?: LoggerLevelOptions;

	/**
	 * The logger options for the debug level, used when calling {@link ILogger.debug}.
	 * @since 1.0.0
	 */
	debug?: LoggerLevelOptions;

	/**
	 * The logger options for the info level, used when calling {@link ILogger.info}.
	 * @since 1.0.0
	 */
	info?: LoggerLevelOptions;

	/**
	 * The logger options for the warning level, used when calling {@link ILogger.warn}.
	 * @since 1.0.0
	 */
	warn?: LoggerLevelOptions;

	/**
	 * The logger options for the error level, used when calling {@link ILogger.error}.
	 * @since 1.0.0
	 */
	error?: LoggerLevelOptions;

	/**
	 * The logger options for the critical level, used when calling {@link ILogger.fatal}.
	 * @since 1.0.0
	 */
	fatal?: LoggerLevelOptions;

	/**
	 * The logger options for an unknown or uncategorised level.
	 * @since 1.0.0
	 */
	none?: LoggerLevelOptions;
}
