declare type Lines = import("@olets/shiki").IThemedToken[][];
declare type TwoSlash = import("@typescript/twoslash").TwoSlashReturn;
import { TwoslashShikiOptions } from "..";
import { Meta } from "../utils";
import { HtmlRendererOptions } from "./plain";
export declare function twoslashRenderer(lines: Lines, options: HtmlRendererOptions & TwoslashShikiOptions, twoslash: TwoSlash, meta: Meta): string;
export {};
