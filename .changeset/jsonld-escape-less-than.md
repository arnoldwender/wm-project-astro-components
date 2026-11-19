---
"@wendermedia/astro-components": patch
---

JSON-LD: `<` is escaped when structured data is serialized

`JSON.stringify` does not escape `<`. A value that contained a closing script
tag (an article that quotes code is enough) ended the
`<script type="application/ld+json">` block early: the JSON was cut off, the
rich result was lost and the rest of the value was rendered as visible text.

All 16 components that print JSON-LD (`SEO`, `JsonLD`, `RichSnippets`,
`FAQSchema`, `HowToSchema`, `BreadcrumbSchema`, `ServiceSchema`,
`seo/Breadcrumbs`, `navigation/Breadcrumbs`, `Pagination`, `FAQ`,
`PricingTable`, `Testimonials`, `ProductCard`, `ImageGallery`,
`RelatedContent`) now serialize through
`serializeJsonLd` in `src/lib/jsonld.ts`, which writes `<`, U+2028 and U+2029
as unicode escapes. The decoded value is the same string, so search engines
read exactly what the author wrote.
