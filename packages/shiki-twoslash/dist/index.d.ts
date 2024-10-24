import { Highlighter, HighlighterOptions } from "@olets/shiki";
import { TwoSlashOptions, TwoSlashReturn } from "@typescript/twoslash";
import { twoslashRenderer } from "./renderers/twoslash";
import { plainTextRenderer } from "./renderers/plain";
import { defaultShikiRenderer } from "./renderers/shiki";
import { tsconfigJSONRenderer } from "./renderers/tsconfig";
import { Meta } from "./utils";
export interface TwoslashShikiOptions {
    /** A way to turn on the try buttons seen on the TS website */
    addTryButton?: true;
    /** A way to disable implicit React imports on tsx/jsx language codeblocks */
    disableImplicitReactImport?: true;
    /** A way to add a div wrapper for multi-theme outputs */
    wrapFragments?: true;
    /** Include JSDoc comments in the hovers */
    includeJSDocInHover?: true;
    /** Instead of showing twoslash exceptions inline, throw the entire process like it will on CI */
    alwayRaiseForTwoslashExceptions?: true;
    /** Ignore transforming certain code blocks */
    ignoreCodeblocksWithCodefenceMeta?: string[];
}
/** The possible user config, a combination of all shiki, twoslash and twoslash-shiki options */
export declare type UserConfigSettings = HighlighterOptions & TwoSlashOptions & TwoslashShikiOptions;
/**
 * Creates a *cached singleton* Shiki highlighter, this is an async call because of the call to WASM to get
 * the regex parser set up.
 *
 * In other functions, passing a the result of this highlighter function is kind of optional but it's the author's
 * opinion that you should be in control of the highlighter, and not this library.
 *
 */
export declare const createShikiHighlighter: (options: HighlighterOptions) => Promise<Highlighter>;
/**
 * Renders a code sample to HTML, automatically taking into account:
 *
 *  - rendering overrides for twoslash and tsconfig
 *  - whether the language exists in shiki
 *
 * @param code the source code to render
 * @param lang the language to use in highlighting
 * @param info additional metadata which lives after the code-fence lang (e.g. `{ twoslash: true }`)
 * @param shikiOptions user settings
 * @param highlighter optional, but you should use it, highlighter
 * @param twoslash optional, but required when info contains 'twoslash' as a string
 */
export declare const renderCodeToHTML: (code: string, lang: string, meta: Meta, shikiOptions?: (HighlighterOptions & TwoSlashOptions & TwoslashShikiOptions & {
    themeName: string;
}) | undefined, highlighter?: Highlighter | undefined, twoslash?: TwoSlashReturn | undefined) => string;
/**
 * Runs Twoslash over the code passed in with a particular language as the default file.
 */
export declare const runTwoSlash: (input: string, lang: string, settings?: UserConfigSettings) => TwoSlashReturn;
/** Set of renderers if you want to explicitly call one instead of using renderCodeToHTML */
export declare const renderers: {
    plainTextRenderer: typeof plainTextRenderer;
    defaultShikiRenderer: typeof defaultShikiRenderer;
    twoslashRenderer: typeof twoslashRenderer;
    tsconfigJSONRenderer: typeof tsconfigJSONRenderer;
};
