# Backport Candidates — @wendermedia/astro-components

**Date:** 2026-07-01
**Method:** Consolidated one finder-pass across the WM Astro fleet. For each repo a finder listed *novel* components (present in the repo, absent-or-weaker in the library), deep-read a subset, and scored each on a fixed line format `NAME :: CATEGORY :: VERDICT :: MAPSTO :: REUSE(1-5) :: TOK(y/n) :: A11Y(y/n) :: RATIONALE`. This document dedupes those candidates by NAME (a component surfacing in several repos is merged — strongest verdict + best rationale kept, source repos summed), attaches a workspace-wide **reuseFreq** from `rebuild-briefs/_backport-freq.txt` (COUNT = how many of ~157 WM repos already ship that component name), and ranks by *quality × reach*: `REUSE` high AND `reuseFreq` high AND `TOK=y` AND `A11Y=y`.

> **reuseFreq caveat:** the count is a name match across the fleet. It's the strongest available *reach* signal, but a proven-count of 38 can mean "38 template clones carry the same scaffold" rather than "38 independent implementations." Treat high freq as *worth extracting once, centrally* — not as a quality guarantee. Quality still comes from the finder's deep-read `REUSE`/`TOK`/`A11Y` scores.

---

## ⚠️ Coverage caveat (read before trusting completeness)

Only **19 repos** were deep-scanned in this pass. Their finder candidates are the *only* rows below that were actually deep-read:

1. wm-brand-seo-halle (28 deep-read / 59 novel)
2. wm-brand-wendermedia-com (45 / 204)
3. wm-webdesign-coaching-berater-website-2025 (11 / 43)
4. wm-brand-webagentur-halle (18 / 34)
5. wm-kunde-hundeschule-saalfeld (7 / 31)
6. wm-project-hairprofis (19 / 51)
7. wm-kunde-lutz-harder (12 / 32)
8. wm-kunde-hotel-landsberg (12 / 25)
9. wm-kunde-holz-baran (16 / 24)
10. wm-kunde-prototyp-lony-kuchen (12 / 25)
11. wm-project-kaiserskorpion (12 / 20)
12. wm-kunde-kmgit (14 / 19)
13. wm-kunde-voelkerschulz (18 / 23)
14. wm-project-neuralskills (16 / 28)
15. wm-kunde-prototyp-mkb-betreuung (14 / 16 — 0 novel candidates)
16. wm-kunde-orthopaede-dessau (10 / 10)
17. wm-project-neurobewertung (0 / 10 — not deep-read)
18. wm-prototyp-halle-online (8 / 13)
19. wm-kunde-prototyp-rote-muehle-wohnbau (11 / 16)

**The other ~138 repos in the fleet were NOT deep-read** — they only contributed to the `reuseFreq` name-count in `_backport-freq.txt`. A high freq with **no finder row here** (e.g. `Logo` 44, `ArticleCard` 40, `SchemaLocalBusiness` 41, `SimpleContactForm` 38, `MainNav` 37) means the name is common across the fleet but no finder actually deep-read an implementation this pass — so it is **not ranked as a keeper** below. Absence from the tables ≠ "not worth backporting"; it means "not yet evaluated." A second pass over the ~138 singleton repos is required before calling this audit complete.

**Every freq ≥ 20 name is now adjudicated.** So this caveat is not used to silently drop a plausible primitive, the section **"High-freq names NOT yet adjudicated (freq ≥ 20, no finder deep-read)"** below explicitly routes each un-deep-read high-freq name to a provisional verdict (LIKELY-KEEPER / NEEDS-DEEP-READ / COLLAPSE / LIKELY-EXCLUDE) for pass 2. `Logo`, `ArticleCard`, `SchemaLocalBusiness`, `SimpleContactForm`, `MainNav` and the rest live there — pending, not dismissed.

---

## Cohesive systems to backport as units

Highest value: extract these as a *set* so their shared a11y wiring, tokens, and state contracts stay consistent. Never cherry-pick one member of a form/toolkit — the value is the coherent API surface.

