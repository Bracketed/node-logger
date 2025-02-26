import type { LoggerStyleResolvable } from '../Style/Resolveable';
import type { LoggerTimestampOptions } from '../Utilities/Timestamp';

/**
 * The options for {@link LoggerLevel}.
 * @since 1.0.0
 */
export interface LoggerLevelOptions {
	/**
	 * The timestamp options. Set to `null` to disable timestamp parsing.
	 * @since 1.0.0
	 * @default {}
	 */
	timestamp?: LoggerTimestampOptions | null;

	/**
	 * The infix to be included between the timestamp and the message.
	 * @since 1.0.0
	 * @default ''
	 */
	infix?: string;

	/**
	 * The style options for the message.
	 * @since 1.0.0
	 * @default colorette.clear
	 */
	message?: LoggerStyleResolvable | null;
}
