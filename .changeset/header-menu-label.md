---
"@wendermedia/astro-components": minor
---

Header: new optional `menuLabel` prop for the menu button

The screen-reader label of the mobile menu button was hard-wired to
"Open menu". On a page with `lang="de"` a screen reader then read English
inside a German document (WCAG 3.1.2). `menuLabel` sets it; the default stays
"Open menu", so existing pages render the same.