| System | Member components (backport together) | reuseFreq (peak / members) | Why as a unit |
| --- | --- | --- | --- |
| **forms/form-system** | FormTextField (38), FormTextArea (38), FormErrorContainer (38), PrivacyCheckbox (38), FormValidation (46), InputMask (47), FormDraftRecovery (10), Select (4), Checkbox (1), Radio (1), FormCheckbox (1), FormRadioGroup (1), FormTextarea (1), FormFieldset (1), ProgressSteps (9), SignaturePad (1) | 47 peak | Shared `aria-describedby`/`role=alert`/`aria-invalid` wiring, label+hint+tooltip contract, DSGVO consent + honeypot. The single most-cloned surface in the fleet — extract the whole labeled-input + rules-engine + error-container + consent set once. Surfaced in 8 of 19 deep-read repos as a `SYSTEM` verdict. |
| **accessibility/a11y-toolkit** | AccessibleAccordion (36), AccessibleTabs (36), AccessibleAlert (36), AriaLiveRegion (9), ReadingRuler (4), LinkHighlightToggle (4), FontSizeControls (38), FontFamilyToggle (36) | 38 peak | WAI-ARIA APG keyboard patterns (arrow/Home/End, roving tabindex), SR announcer, reader-comfort toggles with `aria-pressed`+persistence. Members share the `prefers-reduced-motion` + `sr-only` announce plumbing; splitting them fragments the a11y widget bar. |
| **seo/schema-kit** | SchemaHowTo (33), SchemaBreadcrumb (33), FAQSchema (38), BreadcrumbSchema (3), WebSiteSchema (3), VideoObjectSchema (2), ServiceSchema (4) | 38 peak | Props-driven JSON-LD emitters with a shared registry-override convention + absolute-URL resolver. One kit, one `<JsonLD>` primitive underneath, consistent schema.org typing. FAQ + Breadcrumb + HowTo already at high freq — unify the naming (`SchemaX` vs `XSchema` twins exist and must be collapsed). |
| **legal/consent-map** | MapConsent (31), YoutubeConsent (1), LiteYouTubeEmbed (2), MediaEmbed (1), CookieManager (8) | 31 peak | DSGVO consent-gate pattern: no third-party request before click, real a11y unlock button, self-hosted poster. Map + YouTube + generic media embed share one facade contract; back them as a "consent-gated embed" family. |
| **navigation/nav-system** | MainNav (37), NavBar (31), Navbar (7), PrimaryNav (2), MobileNavToggle (36), MobileMenuToggle (1), BreadcrumbsBar (1), BreadcrumbNav (1), BreadcrumbBar (1), SmartBreadcrumbs (2), SkipToContent (1) | 37 peak | The nav members were previously **split across three sections** (PrimaryNav/BreadcrumbsBar in bespoke gems; MainNav/NavBar/MobileNavToggle only as high-freq unadjudicated). Consolidate: one nav system shares the active-branch detection, the mobile-toggle `aria-expanded`/focus-trap contract, the skip-link, and the breadcrumb strip below the hero. Most page-level *compositions* stay in-repo, but the **headless primitives** (toggle, skip-link, breadcrumb bar, dropdown behavior) extract as a coherent set — never cherry-pick one, or the keyboard/focus wiring fragments. Deep-read the twins in pass 2 and collapse the naming (`MainNav`=`NavBar`=`Navbar`). |

---

## Top NEW components

Ranked by quality × reach. `reuse` = finder deep-read score (1-5); `tok`/`a11y` from finder.

