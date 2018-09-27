# HtmlWhitespaceEliminatorToggle
This is an extension which toggles HTML file whitespace.

It converts
`(--)?>(\n\s*)<` --> `$2$1><`
and reverts it back by
`(\n\s*)(--)?><` --> `$2>$1<`.

The extension will default to the first conversion if the file has mixed whitespace.

The default keyboard shortcut to both convert and revert is
`Ctrl+Shift+J`.