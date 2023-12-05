import * as readline from 'readline';
import {
    stdin as input,
    stdout as output,
} from 'node:process';

export const terminalIO = readline.createInterface({ input, output });

export default terminalIO;
