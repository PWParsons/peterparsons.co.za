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
  default: () => Routes
});
var import_index_152afe8f = require("../../chunks/index-152afe8f.js");
var import_Icon_ffb00147 = require("../../chunks/Icon-ffb00147.js");
const MetaTags = (0, import_index_152afe8f.c)(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { noindex = false } = $$props;
  let { nofollow = false } = $$props;
  let { robotsProps = void 0 } = $$props;
  let { description = void 0 } = $$props;
  let { mobileAlternate = void 0 } = $$props;
  let { languageAlternates = void 0 } = $$props;
  let { twitter = void 0 } = $$props;
  let { facebook = void 0 } = $$props;
  let { openGraph = void 0 } = $$props;
  let { canonical = void 0 } = $$props;
  let { additionalMetaTags = void 0 } = $$props;
  let { additionalLinkTags = void 0 } = $$props;
  let robotsParams = "";
  if (robotsProps) {
    const { nosnippet, maxSnippet, maxImagePreview, maxVideoPreview, noarchive, noimageindex, notranslate, unavailableAfter } = robotsProps;
    robotsParams = `${nosnippet ? ",nosnippet" : ""}${maxSnippet ? `,max-snippet:${maxSnippet}` : ""}${maxImagePreview ? `,max-image-preview:${maxImagePreview}` : ""}${noarchive ? ",noarchive" : ""}${unavailableAfter ? `,unavailable_after:${unavailableAfter}` : ""}${noimageindex ? ",noimageindex" : ""}${maxVideoPreview ? `,max-video-preview:${maxVideoPreview}` : ""}${notranslate ? ",notranslate" : ""}`;
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.noindex === void 0 && $$bindings.noindex && noindex !== void 0)
    $$bindings.noindex(noindex);
  if ($$props.nofollow === void 0 && $$bindings.nofollow && nofollow !== void 0)
    $$bindings.nofollow(nofollow);
  if ($$props.robotsProps === void 0 && $$bindings.robotsProps && robotsProps !== void 0)
    $$bindings.robotsProps(robotsProps);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.mobileAlternate === void 0 && $$bindings.mobileAlternate && mobileAlternate !== void 0)
    $$bindings.mobileAlternate(mobileAlternate);
  if ($$props.languageAlternates === void 0 && $$bindings.languageAlternates && languageAlternates !== void 0)
    $$bindings.languageAlternates(languageAlternates);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.facebook === void 0 && $$bindings.facebook && facebook !== void 0)
    $$bindings.facebook(facebook);
  if ($$props.openGraph === void 0 && $$bindings.openGraph && openGraph !== void 0)
    $$bindings.openGraph(openGraph);
  if ($$props.canonical === void 0 && $$bindings.canonical && canonical !== void 0)
    $$bindings.canonical(canonical);
  if ($$props.additionalMetaTags === void 0 && $$bindings.additionalMetaTags && additionalMetaTags !== void 0)
    $$bindings.additionalMetaTags(additionalMetaTags);
  if ($$props.additionalLinkTags === void 0 && $$bindings.additionalLinkTags && additionalLinkTags !== void 0)
    $$bindings.additionalLinkTags(additionalLinkTags);
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_152afe8f.d)(title)}</title>`, ""}<meta name="${"robots"}"${(0, import_index_152afe8f.a)("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}${robotsParams}`, 0)} data-svelte="svelte-1g11zn"><meta name="${"googlebot"}"${(0, import_index_152afe8f.a)("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}${robotsParams}`, 0)} data-svelte="svelte-1g11zn">${description ? `<meta name="${"description"}"${(0, import_index_152afe8f.a)("content", description, 0)} data-svelte="svelte-1g11zn">` : ``}${canonical ? `<link rel="${"canonical"}"${(0, import_index_152afe8f.a)("href", canonical, 0)} data-svelte="svelte-1g11zn">` : ``}${mobileAlternate ? `<link rel="${"alternate"}"${(0, import_index_152afe8f.a)("media", mobileAlternate.media, 0)}${(0, import_index_152afe8f.a)("href", mobileAlternate.href, 0)} data-svelte="svelte-1g11zn">` : ``}${languageAlternates && languageAlternates.length > 0 ? `${(0, import_index_152afe8f.e)(languageAlternates, (languageAlternate) => {
    return `<link rel="${"alternate"}"${(0, import_index_152afe8f.a)("hreflang", languageAlternate.hrefLang, 0)}${(0, import_index_152afe8f.a)("href", languageAlternate.href, 0)} data-svelte="svelte-1g11zn">`;
  })}` : ``}${twitter ? `${twitter.cardType ? `<meta name="${"twitter:card"}"${(0, import_index_152afe8f.a)("content", twitter.cardType, 0)} data-svelte="svelte-1g11zn">` : ``}
    ${twitter.site ? `<meta name="${"twitter:site"}"${(0, import_index_152afe8f.a)("content", twitter.site, 0)} data-svelte="svelte-1g11zn">` : ``}
    ${twitter.handle ? `<meta name="${"twitter:creator"}"${(0, import_index_152afe8f.a)("content", twitter.handle, 0)} data-svelte="svelte-1g11zn">` : ``}
    ${twitter.title ? `<meta name="${"twitter:title"}"${(0, import_index_152afe8f.a)("content", twitter.title, 0)} data-svelte="svelte-1g11zn">` : ``}
    ${twitter.description ? `<meta name="${"twitter:description"}"${(0, import_index_152afe8f.a)("content", twitter.description, 0)} data-svelte="svelte-1g11zn">` : ``}
    ${twitter.image ? `<meta name="${"twitter:image"}"${(0, import_index_152afe8f.a)("content", twitter.image, 0)} data-svelte="svelte-1g11zn">` : ``}
    ${twitter.imageAlt ? `<meta name="${"twitter:image:alt"}"${(0, import_index_152afe8f.a)("content", twitter.imageAlt, 0)} data-svelte="svelte-1g11zn">` : ``}` : ``}${facebook ? `<meta property="${"fb:app_id"}"${(0, import_index_152afe8f.a)("content", facebook.appId, 0)} data-svelte="svelte-1g11zn">` : ``}${openGraph ? `${openGraph.url || canonical ? `<meta property="${"og:url"}"${(0, import_index_152afe8f.a)("content", openGraph.url || canonical, 0)} data-svelte="svelte-1g11zn">` : ``}

    ${openGraph.type ? `<meta property="${"og:type"}"${(0, import_index_152afe8f.a)("content", openGraph.type.toLowerCase(), 0)} data-svelte="svelte-1g11zn">
      ${openGraph.type.toLowerCase() === "profile" && openGraph.profile ? `${openGraph.profile.firstName ? `<meta property="${"profile:first_name"}"${(0, import_index_152afe8f.a)("content", openGraph.profile.firstName, 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.profile.lastName ? `<meta property="${"profile:last_name"}"${(0, import_index_152afe8f.a)("content", openGraph.profile.lastName, 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.profile.username ? `<meta property="${"profile:username"}"${(0, import_index_152afe8f.a)("content", openGraph.profile.username, 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.profile.gender ? `<meta property="${"profile:gender"}"${(0, import_index_152afe8f.a)("content", openGraph.profile.gender, 0)} data-svelte="svelte-1g11zn">` : ``}` : `${openGraph.type.toLowerCase() === "book" && openGraph.book ? `${openGraph.book.authors && openGraph.book.authors.length ? `${(0, import_index_152afe8f.e)(openGraph.book.authors, (author) => {
    return `<meta property="${"book:author"}"${(0, import_index_152afe8f.a)("content", author, 0)} data-svelte="svelte-1g11zn">`;
  })}` : ``}

        ${openGraph.book.isbn ? `<meta property="${"book:isbn"}"${(0, import_index_152afe8f.a)("content", openGraph.book.isbn, 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.book.releaseDate ? `<meta property="${"book:release_date"}"${(0, import_index_152afe8f.a)("content", openGraph.book.releaseDate, 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.book.tags && openGraph.book.tags.length ? `${(0, import_index_152afe8f.e)(openGraph.book.tags, (tag) => {
    return `<meta property="${"book:tag"}"${(0, import_index_152afe8f.a)("content", tag, 0)} data-svelte="svelte-1g11zn">`;
  })}` : ``}` : `${openGraph.type.toLowerCase() === "article" && openGraph.article ? `${openGraph.article.publishedTime ? `<meta property="${"article:published_time"}"${(0, import_index_152afe8f.a)("content", openGraph.article.publishedTime, 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.article.modifiedTime ? `<meta property="${"article:modified_time"}"${(0, import_index_152afe8f.a)("content", openGraph.article.modifiedTime, 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.article.expirationTime ? `<meta property="${"article:expiration_time"}"${(0, import_index_152afe8f.a)("content", openGraph.article.expirationTime, 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.article.authors && openGraph.article.authors.length ? `${(0, import_index_152afe8f.e)(openGraph.article.authors, (author) => {
    return `<meta property="${"article:author"}"${(0, import_index_152afe8f.a)("content", author, 0)} data-svelte="svelte-1g11zn">`;
  })}` : ``}

        ${openGraph.article.section ? `<meta property="${"article:section"}"${(0, import_index_152afe8f.a)("content", openGraph.article.section, 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.article.tags && openGraph.article.tags.length ? `${(0, import_index_152afe8f.e)(openGraph.article.tags, (tag) => {
    return `<meta property="${"article:tag"}"${(0, import_index_152afe8f.a)("content", tag, 0)} data-svelte="svelte-1g11zn">`;
  })}` : ``}` : `${openGraph.type.toLowerCase() === "video.movie" || openGraph.type.toLowerCase() === "video.episode" || openGraph.type.toLowerCase() === "video.tv_show" || openGraph.type.toLowerCase() === "video.other" && openGraph.video ? `${openGraph.video.actors && openGraph.video.actors.length ? `${(0, import_index_152afe8f.e)(openGraph.video.actors, (actor) => {
    return `${actor.profile ? `<meta property="${"video:actor"}"${(0, import_index_152afe8f.a)("content", actor.profile, 0)} data-svelte="svelte-1g11zn">` : ``}
            ${actor.role ? `<meta property="${"video:actor:role"}"${(0, import_index_152afe8f.a)("content", actor.role, 0)} data-svelte="svelte-1g11zn">` : ``}`;
  })}` : ``}

        ${openGraph.video.directors && openGraph.video.directors.length ? `${(0, import_index_152afe8f.e)(openGraph.video.directors, (director) => {
    return `<meta property="${"video:director"}"${(0, import_index_152afe8f.a)("content", director, 0)} data-svelte="svelte-1g11zn">`;
  })}` : ``}

        ${openGraph.video.writers && openGraph.video.writers.length ? `${(0, import_index_152afe8f.e)(openGraph.video.writers, (writer) => {
    return `<meta property="${"video:writer"}"${(0, import_index_152afe8f.a)("content", writer, 0)} data-svelte="svelte-1g11zn">`;
  })}` : ``}

        ${openGraph.video.duration ? `<meta property="${"video:duration"}"${(0, import_index_152afe8f.a)("content", openGraph.video.duration.toString(), 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.video.releaseDate ? `<meta property="${"video:release_date"}"${(0, import_index_152afe8f.a)("content", openGraph.video.releaseDate, 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.video.tags && openGraph.video.tags.length ? `${(0, import_index_152afe8f.e)(openGraph.video.tags, (tag) => {
    return `<meta property="${"video:tag"}"${(0, import_index_152afe8f.a)("content", tag, 0)} data-svelte="svelte-1g11zn">`;
  })}` : ``}

        ${openGraph.video.series ? `<meta property="${"video:series"}"${(0, import_index_152afe8f.a)("content", openGraph.video.series, 0)} data-svelte="svelte-1g11zn">` : ``}` : ``}`}`}`}` : ``}

    ${openGraph.title || title ? `<meta property="${"og:title"}"${(0, import_index_152afe8f.a)("content", openGraph.title || title, 0)} data-svelte="svelte-1g11zn">` : ``}

    ${openGraph.description || description ? `<meta property="${"og:description"}"${(0, import_index_152afe8f.a)("content", openGraph.description || description, 0)} data-svelte="svelte-1g11zn">` : ``}

    ${openGraph.images && openGraph.images.length ? `${(0, import_index_152afe8f.e)(openGraph.images, (image) => {
    return `<meta property="${"og:image"}"${(0, import_index_152afe8f.a)("content", image.url, 0)} data-svelte="svelte-1g11zn">
        ${image.alt ? `<meta property="${"og:image:alt"}"${(0, import_index_152afe8f.a)("content", image.alt, 0)} data-svelte="svelte-1g11zn">` : ``}
        ${image.width ? `<meta property="${"og:image:width"}"${(0, import_index_152afe8f.a)("content", image.width.toString(), 0)} data-svelte="svelte-1g11zn">` : ``}
        ${image.height ? `<meta property="${"og:image:height"}"${(0, import_index_152afe8f.a)("content", image.height.toString(), 0)} data-svelte="svelte-1g11zn">` : ``}`;
  })}` : ``}

    ${openGraph.videos && openGraph.videos.length ? `${(0, import_index_152afe8f.e)(openGraph.videos, (video) => {
    return `<meta property="${"og:video"}"${(0, import_index_152afe8f.a)("content", video.url, 0)} data-svelte="svelte-1g11zn">
        ${video.alt ? `<meta property="${"og:video:alt"}"${(0, import_index_152afe8f.a)("content", video.alt, 0)} data-svelte="svelte-1g11zn">` : ``}
        ${video.width ? `<meta property="${"og:video:width"}"${(0, import_index_152afe8f.a)("content", video.width.toString(), 0)} data-svelte="svelte-1g11zn">` : ``}
        ${video.height ? `<meta property="${"og:video:height"}"${(0, import_index_152afe8f.a)("content", video.height.toString(), 0)} data-svelte="svelte-1g11zn">` : ``}
        ${video.secureUrl ? `<meta property="${"og:video:secure_url"}"${(0, import_index_152afe8f.a)("content", video.secureUrl.toString(), 0)} data-svelte="svelte-1g11zn">` : ``}
        ${video.type ? `<meta property="${"og:video:type"}"${(0, import_index_152afe8f.a)("content", video.type.toString(), 0)} data-svelte="svelte-1g11zn">` : ``}`;
  })}` : ``}

    ${openGraph.locale ? `<meta property="${"og:locale"}"${(0, import_index_152afe8f.a)("content", openGraph.locale, 0)} data-svelte="svelte-1g11zn">` : ``}

    ${openGraph.site_name ? `<meta property="${"og:site_name"}"${(0, import_index_152afe8f.a)("content", openGraph.site_name, 0)} data-svelte="svelte-1g11zn">` : ``}` : ``}${additionalMetaTags && additionalMetaTags.length > 0 ? `${(0, import_index_152afe8f.e)(additionalMetaTags, (tag) => {
    return `<meta${(0, import_index_152afe8f.f)([(0, import_index_152afe8f.h)(tag)], {})} data-svelte="svelte-1g11zn">`;
  })}` : ``}${(additionalLinkTags == null ? void 0 : additionalLinkTags.length) ? `${(0, import_index_152afe8f.e)(additionalLinkTags, (tag) => {
    return `<link${(0, import_index_152afe8f.f)([(0, import_index_152afe8f.h)(tag)], {})} data-svelte="svelte-1g11zn">`;
  })}` : ``}`, ""}`;
});
const ScrollToTop = (0, import_index_152afe8f.c)(($$result, $$props, $$bindings, slots) => {
  let { show = false } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  return `${show ? `<div class="${"z-10 fixed right-0 rounded-full bottom-0 mr-5 mb-5 sm:mr-6 sm:mb-6 shadow-2xl"}"><button type="${"button"}" class="${"flex items-center justify-center bg-blue-600 dark:bg-lime-400 rounded-md transform transition duration-300 hover:scale-105 p-2"}"><span class="${"sr-only"}">Scroll to top</span>
      <span class="${"text-slate-100 dark:text-mirage"}">${(0, import_index_152afe8f.v)(import_Icon_ffb00147.I, "Icon").$$render($$result, { name: "chevron-up" }, {}, {})}</span></button></div>` : ``}`;
});
const Routes = (0, import_index_152afe8f.c)(($$result, $$props, $$bindings, slots) => {
  let showScrollToTopButton = false;
  return `${(0, import_index_152afe8f.v)(MetaTags, "MetaTags").$$render($$result, {
    title: "Peter Parsons",
    description: "Software designer and developer living in Cape Winelands South Africa."
  }, {}, {})}

<main class="${"flex-1 relative z-0 h-screen overflow-y-auto focus:outline-none xl:order-last px-6 lg:px-8 py-12"}"><div class="${"text-lg max-w-prose mx-auto"}"><h1><span class="${"block text-base text-center text-blue-600 dark:text-lime-400 font-semibold tracking-wide uppercase"}">Introducing</span>
      <span class="${"mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"}">Rocket Launch Your Career</span></h1></div>
  <div class="${"mt-6 prose prose-blue dark:prose-dark prose-lg text-slate-500 dark:text-slate-400 prose-a:text-blue-600 dark:prose-a:text-lime-400 prose-headings:text-slate-900 dark:prose-headings:text-white prose-strong:text-slate-500 dark:prose-strong:text-slate-400 mx-auto"}"><p>Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed
      <strong>eget risus enim</strong>. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
      praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus
      commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
      <a href="${"/"}">Mattis mauris semper</a> sed amet vitae sed turpis id.
    </p>
    <ul><li>Quis elit egestas venenatis mattis dignissim.</li>
      <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
      <li>Orci in sit morbi dignissim metus diam arcu pretium.</li></ul>
    <p>Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit
      viverra aliquam porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut
      nisl, justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis. Amet, duis sed elit
      interdum dignissim.
    </p>
    <h2>From beginner to expert in 30 days</h2>
    <p>Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum
      urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas
      pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
      Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.
    </p>
    <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
      sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus
      varius sit neque erat velit.
    </p>
    <h2>Everything you need to get up and running</h2>
    <p>Purus morbi dignissim senectus mattis <a href="${"/"}">adipiscing</a>. Amet, massa quam varius orci
      dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus
      ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim.
      Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.
    </p>
    <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
      sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus
      varius sit neque erat velit.
    </p></div>

  ${(0, import_index_152afe8f.v)(ScrollToTop, "ScrollToTop").$$render($$result, { show: showScrollToTopButton }, {}, {})}</main>`;
});
module.exports = __toCommonJS(stdin_exports);
