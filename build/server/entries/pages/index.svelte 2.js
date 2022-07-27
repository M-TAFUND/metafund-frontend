import { c as create_ssr_component, e as escape } from "../../chunks/index-5f038599.js";
const title = "Our vision is to be a community-driven investment fund";
const subtitle = "We are developing the Smart Contract and executing the roadmap, which will be soon available - Stay tuned!";
const github = "Github";
const github_link = "https://github.com/M-TAFUND";
var contentJson = {
  title,
  subtitle,
  github,
  github_link
};
var global = /* @__PURE__ */ (() => "/* ==========================\n	setting the default \n    website layout\n========================== */\n\nbody,\nhtml {\n	margin: 0 !important;\n	background-color: var(--white);\n	scroll-behavior: smooth !important;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n	/* margin: 0 0 0.5em 0; */\n	font-weight: 400;\n	line-height: 1.2;\n}\n\nbody {\n	color: var(--black);\n	background-color: var(--whitev2);\n	margin: 0 !important;\n	font-family: Roboto;\n	font-size: 14px;\n	line-height: 1.5;\n	/* \n    MOBILE \n    disable pinchin & user zooming on */\n	touch-action: pan-x pan-y;\n}\n\n* {\n	box-sizing: border-box;\n}\n\n/* ==========================\n    VARIABLE FONT SIZES \n    & other STYLES for text\n========================== */\n\n/* DEFAULT METAFUND CSS VALUES HEADINGS */\n\nh1 {\n  font-family: 'Sora';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 55px;\n  line-height: 64px;\n}\nh2 {\n  font-family: 'Sora';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 150%;\n}\nh3 {\n  font-family: 'Sora';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 150%;\n}\nh4 {\n  font-family: 'Sora';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 150%;\n}\nh5 {\n  font-family: 'Sora';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 150%;\n}\n\n\n/* DEFAULT METAFUND CSS VALUES TEXT */\n\ntext1 {\n    font-family: 'Sora';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 28px;\n  }")();
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ":root{background-color:#191032}.contentDivLeft.svelte-d5q70k{padding:400px;width:1350px}h1.svelte-d5q70k{color:white;text-align:left}text1.svelte-d5q70k{color:white}main.svelte-d5q70k{display:flex;flex-direction:row;justify-content:space-around}#content.svelte-d5q70k{order:1;flex-grow:1}#sad.svelte-d5q70k{order:2;flex-grow:10}")();
const css = {
  code: ":root{background-color:#191032}.contentDivLeft.svelte-d5q70k{padding:400px;width:1350px}h1.svelte-d5q70k{color:white;text-align:left}text1.svelte-d5q70k{color:white}main.svelte-d5q70k{display:flex;flex-direction:row;justify-content:space-around}#content.svelte-d5q70k{order:1;flex-grow:1}#sad.svelte-d5q70k{order:2;flex-grow:10}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let content_en = contentJson;
  $$result.css.add(css);
  return `




<main class="${"svelte-d5q70k"}"><div id="${"content"}" class="${"svelte-d5q70k"}"><div class="${"contentDivLeft svelte-d5q70k"}">
			<img src="${"assets/img//metafund_logo.svg"}" alt="${"MetaFund Logo"}" width="${"170"}" height="${"32"}">
			<h1 class="${"svelte-d5q70k"}">${escape(content_en.title)}</h1>
			<text1 class="${"svelte-d5q70k"}">${escape(content_en.subtitle)}</text1></div></div>
	<div id="${"sad"}" class="${"svelte-d5q70k"}"><p>Sad</p></div></main>

`;
});
export { Routes as default };
