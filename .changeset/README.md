# Changesets

WenderMedia Astro Components uses [Changesets](https://github.com/changesets/changesets) to manage versioning and changelog generation.

## Adding a Changeset

When making changes that should be documented in the changelog, run:

```bash
npm run changeset
```

This will prompt you to:
1. Select the type of change (major, minor, patch)
2. Write a summary of your changes

## Change Types

- **major**: Breaking changes that require users to update their code
- **minor**: New features that are backwards compatible
- **patch**: Bug fixes and minor improvements

## Version Conventions

Following [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0 → 2.0.0): Breaking changes
  - Removed or renamed components
  - Changed prop types or required props
  - CSS class name changes
  - Removed exports

- **MINOR** (1.0.0 → 1.1.0): New features
  - New components
  - New optional props
  - New exports
  - New CSS custom properties

- **PATCH** (1.0.0 → 1.0.1): Bug fixes
  - Bug fixes
  - Performance improvements
  - Documentation updates
  - Dependency updates (non-breaking)

## Release Process

1. Create changesets for your changes
2. Merge PR to main
3. Changesets bot creates a "Version Packages" PR
4. Merge the Version Packages PR to publish

## Example Changeset

```markdown
---
"@wendermedia/astro-components": minor
---

Added new VideoPlayer component with GDPR-compliant YouTube and Vimeo integration.

- Privacy-first with consent-based loading
- Supports native HTML5 video
- YouTube via youtube-nocookie.com
- Vimeo with DNT enabled
```
