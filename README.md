# goit-markup-hw-07

👋 Hi, I’m @ViktorSvertoka

Нужно продуммано писать названия классов!

Нужно продуммано вкладывать теги и оборачивать!

Быть внимательным к мелочам.

---

Головний HTML-файл називається index.html

У корені проекту є папка images з зображеннями.

Всі стилі написані в одному файлі styles.css, який знаходиться в папці css.

Скрипт підключений в HTML окремим файлом modal.js.

<body>
  <!-- Вся твоя розмітка, включно з розміткою модалки -->

  <!-- Ставимо перед закриваючим тегом body -->
  <script src="./js/modal.js"></script>
</body>

---

CDN -
https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/1.1.0/modern-normalize.min.css

---

.gitignore

---

.DS_Store

# Logs

logs _.log npm-debug.log_ yarn-debug.log* yarn-error.log* lerna-debug.log\*

# Diagnostic reports (https://nodejs.org/api/report.html)

report.[0-9]_.[0-9]_.[0-9]_.[0-9]_.json

# Runtime data

pids _.pid _.seed \*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover

lib-cov

# Coverage directory used by tools like istanbul

coverage \*.lcov

# nyc test coverage

.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)

.grunt

# Bower dependency directory (https://bower.io/)

bower_components

# node-waf configuration

.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)

build/Release

# Dependency directories

node_modules/ jspm_packages/

# TypeScript v1 declaration files

typings/

# TypeScript cache

\*.tsbuildinfo

# Optional npm cache directory

.npm

# Optional eslint cache

.eslintcache

# Microbundle cache

.rpt2_cache/ .rts2_cache_cjs/ .rts2_cache_es/ .rts2_cache_umd/

# Optional REPL history

.node_repl_history

# Output of 'npm pack'

\*.tgz

# Yarn Integrity file

.yarn-integrity

# dotenv environment variables file

.env .env.test

# parcel-bundler cache (https://parceljs.org/)

.cache

# Next.js build output

.next

# Nuxt.js build / generate output

.nuxt dist

# Gatsby files

.cache/

# Comment in the public line in if your project uses Gatsby and _not_ Next.js

# https://nextjs.org/blog/next-9-1#public-directory-support

# public

# vuepress build output

.vuepress/dist

# Serverless directories

.serverless/

# FuseBox cache

.fusebox/

# DynamoDB Local files

.dynamodb/

# TernJS port file

.tern-port

---

.prettierrc.json

---

{ "printWidth": 80, "tabWidth": 2, "useTabs": false, "semi": true,
"singleQuote": true, "trailingComma": "all", "bracketSpacing": true,
"jsxBracketSameLine": false, "arrowParens": "avoid", "proseWrap": "always" }

---

Для генерації SVG-спрайту використовуй сервіс Icomoon. - https://icomoon.io/

---

Для оптимізації створеного SVG-спрайту використовуй сервіс svgomg. -
https://jakearchibald.github.io/svgomg/

---

Для оптимізації зображень використовуй сервіс squoosh. - https://squoosh.app/

---

Визуально скрыть элемент

position: absolute; width: 1px; height: 1px; margin: -1px; border: 0; padding:
0; clip: rect(0 0 0 0); overflow: hidden;

---

scss > settings.json

{ "liveSassCompile.settings.formats": [ { "format": "expanded", "extensionName":
".css", "savePath": "/css" }, { "format": "compressed", "extensionName":
".min.css", "savePath": "/css" } ], "liveSassCompile.settings.excludeList":
["**/node_modules/**", ".vscode/**"], "liveSassCompile.settings.generateMap":
true, "liveSassCompile.settings.autoprefix": ["> 1%", "last 2 versions"] }

---

sass переменние ($) sass sass
