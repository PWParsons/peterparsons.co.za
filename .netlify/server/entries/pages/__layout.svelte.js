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
  default: () => _layout
});
var import_index_152afe8f = require("../../chunks/index-152afe8f.js");
var import_Icon_ffb00147 = require("../../chunks/Icon-ffb00147.js");
const Logo = (0, import_index_152afe8f.c)(($$result, $$props, $$bindings, slots) => {
  return `<a href="${"/"}"><p class="${"text-xl font-bold text-blue-600 dark:text-lime-400"}">_peterparsons()</p></a>`;
});
const getStores = () => {
  const stores = (0, import_index_152afe8f.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const NavigationItem = (0, import_index_152afe8f.c)(($$result, $$props, $$bindings, slots) => {
  let { isExternal = false } = $$props;
  let { isActive = false } = $$props;
  let { href } = $$props;
  if ($$props.isExternal === void 0 && $$bindings.isExternal && isExternal !== void 0)
    $$bindings.isExternal(isExternal);
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${(0, import_index_152afe8f.a)("href", href, 0)}${(0, import_index_152afe8f.a)("target", isExternal ? "_blank" : void 0, 0)}${(0, import_index_152afe8f.a)("rel", isExternal ? "noopener noreferrer" : void 0, 0)}${(0, import_index_152afe8f.a)("class", isActive ? "text-blue-600 dark:text-lime-400 bg-slate-100 dark:bg-madison/50 group flex items-center px-2 py-2 text-sm font-medium rounded-md" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-madison/50 hover:text-slate-900 dark:hover:text-slate-300 group flex items-center px-2 py-2 text-sm font-medium rounded-md", 0)}>${slots.default ? slots.default({}) : ``}

  ${isExternal ? `<span class="${"text-slate-500 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-lime-400 mr-1 ml-auto flex-shrink-0 h-3 w-3"}">${(0, import_index_152afe8f.v)(import_Icon_ffb00147.I, "Icon").$$render($$result, { name: "external-link" }, {}, {})}</span>` : ``}</a>`;
});
const Navigation = (0, import_index_152afe8f.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_152afe8f.b)(page, (value) => $page = value);
  const links = [
    {
      href: "/",
      label: "Home",
      icon: "home",
      isActive: $page.url.pathname === "/",
      isExternal: false
    },
    "Writings",
    {
      href: "/writings",
      label: "HTML",
      icon: "home",
      isActive: $page.url.pathname === "/writings",
      isExternal: false
    },
    {
      href: "/",
      label: "CSS",
      icon: "home",
      isActive: false,
      isExternal: false
    },
    {
      href: "/",
      label: "Javascript",
      icon: "home",
      isActive: false,
      isExternal: false
    },
    {
      href: "/",
      label: "PHP",
      icon: "home",
      isActive: false,
      isExternal: false
    },
    {
      href: "/",
      label: "Server Stuff",
      icon: "home",
      isActive: false,
      isExternal: false
    },
    "Projects",
    {
      href: "/",
      label: "Tusk",
      icon: "home",
      isActive: false,
      isExternal: false
    },
    "Online",
    {
      href: "https://twitter.com/",
      label: "Twitter",
      icon: "home",
      isActive: false,
      isExternal: true
    },
    {
      href: "https://github.com/",
      label: "Github",
      icon: "home",
      isActive: false,
      isExternal: true
    }
  ];
  $$unsubscribe_page();
  return `<nav class="${"mt-5 flex-1 px-2 space-y-8 bg-white dark:bg-black-pearl"}" aria-label="${"Sidebar"}"><div class="${"space-y-2"}">${(0, import_index_152afe8f.e)(links, (link, i) => {
    return `${typeof link === "string" ? `<h3 class="${"pt-6 pb-2 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider"}" id="${(0, import_index_152afe8f.d)(link) + "-headline"}">${(0, import_index_152afe8f.d)(link)}
        </h3>` : `${(0, import_index_152afe8f.v)(NavigationItem, "NavigationItem").$$render($$result, {
      isExternal: link.isExternal,
      href: link.href,
      isActive: link.isActive
    }, {}, {
      default: () => {
        return `<span class="${"text-slate-400 dark:text-slate-500 mr-3 flex-shrink-0 h-5 w-5"}">${(0, import_index_152afe8f.v)(import_Icon_ffb00147.I, "Icon").$$render($$result, { name: link.icon }, {}, {})}</span>
          ${(0, import_index_152afe8f.d)(link.label)}
        `;
      }
    })}`}`;
  })}</div></nav>`;
});
var app = "";
const _layout = (0, import_index_152afe8f.c)(($$result, $$props, $$bindings, slots) => {
  return `

<div>${``}

  <div class="${"hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0"}">
    <div class="${"flex flex-col flex-grow border-r border-slate-200 dark:border-mirage bg-white dark:bg-black-pearl overflow-y-auto"}"><div class="${"sticky top-0 z-10 flex items-center flex-shrink-0 p-4 bg-white dark:bg-black-pearl opacity-90"}">${(0, import_index_152afe8f.v)(Logo, "Logo").$$render($$result, {}, {}, {})}</div>
      <div class="${"mt-5 flex-grow flex flex-col"}">${(0, import_index_152afe8f.v)(Navigation, "Navigation").$$render($$result, {}, {}, {})}</div></div></div>
  
  <div class="${"lg:pl-64 flex flex-col flex-1"}">
    <div class="${"sticky top-0 z-10 flex-shrink-0 flex h-14 bg-white dark:bg-black-pearl border-b border-slate-200 dark:border-mirage"}"><button type="${"button"}" class="${"px-4 text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 lg:hidden"}"><span class="${"sr-only"}">Open sidebar</span>
        <svg class="${"h-5 w-5"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg></button>

      <div class="${"flex-1 px-4 flex justify-end"}"><div class="${"flex"}"><button type="${"button"}" class="${"p-1 rounded-full text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-400 focus:outline-none focus:ring-0"}"><span class="${"sr-only"}">Search</span>
            ${(0, import_index_152afe8f.v)(import_Icon_ffb00147.I, "Icon").$$render($$result, { name: "search" }, {}, {})}</button></div>
        <div class="${"ml-4 flex items-center"}">${`<button type="${"button"}" class="${"p-1 rounded-full text-slate-400 dark:text-lime-400 hover:text-slate-500 dark:hover:text-lime-300 focus:outline-none focus:ring-0"}"><span class="${"sr-only"}">Enable light mode</span>
              ${(0, import_index_152afe8f.v)(import_Icon_ffb00147.I, "Icon").$$render($$result, { name: "sun" }, {}, {})}</button>`}</div></div></div>
    

    
    <div class="${"flex overflow-hidden"}">${slots.default ? slots.default({}) : ``}</div>
    </div></div>`;
});
module.exports = __toCommonJS(stdin_exports);
