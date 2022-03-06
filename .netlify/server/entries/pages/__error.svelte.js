var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _error
});
var import_index_152afe8f = require("../../chunks/index-152afe8f.js");
const _error = (0, import_index_152afe8f.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"min-h-full pt-16 pb-12 flex flex-col"}"><main class="${"flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"}"><div class="${"py-16"}"><div class="${"text-center"}"><p class="${"text-sm font-semibold text-blue-600 dark:text-lime-400 uppercase tracking-wide"}">404 error
        </p>
        <h1 class="${"mt-2 text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight sm:text-5xl"}">Page not found.
        </h1>
        <p class="${"mt-6 text-base text-slate-400"}">Sorry, the page you\u2019re looking for could not be found.
        </p></div></div></main></div>`;
});
module.exports = __toCommonJS(stdin_exports);
