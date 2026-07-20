import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the complete Retina AI Ecosystem experience", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Retina AI Ecosystem/);
  assert.match(html, /One operating layer for an entire/);
  assert.match(html, /Try the ecosystem navigator/i);
  assert.match(html, /Build a responsible Web3 initiative/);
  assert.match(html, /Retina Apresenta/);
  assert.match(html, /IAEquipePro/);
  assert.match(html, /More products, without changing the judged scope/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/);
});

test("keeps expansion evidence and validation boundaries explicit", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /https:\/\/apresentacoes\.marketingdigitalretina\.com\.br/);
  assert.match(html, /https:\/\/iaequipepro\.com\.br/);
  assert.match(html, /not as extra Build Week functionality/i);
  assert.match(html, /not as part of the 65-scenario validation claim/i);
  assert.match(html, /13 Retina primary specialists/);
});
