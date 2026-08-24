# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| Latest (main branch) | :white_check_mark: |
| Older versions | :x: |

This project follows continuous deployment. Only the latest version on the `main` branch receives security updates.

## Reporting a Vulnerability

We take security seriously. If you discover a security vulnerability, please report it responsibly.

### How to Report

**Please DO NOT create public GitHub issues for security vulnerabilities.**

1. **Email**: info@wendermedia.com
2. **Subject**: `[SECURITY] Brief description of the issue`

### What to Include

- Description of the vulnerability
- Steps to reproduce the issue
- Potential impact assessment
- Suggested fix (if applicable)

### Response Timeline

| Timeframe | Action |
|-----------|--------|
| 48 hours | Initial acknowledgment |
| 7 days | Assessment and severity classification |
| 14 days | Fix for critical/high issues |
| 30 days | Fix for medium/low issues |

### Disclosure Policy

- We follow responsible disclosure
- Please allow reasonable time to fix issues before public disclosure
- We will credit you in our security acknowledgments (if desired)

## Security Measures

- HTTPS enforced via hosting provider (HSTS, `max-age=31536000` — measured)
- No third-party tracking or analytics
- Regular dependency updates and vulnerability scanning
- No secrets or credentials committed to the repository

### Security headers — known gap

`astro.wendermedia.com` (this repo's Storybook) currently serves **only**
`Strict-Transport-Security`. It has no `X-Frame-Options`, no
`X-Content-Type-Options` and no `Referrer-Policy`, because `netlify.toml` here
declares no `[[headers]]` block. Measured 2026-08-24 against the live response —
an earlier revision of this file claimed these headers were configured; they
were not.

Closing the gap needs care rather than a copy-paste: Storybook renders every
story inside a **same-origin iframe** (`/iframe.html`), so `X-Frame-Options`
must be `SAMEORIGIN` — `DENY` blanks the canvas. A `Content-Security-Policy` is
a separate question again, since Storybook's runtime relies on inline scripts.

Note that these are **HTTP headers**, set at the edge. They cannot be set from
a `<meta http-equiv>` in a document; see the comment block in
`src/seo/SEO.astro` for why that approach was removed.

## Dependencies

We monitor dependencies for known vulnerabilities:

- GitHub Dependabot alerts
- `npm audit` during development
- Regular dependency updates

## Contact

**Email**: info@wendermedia.com
**Website**: https://www.wendermedia.com

---

**Last Updated**: April 2026
