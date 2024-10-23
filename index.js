import { setupForFile, transformAttributesToHTML } from "remark-shiki-twoslash";

/**
 * @param {*} eleventyConfig
 * @param {import("shiki-twoslash").UserConfigSettings} options
 */

// H/t https://github.com/shikijs/twoslash/issues/193#issue-2056662905
export default async function (eleventyConfig, options = {}) {
  const { highlighters } = await setupForFile(options);

  eleventyConfig.addMarkdownHighlighter((code, lang, fence) => {
    code = code.replace(/\r?\n$/, ""); // strip trailing newline fed during code block parsing
    return transformAttributesToHTML(
      code,
      [lang, fence].join(" "),
      highlighters,
      options
    );
  });
}
