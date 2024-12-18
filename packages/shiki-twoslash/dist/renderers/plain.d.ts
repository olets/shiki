import { Meta } from "../utils";
export interface HtmlRendererOptions {
    langId?: string;
    fg?: string;
    bg?: string;
    themeName?: string;
}
/** A func for setting a consistent <pre> */
export declare const preOpenerFromRenderingOptsWithExtras: (opts: HtmlRendererOptions, meta: Meta, classes?: string[] | undefined) => string;
/** You don't have a language which shiki twoslash can handle, make a DOM compatible version  */
export declare function plainTextRenderer(code: string, options: HtmlRendererOptions, meta: Meta): string;