| Name | Category | reuseFreq | reuse | tok | a11y | Rationale | Seen in repos |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ServiceCard | ui / cards | 54 | 4 | y | y | Icon + title + desc + feature-list card, semantic `<article>`, `aria-describedby`, hover microinteractions, dark-mode tokens. Most-cloned card in the fleet — mapsTo library `FeatureCard` but ships a distinct service-list variant. | seo-halle, wendermedia-com, webagentur-halle |
| VonRestorffCTA | ux / persuasion-cta | 45 | 4 | y | y | Isolation-effect standout CTA, glow/pulse/shake/gradient variants, focus + `prefers-reduced-motion` aware, subtext + arrow. (One repo flagged heavy raw hex → tokenize on extract.) | coaching-berater, webagentur-halle, hairprofis, kaiserskorpion, lony-kuchen |
| ShareButtons | social | 39 | 4 | y | y | Twitter/LinkedIn/FB/email/WhatsApp + native Web Share, 3 variants. mapsTo `SocialShare` but richer channel set. | seo-halle |
| AuthorBio | content | 38 | 4 | y | y | Author bio, 3 variants, Person JSON-LD, social links. E-E-A-T byline primitive. | seo-halle |
| ScrollReveal | animation | 37 | 5 | y | y | IntersectionObserver reveal wrapper, 11 animations, stagger, `prefers-reduced-motion` safe. | seo-halle, wendermedia-com |
| SearchSystem | molecules / search | 32 | 4-5 | y | y | Accessible combobox: autocomplete listbox, keyboard nav, categories, clear button, template-driven. (Also an IMPROVED over library `SearchBar` — see below.) | coaching-berater, lony-kuchen, voelkerschulz |
| PageHero | organisms / hero | 12 | 5 | y | y | Reusable dark-surface hero: eyebrow, two-tone title, breadcrumbs, trust badges, CTA slot. | kmgit |
| ProgressSteps | forms / form-system | 9 | 4 | y | y | Numbered multi-step indicator, horizontal/vertical, `aria-current`, clickable. Form-system member. | coaching-berater |
| AriaLiveRegion | accessibility / a11y-toolkit | 9 | 5 | y | y | Global polite/assertive SR announcer, auto-clear, page-load reinit. Toolkit member. | coaching-berater |
| MobileStickyCTA | molecules / mobile-cta | 6 | 4 | y | y | Fixed bottom mobile action bar, `tel:` href, safe-area inset, 44-56px targets, trilingual, desktop-hidden. (StickyMobileBar/MobileStickyCTA twins → collapse names.) | webagentur-halle, hotel-landsberg |
| Select | forms / form-system | 4 | 5 | y | y | Token-clean select atom, `aria-invalid`, `aria-describedby`, `focus-visible`, touch-min height. Form-system member. | lutz-harder |
| Eyebrow / Kicker | atoms | 5 (Eyebrow 1 / Kicker 1) | 5 | y | y | Colored uppercase kicker/eyebrow atom above headings, hairline rule, `aria-hidden` decoration. Tiny, broadly reusable. (Two names for one atom — pick `Kicker`, alias `Eyebrow`.) | orthopaede-dessau, hairprofis |
| Divider | atoms | 2 | 5 | y | y | Token-based semantic `<hr>` rule atom, trivially reusable. | holz-baran |
| RichText | content | 1 | 5 | y | y | Tokenized prose wrapper for verbatim HTML fragments; library lacks it. | orthopaede-dessau |
| SkeletonGrid | ux / skeleton-grid | 1 | 5 | y | y | Loading skeleton grid, shimmer, auto-hides via `:has()`, dark-mode contrast fix. | hairprofis |
| TagList | molecules / tag-list | 1 | 5 | y | n | Tag pills with maxVisible overflow +N counter, variants; generic and clean. (a11y gap → add on extract.) | hairprofis |
| KbdKey | atoms | 1 | 5 | n | y | Semantic styled `<kbd>` keyboard-key badge atom, slot-based. (Tokenize on extract.) | wendermedia-com |
| PromptBlock | content / prompt-editor | 2 | 5 | y | y | Editable prompt code editor: line numbers, syntax highlight, copy, open-with-AI dropdown, keyboard. | neuralskills |
| MediaEmbed | media / media-embed | 1 | 5 | y | y | Privacy-facade YouTube/Vimeo embed, keyboard-operable, youtube-nocookie, image/gif modes. Consent-map family member. | neuralskills |
| ImageOptimizer | media / image-optimizer | 1 | 4 | y | y | Responsive srcSet generator, `fetchpriority`, lazy loading, sizes; clean Props. | webagentur-halle |

---

## IMPROVED (upgrade existing library components)

These map to a component the library already ships but the field version is stronger — replace or merge upstream.

| Name | mapsTo (library) | Why better | reuseFreq |
| --- | --- | --- | --- |
| InputMask | MaskedInput | Preset phone/card/date/IBAN masks + label + `aria-invalid` + `role=alert` + reduced-motion; DE presets. Most-cloned form atom (47) after ServiceCard. (Minor raw-px in one repo → tokenize.) | 47 |
| AccessibleAccordion | Accordion | Full ARIA + arrow/Home/End keyboard nav, single/multi mode. Library Accordion lacks the APG keyboard contract. | 36 |
| AccessibleTabs | Tabs | Roving tabindex + arrow-key WAI-ARIA tablist, JS-off stacked fallback. | 36 |
| AccessibleAlert | Alert | 4-variant status/alert with `role`+`aria-live`, dark mode. Library Alert atom is not a11y-first. | 36 |
| SearchSystem | SearchBar | Accessible combobox with autocomplete listbox, keyboard nav, categories — richer than the flat SearchBar. | 32 |
| SkeletonLoader | Skeleton | Variant-driven (text/card/image/avatar) shimmer, `role=presentation`, reduced-motion — richer than library Skeleton. | 27 |
| LiteYouTubeEmbed | VideoPlayer | DSGVO consent-gated zero-JS YouTube facade with self-hosted poster. Consent-map family. | 2 |
| NewsletterSignup | Newsletter | Brevo double-opt-in with honeypot, consent checkbox, card/inline variants. | 42 |
| TabBlock | Tabs | Full ARIA tablist, arrow-key nav, JS-off stacked fallback (orthopaede variant). Merge into AccessibleTabs. | 1 |
| ReferenceCard | TestimonialCard | Anonymous + named modes, conditional Review JSON-LD, stars (strip brand strings on extract). | 2 |

---

## Bespoke gems (from recent Gemini builds — low reuse, worth it anyway)

Singletons/near-singletons that are clean, tokenized, a11y-solid and fill a real gap. Low freq because they're recent bespoke builds, not because they're weak.

