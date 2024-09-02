import { Logger, LogLevel } from '../index.js';

const console = new Logger();

console.info('Hello World!');
console.debug('Hello World!');
console.warn('Hello World!');
console.error('Hello World!');
console.fatal('Hello World!');
console.trace('Hello World!');
console.write(LogLevel.Info, 'Hello World!');
