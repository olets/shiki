import { Meta } from "../utils";
import { HtmlRendererOptions } from "./plain";
declare type Lines = import("@olets/shiki").IThemedToken[][];
export declare function defaultShikiRenderer(lines: Lines, options: HtmlRendererOptions, meta: Meta): string;
export {};
