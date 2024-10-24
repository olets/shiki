declare type Lines = import("@olets/shiki").IThemedToken[][];
import { Meta } from "../utils";
import { HtmlRendererOptions } from "./plain";
/**
 * Renders a TSConfig JSON object with additional LSP-ish information
 * @param lines the result of shiki highlighting
 * @param options shiki display options
 */
export declare function tsconfigJSONRenderer(lines: Lines, options: HtmlRendererOptions, meta: Meta): string;
export {};
