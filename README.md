# Articles

Articles by Ethan Gueck, published at **https://ethan-gueck.github.io/articles/** and listed on the [portfolio's Articles tab](https://ethan-gueck.github.io/#articles), which opens each one in a new tab.

Pages use the portfolio's own theme (tokens, base and article styles linked from ethan-gueck.github.io) and share its light/dark choice: the moon/sun button in the top-right corner switches both.

## Layout

```
articles/
├── articles.json        the list the portfolio and index.html read (newest first)
├── index.html           all articles as cards
├── template/index.html  copy this to start an article
├── <slug>/index.html    one folder per article, with its cover image
└── assets/              articles.css, theme.js
```

## Publishing an article

1. Copy `template/` to `<slug>/` (lowercase, hyphens), add the cover image (16:9, e.g. `cover.webp`), replace the `ARTICLE_*` placeholders and write the body.
2. Add an entry to the top of `articles.json`:

   ```json
   {
     "slug": "my-article",
     "title": "Title",
     "subtitle": "One-line subtitle",
     "quote": "A short preview quote from the article.",
     "image": "my-article/cover.webp",
     "alt": "What the cover image shows",
     "date": "2026-10-07"
   }
   ```

3. Push to `main`; GitHub Pages serves it as-is. Until `articles.json` has an entry, the portfolio's Articles tab reads *Coming soon*.
