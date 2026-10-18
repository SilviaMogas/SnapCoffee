import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('canonical and Open Graph use the final public origin', () => {
  const html = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)[1];
  const ogUrl = html.match(/<meta property="og:url" content="([^"]+)"/)[1];
  assert.equal(canonical, 'https://www.snapcoffee.xyz/');
  assert.equal(ogUrl, canonical);
});
