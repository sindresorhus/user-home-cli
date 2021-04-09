import {promisify} from 'util';
import {execFile} from 'child_process';
import test from 'ava';

const execFileP = promisify(execFile);

test('main', async t => {
	const {stdout} = await execFileP('./cli.js');
	t.true(stdout.trim().length > 0);
});
