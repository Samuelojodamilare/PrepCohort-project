import { StrictMode } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";

/**
 * @param {string} url
 * @param {string} [ssrManifest]
 * @param {import('react-dom/server').RenderToPipeableStreamOptions} [options]
 */
export function render(url, ssrManifest, options) {
  console.log(`SSR Render Function Called with URL:`, url);
  const context = {};
  return renderToPipeableStream(
    <StrictMode>
      <StaticRouter location={url} context={context}>
        <App />
      </StaticRouter>
    </StrictMode>,
    options
  );
}
