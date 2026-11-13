import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";
import { pathToFileURL } from "node:url";

const defaultOut = resolve(new URL("../../out/", import.meta.url).pathname);
const mime = { ".avif": "image/avif", ".css": "text/css; charset=utf-8", ".html": "text/html; charset=utf-8", ".ico": "image/x-icon", ".js": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8", ".pdf": "application/pdf", ".png": "image/png", ".svg": "image/svg+xml", ".txt": "text/plain; charset=utf-8", ".webp": "image/webp", ".woff2": "font/woff2", ".xml": "application/xml; charset=utf-8" };

export function resolveStaticRequest(rawUrl, out = defaultOut) {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(rawUrl ?? "/", "http://localhost").pathname);
  } catch {
    return { status: 400 };
  }
  const candidate = join(out, normalize(pathname).replace(/^([/\\])+/, ""));
  const file = candidate.endsWith(sep) || !extname(candidate) ? join(candidate, "index.html") : candidate;
  if (!file.startsWith(`${out}${sep}`) || !existsSync(file) || !statSync(file).isFile()) return { status: 404 };
  return { status: 200, file };
}

export function createStaticOutServer(out = defaultOut) {
  return createServer((request, response) => {
    const result = resolveStaticRequest(request.url, out);
    if (result.status !== 200) {
      response.writeHead(result.status, { "content-type": "text/plain; charset=utf-8" });
      response.end(result.status === 400 ? "Bad request" : "Not found");
      return;
    }
    response.writeHead(200, { "cache-control": "no-store", "content-type": mime[extname(result.file)] ?? "application/octet-stream" });
    createReadStream(result.file).pipe(response);
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  createStaticOutServer().listen(4173, "127.0.0.1", () => console.log("static out/ server listening on 4173"));
}
