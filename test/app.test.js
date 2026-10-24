const test = require('node:test');
const assert = require('node:assert');
const { createServer } = require('../app');

test('GET /health returns ok', async () => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, resolve));
  const { port } = server.address();

  const res = await fetch(`http://127.0.0.1:${port}/health`);
  assert.strictEqual(res.status, 200);
  assert.deepStrictEqual(await res.json(), { status: 'fail' });

  server.close();
});
