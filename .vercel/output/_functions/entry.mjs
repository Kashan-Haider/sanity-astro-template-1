import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CFQOm9Yx.mjs';
import { manifest } from './manifest_CBLikadg.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/env.d.astro.mjs');
const _page2 = () => import('./pages/studio/_---params_.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.12.3_@types+node@24.1.0_jiti@2.5.0_lightningcss@1.30.1_rollup@4.45.1_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/env.d.ts", _page1],
    ["node_modules/.pnpm/@sanity+astro@3.2.10_@emotion+is-prop-valid@1.2.2_@sanity+client@7.8.1_@sanity+types@4._213e91954a591fc8384f1df9d318b120/node_modules/@sanity/astro/dist/studio/studio-route.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b08016b5-ddbd-4232-a4da-f4dd508429ec",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
