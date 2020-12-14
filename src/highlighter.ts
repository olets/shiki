import type {
  Highlighter,
  HighlighterOptions,
  ILanguageRegistration,
  IShikiTheme,
  IThemeRegistration,
  StringLiteralUnion
} from './types'
import { Resolver } from './resolver'
import { tokenizeWithTheme } from './themedTokenizer'
import { renderToHtml } from './renderer'

import { getOnigasm } from './loader'
import { Lang, languages as BUNDLED_LANGUAGES } from './languages'
import { Registry } from './registry'
import { Theme } from './themes'

function resolveLang(lang: ILanguageRegistration | Lang) {
  return typeof lang === 'string'
    ? BUNDLED_LANGUAGES.find(l => l.id === lang || l.aliases?.includes(lang))
    : lang
}

function resolveOptions(options: HighlighterOptions) {
  let languages: ILanguageRegistration[] = BUNDLED_LANGUAGES
  let themes: IThemeRegistration[] = options.themes || []

  if (options.langs?.length) {
    languages = options.langs.map(resolveLang)
  }
  if (options.theme) {
    themes.unshift(options.theme)
  }
  if (!themes.length) {
    themes = ['nord']
  }

  return { languages, themes }
}

export async function getHighlighter(options: HighlighterOptions): Promise<Highlighter> {
  const { languages: _languages, themes: _themes } = resolveOptions(options)
  const _resolver = new Resolver(getOnigasm(), 'onigasm')
  const _registry = new Registry(_resolver)

  const themes = await _registry.loadThemes(_themes)
  const _defaultTheme = themes[0]
  await _registry.loadLanguages(_languages)

  function getTheme(theme: IThemeRegistration) {
    const _theme = theme ? _registry.getTheme(theme) : _defaultTheme
    if (!_theme) {
      throw Error(`No theme registration for ${theme}`)
    }
    _registry.setTheme(_theme)
    const _colorMap = _registry.getColorMap()
    return { _theme, _colorMap }
  }

  function getGrammer(lang: string) {
    const _grammer = _registry.getGrammer(lang)
    if (!_grammer) {
      throw Error(`No language registration for ${lang}`)
    }

    return { _grammer }
  }

  function codeToThemedTokens(
    code: string,
    lang = 'text',
    theme?: StringLiteralUnion<Theme>,
    options = { includeExplanation: true }
  ) {
    if (isPlaintext(lang)) {
      return [[{ content: code }]]
    }
    const { _grammer } = getGrammer(lang)
    const { _theme, _colorMap } = getTheme(theme)
    return tokenizeWithTheme(_theme, _colorMap, code, _grammer, options)
  }

  function codeToHtml(code: string, lang = 'text', theme?: StringLiteralUnion<Theme>) {
    const tokens = codeToThemedTokens(code, lang, theme, {
      includeExplanation: false
    })
    const { _theme } = getTheme(theme)
    return renderToHtml(tokens, {
      bg: _theme.bg
    })
  }

  async function loadTheme(theme: IShikiTheme | Theme) {
    await _registry.loadTheme(theme)
  }

  async function loadLanguage(lang: ILanguageRegistration | Lang) {
    const _lang = resolveLang(lang)
    await _registry.loadLanguage(_lang)
  }

  return {
    codeToThemedTokens,
    codeToHtml,
    loadTheme,
    loadLanguage
  }
}

function isPlaintext(lang: string | null | undefined) {
  return !lang || ['plaintext', 'txt', 'text'].includes(lang)
}
