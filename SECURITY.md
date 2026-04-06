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

- HTTPS enforced via hosting provider
- Security headers configured (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- No third-party tracking or analytics
- Regular dependency updates and vulnerability scanning
- No secrets or credentials committed to the repository

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