| Name | Category | reuseFreq | tok | a11y | Why worth it | Repo |
| --- | --- | --- | --- | --- | --- | --- |
| CancellationFlow | legal / cancellation-flow | 2 | y | y | §312k BGB login-free two-step Kündigungsbutton, trilingual, ARIA steps — reusable across WM SaaS. | neuralskills |
| WithdrawalInfo | legal / withdrawal-info | 2 | y | y | §356a BGB Widerrufsbelehrung + model form, trilingual, semantic sections, 44px CTA. | neuralskills |
| BrainwavePulse | ui / wave-loader | 2 | y | y | Pure-SVG EEG loader, reduced-motion, per-instance color/amplitude via CSS vars, `role=status`. | neuralskills |
| RoutePlanner | maps / route-planner | 2 | y | y | DSGVO-safe Google Maps directions launcher, no scripts, presets, trilingual, keyboard-safe. | hotel-landsberg, holz-baran |
| SiloArtBand | media / art-divider | 1 | y | y | Labeled illustration divider, UWG-honest art-tag figcaption, responsive Image. | hotel-landsberg |
| FlipCard | ui / flip-card | 1 | n | y | Accessible hover/tap flip card: button front, ESC unflip, reduced-motion crossfade, tabindex mgmt. (Tokenize on extract.) | lutz-harder |
| AudioSample | media / audio-sample | 1 | y | y | Semantic figure/figcaption audio sample wrapping AudioPlayer, title/role/year badge. | lutz-harder |
| KineticText | content / kinetic-text | 1 | n | y | Per-char reveal, IntersectionObserver, reduced-motion, 4 effects. (Tokenize.) | rote-muehle-wohnbau |
| InteractiveCard | ui / interactive-card | 1 | n | y | 3D tilt + glow hover card, reduced-motion guard, slot-based, generic wrapper. (Tokenize.) | rote-muehle-wohnbau |
| VerifiedBadge | atoms / verified-badge | 1 | y | y | Trust seal, silent-noop when false, size variants, `Intl` date; generic pattern. | hairprofis |
| NpsWidget | feedback / nps-survey | 1 | y | y | Config-driven NPS survey, scroll/time trigger, cooldown, radiogroup + `aria-live`. | kmgit |
| PartnerBadgesStrip | sections / trust-badges | 1 | y | y | Verified-only partner/trust strip, data-driven, hides if none, UWG-safe. | kmgit |
| SectionExtras | content / prose-extras | 1 | y | y | DRY renderer for ordered lists, blockquotes, tables, subsections with correct outline. | holz-baran |
| CodeComparison | content | 2 | n | y | Good/bad code side-by-side teaching block, layout prop. (Tokenize.) | wendermedia-com |
| FilterChip + ChipFilterBar + ActiveFiltersBar + SortDropdown + LoadMoreButton + SearchInput | molecules / filter-bar | 1-5 | mixed | y | Cohesive filter/sort/paginate molecule cluster (chips + count + removable + WCAG 44px targets). Backport as a mini-set for directory/listing pages. | wendermedia-com |
| StatCallout | molecules | 2 | y | y | Large stat with unit/label/source, 3 variants, UWG source field. mapsTo `StatCard`. | wendermedia-com |
| CTABox | molecules | 2 | n | y | Inline article CTA box, 4 variants. mapsTo `CTA`. (Tokenize.) | wendermedia-com |
| FreshnessBadge + ContentFreshness | content | 1 | y | y | Updated/reviewed badge with <90d recency highlight + published/updated dateline, `<time>` markup. | wendermedia-com |
| NonGuaranteeStatement | content | 2 | n | y | UWG-compliant no-results-guarantee disclaimer, variant/context props. (Tokenize.) | wendermedia-com |
| LastUpdated | content / trust | 2 | y | y | Semantic `<time>` freshness stamp, ISO datetime, localized German format. | voelkerschulz, kaiserskorpion |
| NotFound | sections / error | 46 | y | y | 404 page with search + popular links, semantic `<main>`, scoped tokens. (High freq but page-glue; extract the *pattern*, not the page.) | kaiserskorpion |
| ArticleFeedback | content / feedback | 1 | n | y | Was-this-helpful widget, thanks/improve states, aria-labels. (Tokenize.) | kaiserskorpion |
| PriceTable | content / price-table | 1 | y | y | Semantic responsive data price table, focusable scroll region, sr-only caption. | hundeschule-saalfeld |
| CourseFactBox | content / fact-box | 1 | y | y | Titled key/value `<dl>` spec panel with CTA, generic fact-box pattern. | hundeschule-saalfeld |
| HighlightHeading | content / highlight-heading | 1 | y | y | Segmented highlight heading, real markup (no `set:html`), tag-configurable. | hundeschule-saalfeld |
| TrustStrip | sections / trust-signals | 3 | y | y | Live-rating stat row, null-safe fallback, inline/card variants, locale-keyed. mapsTo `TrustBadges`. | hotel-landsberg |
| CreditCard | content / credit-card | 1 | y | y | Semantic `<dl>` metadata credit card, accent border, reusable meta pattern. | lutz-harder |
| ImageCircle | atoms / image-circle | 1 | y | y | Token-clean circular avatar atom, size prop, aspect enforcement, lazy/decoding. | lutz-harder |
| ExifCard | content / exif-card | 1 | y | y | `<dl>` camera/lens/settings metadata card, inline SVG icons. | halle-online |
| SvgIcon | atoms | 1 | n | y | Zero-JS inline SVG icon set (Feather/FA paths), `aria-label` prop. (Tokenize.) | wendermedia-com |
| CardList | content / card-list | 1 | y | y | Icon-marked horizontal list-card index, hover/focus states, reduced-motion. | orthopaede-dessau |
| PrimaryNav / BreadcrumbsBar | navigation / nav-system | 2 (PrimaryNav 2 / BreadcrumbsBar 1) | y | y | Desktop nav with nested dropdowns + active-branch detect; light full-width breadcrumb strip below dark hero. **Members of the `navigation/nav-system` unit above — backport with the toggle/skip-link/breadcrumb set, not as isolated gems.** | orthopaede-dessau, kmgit |
| DataProtectionNotice | forms / data-protection-notice | 1 | y | y | Reusable GDPR consent notice for forms; semantic info tokens, icon + text. | rote-muehle-wohnbau |

