import type { LoggerStyleBackground } from './Background';
import type { LoggerStyleEffect } from './Effect';
import type { LoggerStyleText } from './Text';

/**
 * The options for {@link LoggerStyle}.
 * @since 1.0.0
 */
export interface LoggerStyleOptions {
	/**
	 * The text effects, e.g. `italic`, `strikethrough`, etc.
	 * @since 1.0.0
	 */
	effects?: LoggerStyleEffect[];

	/**
	 * The text color, e.g. `red` or `yellow`.
	 * @since 1.0.0
	 */
	text?: LoggerStyleText;

	/**
	 * The background color, e.g. `magenta` or `red`.
	 * @since 1.0.0
	 */
	background?: LoggerStyleBackground;
}
