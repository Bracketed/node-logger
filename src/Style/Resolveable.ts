import * as Colorette from 'colorette';
import type { LoggerStyleOptions } from './Options';

/**
 * The value accepted by {@link LoggerStyle}'s constructor. Read `colorette`'s documentation for more information.
 * @since 1.0.0
 * @seealso https://www.npmjs.com/package/colorette
 */
export type LoggerStyleResolvable = Colorette.Color | LoggerStyleOptions;