---

## High-freq names NOT yet adjudicated (freq ≥ 20, no finder deep-read)

These names carry a `reuseFreq ≥ 20` in `_backport-freq.txt` but **no finder deep-read an implementation this pass**, so they cannot be ranked as keepers (no verified `reuse`/`tok`/`a11y` score). They are also not excluded outright — several are plausible library primitives that a **second pass MUST evaluate** before the audit is complete. Listing them here closes the gap the coverage caveat opens: a high freq with no row above is *pending*, not *dismissed*. Verdict column = provisional routing for pass 2.

| Name | reuseFreq | Provisional verdict | Note |
| --- | --- | --- | --- |
| Logo | 44 | LIKELY-KEEPER (atom) | Brand-logo atom appears in nearly every repo; extract a generic `Logo`/`Wordmark` atom (slot + `aria-label` + link), NOT any one brand's fixed SVG. Deep-read one clean impl in pass 2. |
| ArticleCard | 40 | LIKELY-KEEPER (ui/cards) | Blog/article teaser card — sibling of `ServiceCard`. Very likely a real card primitive; not deep-read, so unranked. Evaluate against library `ArticleCard`/`PostCard` in pass 2. |
| SchemaLocalBusiness / LocalBusinessSchema | 41 / 6 | LIKELY-KEEPER (seo/schema-kit) | LocalBusiness JSON-LD emitter — belongs in the **schema-kit** unit (collapse the `SchemaX`/`XSchema` twin). Deep-read + fold into schema-kit in pass 2. Data is prop-driven (not identity-baked) so it is library-safe. |
| SchemaServices / SchemaService / ServiceSchema | 33 / 3 / 4 | KEEPER (seo/schema-kit) | Service JSON-LD emitter — already a schema-kit member (ServiceSchema is in the kit list); the higher-freq `SchemaServices` twin must collapse into it. |
| SimpleContactForm | 38 | NEEDS-DEEP-READ | A generic contact form *could* be a keeper built on the form-system, but the fleet copy is likely the same demo-template lead form (see funnel scaffolding below). Deep-read one impl: if it is just form-system atoms + honeypot it is redundant; if it adds real value, keep. |
| NewsletterUnsubscribe | 38 | NEEDS-DEEP-READ (legal/newsletter) | Brevo/DOI unsubscribe confirmation surface — pairs with the kept `NewsletterSignup`. Plausibly a real DSGVO primitive; not deep-read. |
| MobileBottomBar / MobileBottomBar-adjacent | 38 | COLLAPSE → MobileStickyCTA | Almost certainly a twin of the kept `MobileStickyCTA` (6) / `StickyMobileBar` (1) / `StickyMobileCTA` (2). Collapse into one mobile-cta molecule; do not backport as a separate component. |
| AccessibilityTools / AccessibilityToolbar-v1.0 / AccessibilityBar | 38 / 2 / 1 | COLLAPSE → a11y-toolkit | The container/bar that wraps the a11y-toolkit toggles (FontSizeControls, FontFamilyToggle, etc.). Fold into the **accessibility/a11y-toolkit** unit as its shell, not a standalone. |
| FontSwitcher / StyleSwitcher | 37 / 36 | COLLAPSE → a11y-toolkit | Reader-comfort toggles — twins of the kept `FontFamilyToggle`/`FontSizeControls`. Collapse into the a11y-toolkit; do not add duplicate names. |
| UrgencyMessage | 37 | NEEDS-DEEP-READ (ux/persuasion) | Scarcity/urgency banner — a persuasion primitive in the family of the kept `VonRestorffCTA`. Deep-read for UWG-honesty (no fake countdowns) before keeping. |
| MainNav / NavBar / Navbar / PrimaryNav | 37 / 31 / 7 / 2 | NEEDS-DEEP-READ (navigation) | Primary navigation — likely repo-specific composition (varies per IA), but the `PrimaryNav` variant was deep-read (see bespoke gems). Consolidate the nav twins in pass 2; most are page-glue, but a headless nav primitive may be extractable. |
| MobileNavToggle / MobileMenuToggle / MobileNavToggle-adjacent | 36 / 1 | NEEDS-DEEP-READ (navigation) | Hamburger toggle — small a11y-sensitive nav atom (`aria-expanded`, focus trap). Deep-read one; likely keeper if the ARIA contract is clean. |
| RelatedPosts / RelatedBlogPosts / RelatedArticles | 35 / 33 / 2 | NEEDS-DEEP-READ (content) | Related-content list — plausible content primitive (data-driven card list). Collapse the three twins and deep-read one in pass 2. |
| VideoTestimonialCard / VideoTestimonials | 35 / 31 | NEEDS-DEEP-READ (content/testimonial) | Video testimonial card + list — could be a keeper (consent-gated video + Review JSON-LD) but MUST strip client testimonials/brand strings on extract. Deep-read for the consent-facade contract. |
| OnboardingChecklist / OnboardingTour | 36 / 2 | NEEDS-DEEP-READ (ux/onboarding) | Onboarding progress UI — may be app-specific (NeuralSkills-style) rather than a general primitive. Deep-read before deciding keeper vs exclude. |
| SeoTips | 36 | LIKELY-EXCLUDE | Reads as agency/demo advisory content, not a UI primitive — route to exclusion unless pass 2 finds a generic tips-callout worth keeping. |

