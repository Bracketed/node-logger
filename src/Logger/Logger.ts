import { bgRed, cyan, gray, isColorSupported, magenta, red, white, yellow, type Color } from 'colorette';

import { Console } from 'node:console';
import { inspect, type InspectOptions } from 'node:util';

import { LogLevel } from '../ILogger/ILogLevel';
import type { LogMethods } from '../ILogger/ILogMethods';
import { Logger as BuiltinLogger } from '../ILogger/ILoggerStyle';

import type { LoggerFormatOptions } from './FormatOptions';
import { LoggerLevel } from './Level';
import type { LoggerLevelOptions } from './LevelOptions';
import type { LoggerOptions } from './Options';

export class Logger extends BuiltinLogger {
	/**
	 * The console this writes to.
	 * @since 1.0.0
	 */
	public readonly console: Console;

	/**
	 * The formats supported by the logger.
	 * @since 1.0.0
	 */
	public readonly formats: Map<LogLevel, LoggerLevel>;

	/**
	 * The string `write` will join values by.
	 * @since 1.0.0
	 */
	public readonly join: string;

	/**
	 * The inspect depth when logging objects.
	 * @since 1.0.0
	 */
	public readonly depth: number;

	public constructor(options: LoggerOptions = {}) {
		super(options.level ?? LogLevel.Info);

		this.console = new Console(options.stdout ?? process.stdout, options.stderr ?? process.stderr);
		this.formats = Logger.createFormatMap(options.format, options.defaultFormat);
		this.join = options.join ?? ' ';
		this.depth = options.depth ?? 2;
	}

	/**
	 * Writes the log message given a level and the value(s).
	 * @param level The log level.
	 * @param values The values to log.
	 */
	public override write(level: LogLevel, ...values: readonly unknown[]): void {
		if (level < this.level) return;

		const method = this.levels.get(level) ?? 'log';
		const formatter = this.formats.get(level) ?? this.formats.get(LogLevel.None)!;

		this.console[method](formatter.run(this.preprocess(values)));
	}

	/**
	 * Pre-processes an array of values.
	 * @since 1.0.0
	 * @param values The values to pre-process.
	 */
	protected preprocess(values: readonly unknown[]) {
		const inspectOptions: InspectOptions = { colors: isColorSupported, depth: this.depth };
		return values
			.map((value) => (typeof value === 'string' ? value : inspect(value, inspectOptions)))
			.join(this.join);
	}

	private get levels() {
		return Reflect.get(BuiltinLogger, 'levels') as Map<LogLevel, LogMethods>;
	}

	/**
	 * Gets whether or not colorette is enabled.
	 * @since 1.0.0
	 */
	public static get stylize() {
		return isColorSupported;
	}

	private static createFormatMap(
		options: LoggerFormatOptions = {},
		defaults: LoggerLevelOptions = options.none ?? {}
	) {
		return new Map<LogLevel, LoggerLevel>([
			[LogLevel.Trace, Logger.ensureDefaultLevel(options.trace, defaults, gray, 'TRACE')],
			[LogLevel.Debug, Logger.ensureDefaultLevel(options.debug, defaults, magenta, 'DEBUG')],
			[LogLevel.Info, Logger.ensureDefaultLevel(options.info, defaults, cyan, 'INFO')],
			[LogLevel.Warn, Logger.ensureDefaultLevel(options.warn, defaults, yellow, 'WARN')],
			[LogLevel.Error, Logger.ensureDefaultLevel(options.error, defaults, red, 'ERROR')],
			[LogLevel.Fatal, Logger.ensureDefaultLevel(options.fatal, defaults, bgRed, 'FATAL')],
			[LogLevel.None, Logger.ensureDefaultLevel(options.none, defaults, white, '')],
		]);
	}

	private static ensureDefaultLevel(
		options: LoggerLevelOptions | undefined,
		defaults: LoggerLevelOptions,
		color: Color,
		name: string
	) {
		if (options) return new LoggerLevel(options);
		return new LoggerLevel({
			...defaults,
			timestamp: defaults.timestamp === null ? null : { ...(defaults.timestamp ?? {}), color },
			infix: name.length ? `${color(name.padEnd(5, ' '))} - ` : '',
		});
	}
}
