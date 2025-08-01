import { f as decodeKey } from './chunks/astro/server_BXtRMMiW.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DdIr0JbQ.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/","cacheDir":"file:///home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/node_modules/.astro/","outDir":"file:///home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/dist/","srcDir":"file:///home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/src/","publicDir":"file:///home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/public/","buildClientDir":"file:///home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/dist/client/","buildServerDir":"file:///home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"env.d","links":[],"scripts":[],"styles":[],"routeData":{"route":"/env.d","isIndex":false,"type":"endpoint","pattern":"^\\/env\\.d\\/?$","segments":[[{"content":"env.d","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/env.d.ts","pathname":"/env.d","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.12.3_@types+node@24.1.0_jiti@2.5.0_lightningcss@1.30.1_rollup@4.45.1_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/.pnpm/@sanity+astro@3.2.10_@emotion+is-prop-valid@1.2.2_@sanity+client@7.8.1_@sanity+types@4._213e91954a591fc8384f1df9d318b120/node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/node_modules/.pnpm/@sanity+astro@3.2.10_@emotion+is-prop-valid@1.2.2_@sanity+client@7.8.1_@sanity+types@4._213e91954a591fc8384f1df9d318b120/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/env.d@_@ts":"pages/env.d.astro.mjs","\u0000@astro-page:node_modules/.pnpm/@sanity+astro@3.2.10_@emotion+is-prop-valid@1.2.2_@sanity+client@7.8.1_@sanity+types@4._213e91954a591fc8384f1df9d318b120/node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.12.3_@types+node@24.1.0_jiti@2.5.0_lightningcss@1.30.1_rollup@4.45.1_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/node_modules/.pnpm/astro@5.12.3_@types+node@24.1.0_jiti@2.5.0_lightningcss@1.30.1_rollup@4.45.1_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DGu24Pu1.mjs","\u0000@astrojs-manifest":"manifest_B7QThsTd.mjs","/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/src/sections/BusinessDetailsSection.astro?astro&type=script&index=0&lang.ts":"_astro/BusinessDetailsSection.astro_astro_type_script_index_0_lang.l0sNRNKZ.js","/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/src/sections/BusinessDetailsSection.astro?astro&type=script&index=2&lang.ts":"_astro/BusinessDetailsSection.astro_astro_type_script_index_2_lang.BdpDw26L.js","/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/src/sections/BusinessDetailsSection.astro?astro&type=script&index=1&lang.ts":"_astro/BusinessDetailsSection.astro_astro_type_script_index_1_lang.BGxEnXce.js","/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/node_modules/.pnpm/sanity@4.1.1_@emotion+is-prop-valid@1.2.2_@types+node@24.1.0_@types+react-dom@19.1.6_@t_8e7bc8c1d7d5c335bb453781c5b29bc4/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.DFSz-Q0J.js","/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/node_modules/.pnpm/sanity@4.1.1_@emotion+is-prop-valid@1.2.2_@types+node@24.1.0_@types+react-dom@19.1.6_@t_8e7bc8c1d7d5c335bb453781c5b29bc4/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.Dad_uNhp.js","/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/node_modules/.pnpm/sanity@4.1.1_@emotion+is-prop-valid@1.2.2_@types+node@24.1.0_@types+react-dom@19.1.6_@t_8e7bc8c1d7d5c335bb453781c5b29bc4/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.BNUIdU-8.js","/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/node_modules/.pnpm/sanity@4.1.1_@emotion+is-prop-valid@1.2.2_@types+node@24.1.0_@types+react-dom@19.1.6_@t_8e7bc8c1d7d5c335bb453781c5b29bc4/node_modules/sanity/lib/_chunks-es/resources5.mjs":"_astro/resources5.B1Jt3LLx.js","/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/node_modules/.pnpm/sanity@4.1.1_@emotion+is-prop-valid@1.2.2_@types+node@24.1.0_@types+react-dom@19.1.6_@t_8e7bc8c1d7d5c335bb453781c5b29bc4/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.D-QICVeM.js","/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/node_modules/.pnpm/sanity@4.1.1_@emotion+is-prop-valid@1.2.2_@types+node@24.1.0_@types+react-dom@19.1.6_@t_8e7bc8c1d7d5c335bb453781c5b29bc4/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.CXA1LCkD.js","/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/node_modules/.pnpm/@sanity+client@7.8.1_debug@4.4.1/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.BKNEmiJy.js","/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/node_modules/.pnpm/@sanity+ui@2.16.7_@emotion+is-prop-valid@1.2.2_react-dom@19.1.0_react@19.1.0__react-is@_e47f40a07cb5aeec37c20f86b2297843/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.Bg0ygHKf.js","/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/node_modules/.pnpm/sanity@4.1.1_@emotion+is-prop-valid@1.2.2_@types+node@24.1.0_@types+react-dom@19.1.6_@t_8e7bc8c1d7d5c335bb453781c5b29bc4/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.urJ9NfbJ.js","/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/node_modules/.pnpm/sanity@4.1.1_@emotion+is-prop-valid@1.2.2_@types+node@24.1.0_@types+react-dom@19.1.6_@t_8e7bc8c1d7d5c335bb453781c5b29bc4/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.D6_MU931.js","/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/node_modules/.pnpm/sanity@4.1.1_@emotion+is-prop-valid@1.2.2_@types+node@24.1.0_@types+react-dom@19.1.6_@t_8e7bc8c1d7d5c335bb453781c5b29bc4/node_modules/sanity/lib/_chunks-es/resources6.mjs":"_astro/resources6.DYHmlimi.js","@astrojs/react/client.js":"_astro/client.CRRRKbSf.js","/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/node_modules/.pnpm/sanity@4.1.1_@emotion+is-prop-valid@1.2.2_@types+node@24.1.0_@types+react-dom@19.1.6_@t_8e7bc8c1d7d5c335bb453781c5b29bc4/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.BhAIDo3r.js","/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/node_modules/.pnpm/sanity@4.1.1_@emotion+is-prop-valid@1.2.2_@types+node@24.1.0_@types+react-dom@19.1.6_@t_8e7bc8c1d7d5c335bb453781c5b29bc4/node_modules/sanity/lib/_chunks-es/VideoPlayer.mjs":"_astro/VideoPlayer.CSOi3tjN.js","/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/node_modules/.pnpm/@sanity+astro@3.2.10_@emotion+is-prop-valid@1.2.2_@sanity+client@7.8.1_@sanity+types@4._213e91954a591fc8384f1df9d318b120/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.DfZUwDsJ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/src/sections/BusinessDetailsSection.astro?astro&type=script&index=0&lang.ts",""],["/home/zephyr/Data/Projects/TLD/astro-templates/sanity-astro-template/src/sections/BusinessDetailsSection.astro?astro&type=script&index=1&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const t=document.getElementById(\"map\");if(!t)return;const e=parseFloat(t.dataset.latitude||\"32.7157\"),a=parseFloat(t.dataset.longitude||\"-117.1611\"),n=t.dataset.locationName||\"San Diego, CA\",o=L.map(\"map\").setView([e,a],13);L.tileLayer(\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\",{attribution:\"© OpenStreetMap contributors\"}).addTo(o),L.marker([e,a]).addTo(o).bindPopup(`<b>${n}</b><br>Our Location`).openPopup(),t.style.borderRadius=\"1rem\"});"]],"assets":["/_astro/plumber.MPfXUNJc.jpg","/_astro/index.hw-HySw7.css","/favicon.svg","/plumber.jpg","/plumber.webp","/_astro/BusinessDetailsSection.astro_astro_type_script_index_2_lang.BdpDw26L.js","/_astro/VideoPlayer.CSOi3tjN.js","/_astro/ViteDevServerStopped.CXA1LCkD.js","/_astro/browser.f1mSSilk.js","/_astro/client.CRRRKbSf.js","/_astro/client.DaBxgO95.js","/_astro/index.urJ9NfbJ.js","/_astro/index2.D6_MU931.js","/_astro/index3.BhAIDo3r.js","/_astro/refractor.Bg0ygHKf.js","/_astro/resources.BNUIdU-8.js","/_astro/resources2.DFSz-Q0J.js","/_astro/resources3.D-QICVeM.js","/_astro/resources4.Dad_uNhp.js","/_astro/resources5.B1Jt3LLx.js","/_astro/resources6.DYHmlimi.js","/_astro/stegaEncodeSourceMap.BKNEmiJy.js","/_astro/studio-component.DfZUwDsJ.js","/_astro/studio-component.Hq-S65aS.js","/env.d","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"ilYwxitT4ZgrLpzIqu1BdiMcXH7ZBLG6ze2b359oBew="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