> **Pass-2 rule:** every `NEEDS-DEEP-READ` row must get a finder deep-read (score `reuse`/`tok`/`a11y`) and either graduate into a keeper table above or drop into *Explicitly excluded* — no name may stay in this limbo section after the second pass.

---

## Explicitly excluded

Not library material — demo/agency scaffolding, one-off niche calculators, page glue, or entity-specific legal blocks that would leak a client's identity into a shared package.

| Name | reuseFreq | Reason excluded |
| --- | --- | --- |
| DemoWatermark / DemoBanner / DemoFooterBanner / DemoFooterNote / DemoWatermark-v1.0 | 38 / 38 / 38 / 8 / 8 | Demo-site watermark scaffolding — the opposite of production; must never ship in the library. |
| ExaliBadge | 39 | Agency-specific Exali insurance trust badge (Wender Media's own insurer). Not client-portable. |
| OrcidBadge | 23 | Person-specific ORCID academic badge — belongs to one author, not the library. |
| ResponsiblePerson | 36 | §18 MStV "Verantwortlicher i.S.d." block hard-bound to a specific legal entity's name/address — identity leak if shared. |
| WebsiteStatusSelector | 38 | Demo/agency "site status" picker used in prototype scaffolds; not a real UI primitive. |
| WaermepumpeRechner / GrundstueckskostenRechner / ErschliessungsVergleich / BauablaufTimeline | 3 / 3 / 3 / 3 | Niche one-off calculators/timelines for a single Bau/Wohnbau client — domain-locked, not generic. |
| NotFound (as a *page*) | 46 | High freq but it's a full 404 *page*, not a component. Extract the empty-state *pattern* into the library, leave the page in each repo. |
| Home / About / Services / Services-v2.0 / ServicePage-v2.0 / Footer-v2.0 / Hero-v2.0 / Reviews-v2.0 / Team-v2.0 | 4 / 36 / 39 / 4 / 2 / 4 / 3 / 2 / 2 | Page-level glue / versioned page sections — repo-specific composition, not reusable atoms. |
| CityServicesBlock / RelatedServices / ServiceHero / PersonaMessaging / BudgetSelector / InquiryTypeSelector / ServiceSelector / ProjectStartSelector / ProjectDescriptionSection / FormTrustElements / FormSuccessMessage / FormSubmitButton | 33 / 37 / 37 / 38 / 38 / 38 / 38 / 38 / 38 / 38 / 38 / 38 | Agency-funnel scaffolding cloned across the seo/wendermedia demo template — tightly coupled to one lead-form flow, not general-purpose. (The generic form primitives — FormTextField/TextArea/ErrorContainer — ARE kept in the form-system unit; these funnel-specific selectors are not.) |
| ReviewDisclaimer | 37 | Agency/demo disclaimer block tied to the affiliate/review template's own review-policy copy — text-bound to a specific site's stance, not a general UI primitive. (The generic UWG disclaimer that IS worth keeping is `NonGuaranteeStatement` / `AffiliateDisclaimer`; ReviewDisclaimer is template-specific boilerplate.) |
| About | 36 | Page-level "About" section — repo-specific composition/content, not a reusable atom. Same class as Home / Services page glue below. |
| CtaSection / CTAContent / ContentBlock / ContactButton / PageHeader | 38 / 38 / 38 / 38 / 37 | Demo-template page glue: full CTA sections, generic content blocks, the template's contact button, and the page-header wrapper. Repo-specific composition cloned across the seo/wendermedia scaffold — extract the *pattern* (already covered by `CTABox`, `PageHero`, `Kicker`), not these template-bound sections. |
| *HeroVisual family — AboutHeroVisual / FaqHeroVisual / ContactHeroVisual / ServicesHeroVisual / EquipmentHeroVisual / NeuroHeroVisual / (+ ~40 more `…HeroVisual`) | 7 / 6 / 6 / 5 / 1 / 1 / … | Per-page/per-brand decorative hero illustrations — each is a bespoke SVG/graphic bound to one page of one site. Not portable primitives; the reusable hero shell is the kept `PageHero`. Never ship brand-specific hero art in a shared package. |
| *Visual "dashboard mockup" family — AnalyticsDashboardVisual / SeoDashboardVisual / MedicalDashboardVisual / EcommerceDashboardVisual / CRMVisual / (+ ~60 more `…Visual`) | 2 each | Demo/agency illustrative dashboard mockups for prototype pages — decorative, content-locked to a demo narrative. Not UI primitives; exclude the whole `…Visual` mockup family. |
| WartungskostenSchaetzer / SanierungFoerderungRechner / DachsanierungSchaetzer / BaukostenRechner / FarbFlachenRechner / EntlastungsbetragRechner / MachbarkeitsCheck / MoebelKonfigurator / HausgroessenKonfigurator / KoerperzonenPriorisierer (+ other `*Rechner`/`*Konfigurator`/`*Check`/`*Schaetzer`) | 1-3 | Niche one-off calculators/configurators/checkers for a single Bau/Handwerk/Wohnbau/Medical client — domain-locked business logic, not generic. (Extends the WaermepumpeRechner/GrundstueckskostenRechner row above to the whole family.) |

---

## Suggested Phase-5 backport order (Astro-7 v4 migration)

Prioritized for the v4 relicense/migration. Systems first (highest coherence value), then proven singles, then bespoke gems.

1. **forms/form-system** (unit) — highest reach (peak freq 47) and the most-cloned surface; extracting it once kills the most duplication. Includes InputMask (IMPROVED) + FormValidation + labeled inputs + ProgressSteps + Select.
2. **accessibility/a11y-toolkit** (unit) — AccessibleAccordion/Tabs/Alert (IMPROVED, replace weak library versions) + AriaLiveRegion + reader-comfort toggles. BFSG-critical, freq 36-38.
3. **seo/schema-kit** (unit) — collapse the `SchemaX`/`XSchema` naming twins into one JSON-LD kit (FAQ 38, HowTo 33, Breadcrumb 33, + WebSite/Service/VideoObject).
4. **legal/consent-map** (unit) — MapConsent (31) + YoutubeConsent + LiteYouTubeEmbed + MediaEmbed + CookieManager. One DSGVO consent-gate facade family.
5. **ServiceCard** (54) + **VonRestorffCTA** (45, tokenize) — the two highest-reach standalone UI/CTA primitives.
6. **ShareButtons** (39) + **AuthorBio** (38) + **ScrollReveal** (37) — content/social/animation primitives at proven scale.
7. **SkeletonLoader** (IMPROVED, 27) + **PageHero** (12) + **MobileStickyCTA** (6, collapse StickyMobileBar twin) — organism/loading upgrades.
8. **Atoms sweep** — Kicker/Eyebrow (collapse), Divider, RichText, KbdKey, SvgIcon (tokenize), ImageCircle. Cheap, ripple everywhere.
9. **Bespoke SaaS legal + Gemini gems** — CancellationFlow, WithdrawalInfo (reusable across WM SaaS), BrainwavePulse, PromptBlock, RoutePlanner, filter-bar molecule cluster.

**Gate for every extraction:** tokenize any finder row flagged `tok=n` before it lands (VonRestorffCTA hex, KbdKey/SvgIcon/CTABox/FlipCard/KineticText/InteractiveCard/NonGuaranteeStatement/ArticleFeedback/CodeComparison px+hex), add the missing a11y contract for `a11y=n` rows (ServiceSchema/VideoObjectSchema/TagList), and strip any client/brand strings (ReferenceCard, ResponsiblePerson-adjacent) — enforce WM design-token rule at the library boundary.

---

## Critic review (2026-07-01)

Adversarial pass against the four gap classes. What changed and why:

**1. High-freq (reuseFreq ≥ 20) plausible library components missing from the doc → added.**
Cross-checked every name at freq ≥ 20 in `_backport-freq.txt` against the keeper tables and the excluded table. The doc's coverage caveat *named* the gap (Logo 44, ArticleCard 40, SchemaLocalBusiness 41, SimpleContactForm 38, MainNav 37) but only in prose, then left those names in limbo — neither ranked nor excluded. Added a new section **"High-freq names NOT yet adjudicated (freq ≥ 20, no finder deep-read)"** that gives every un-deep-read freq-≥20 name a provisional verdict:

- LIKELY-KEEPER: `Logo`, `ArticleCard`, `SchemaLocalBusiness`/`LocalBusinessSchema` (→ schema-kit).
- KEEPER (already a unit member, collapse twin): `SchemaServices`/`SchemaService`/`ServiceSchema`.
- NEEDS-DEEP-READ: `SimpleContactForm`, `NewsletterUnsubscribe`, `UrgencyMessage`, `MainNav`/`NavBar`, `MobileNavToggle`, `RelatedPosts`/`RelatedBlogPosts`, `VideoTestimonialCard`/`VideoTestimonials`, `OnboardingChecklist`.
- COLLAPSE (twins of kept components): `MobileBottomBar` → MobileStickyCTA; `AccessibilityTools`/`FontSwitcher`/`StyleSwitcher` → a11y-toolkit.
- LIKELY-EXCLUDE: `SeoTips`.

Added a hard pass-2 rule: no name may stay in that limbo section after the second finder pass.

**2. Demo/agency/niche/page-glue wrongly absent from "Explicitly excluded" → moved in.**
None of the flagged names were listed as *keepers* (good — no false positives to demote), but several freq-≥2 offenders named in the task were missing from the excluded table entirely. Added exclusion rows for:

- `ReviewDisclaimer` (37) — template-specific review-policy boilerplate (the generic disclaimer kept is `NonGuaranteeStatement`/`AffiliateDisclaimer`).
- `About` (36) — page-level section, not an atom.
- `CtaSection`/`CTAContent`/`ContentBlock`/`ContactButton`/`PageHeader` (37-38) — demo-template page glue (pattern already covered by CTABox/PageHero/Kicker).
- The whole `*HeroVisual` family (AboutHeroVisual 7, FaqHeroVisual 6, … ~40 names) — per-brand decorative hero art; reusable shell is the kept `PageHero`.
- The whole `*Visual` dashboard-mockup family (~60 names) — decorative demo mockups.
- Extended the `*Rechner` exclusion to the full `*Rechner`/`*Konfigurator`/`*Check`/`*Schaetzer` niche-calculator family (WartungskostenSchaetzer, BaukostenRechner, MachbarkeitsCheck, …). `WebsiteStatusSelector` was already correctly excluded.

**3. Cohesive system split across sections → consolidated.**
The **navigation** system was fragmented: `PrimaryNav`/`BreadcrumbsBar` sat in *Bespoke gems* while `MainNav`/`NavBar`/`MobileNavToggle`/skip-link/breadcrumb twins were only high-freq-unadjudicated. Added a **`navigation/nav-system`** unit to "Cohesive systems to backport as units" (peak freq 37) capturing the shared active-branch detection, mobile-toggle `aria-expanded`/focus-trap contract, skip-link, and breadcrumb-bar behavior, and annotated the bespoke-gems `PrimaryNav / BreadcrumbsBar` row as members of that unit so the two aren't backported in isolation. (The a11y-toolkit shell twins `AccessibilityTools`/`FontSwitcher`/`StyleSwitcher` were folded into the existing a11y-toolkit unit via the adjudication table rather than left floating.)

**4. Coverage caveat honesty → kept and reconciled.**
The caveat was already present and honest (19 deep-scanned repos named with deep-read/novel ratios; ~138 not deep-read; "absence ≠ not worth backporting"). It is factually consistent with the source (19 repos listed match the method note). Only fix needed: it previously used the caveat to *silently drop* high-freq names, which contradicts task 1. Added a paragraph pointing the reader to the new adjudication section so "high freq + no row" now resolves to an explicit provisional verdict instead of an unstated drop. No dishonest completeness claim was found to correct.

**Residual risk flagged for pass 2:** the `reuseFreq` count is a name match, not an implementation match (already caveated); the LIKELY-KEEPER routings (Logo, ArticleCard, SchemaLocalBusiness) are inferences from name + fleet-ubiquity, not deep-reads, and must be verified before extraction.
