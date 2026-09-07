import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const run = promisify(execFile);
const tsxLoader = createRequire(import.meta.url).resolve("tsx");
const generator = fileURLToPath(new URL("../../scripts/generate-image-dimensions.ts", import.meta.url));

async function createFixture(context: test.TestContext, failSecondImage: boolean) {
  const directory = await mkdtemp(join(tmpdir(), "blog-image-dimensions-"));
  context.after(() => rm(directory, { recursive: true, force: true }));
  await mkdir(join(directory, "src/content/posts"), { recursive: true });
  await mkdir(join(directory, "src/lib"), { recursive: true });
  await writeFile(join(directory, "src/content/posts/images.mdx"), '<CustomImage file="first" />\n<CustomImage file="second" />\n');
  const output = join(directory, "src/lib/image-dimensions.ts");
  const original = "// Existing dimensions must survive a failed refresh.\n";
  await writeFile(output, original);
  const fetchMock = join(directory, "fetch.mjs");
  await writeFile(
    fetchMock,
    `globalThis.fetch = async (url) => {
      if (${failSecondImage} && url.endsWith("/second.png")) {
        return new Response("Unavailable", { status: 503 });
      }
      const png = Buffer.alloc(24);
      png.write("PNG", 1);
      png.writeUInt32BE(640, 16);
      png.writeUInt32BE(480, 20);
      return new Response(png, { headers: { "content-type": "image/png" } });
    };\n`,
  );
  const execute = () =>
    run(process.execPath, ["--import", tsxLoader, "--import", fetchMock, generator], {
      cwd: directory,
      timeout: 10_000,
    });
  return { execute, output, original };
}

test("image dimension refresh preserves the existing output when one source fails", async (context) => {
  const fixture = await createFixture(context, true);
  await assert.rejects(fixture.execute(), /HTTP 503/);
  assert.equal(await readFile(fixture.output, "utf8"), fixture.original);
});

test("image dimension refresh writes the complete set after every source succeeds", async (context) => {
  const fixture = await createFixture(context, false);
  await fixture.execute();
  const output = await readFile(fixture.output, "utf8");
  assert.match(output, /"first": \{ width: 640, height: 480 \}/);
  assert.match(output, /"second": \{ width: 640, height: 480 \}/);
});
