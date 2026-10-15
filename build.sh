#!/bin/sh
# dart_roadmap/ (artifact source, no html/head/body tags) -> docs/ (full page for GitHub Pages)
set -e
rm -rf docs && mkdir docs
cp dart_roadmap/*.js docs/
{
  printf '<!doctype html>\n<html lang="bn">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
  printf '<style>body{margin:0}img{max-width:100%%}[hidden]{display:none!important}</style>\n'
  sed 's#^<header class="bar">#</head>\n<body>\n<header class="bar">#' dart_roadmap/index.html
  printf '</body>\n</html>\n'
} > docs/index.html
