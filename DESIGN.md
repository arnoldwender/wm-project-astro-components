---
version: alpha
name: Astro Components
description: "Internal tool / SaaS — astro-components. Wender Media internal tool. Stack varies (Astro/Next/Vite)."

colors:
  amber-50: "#fffbeb"
  amber-100: "#fef3c7"
  amber-200: "#fde68a"
  amber-300: "#fcd34d"
  amber-400: "#fbbf24"
  amber-500: "#f59e0b"
  amber-600: "#d97706"
  amber-700: "#b45309"
  amber-800: "#92400e"
  amber-900: "#78350f"
  blue-50: "#eff6ff"
  blue-100: "#dbeafe"
  blue-200: "#bfdbfe"
  blue-300: "#93c5fd"
  blue-400: "#60a5fa"
  blue-500: "#3b82f6"
  blue-600: "#2563eb"
  blue-700: "#1d4ed8"
  blue-800: "#1e40af"
  blue-900: "#1e3a8a"
  purple-50: "#faf5ff"
  purple-100: "#f3e8ff"
  purple-200: "#e9d5ff"
  purple-300: "#d8b4fe"
  purple-400: "#c084fc"
  purple-500: "#a855f7"
  purple-600: "#9333ea"
  purple-700: "#7e22ce"
  purple-800: "#6b21a8"
  purple-900: "#581c87"
  white: "#ffffff"
  black: "#000000"
  gray-50: "#f9fafb"
  gray-100: "#f3f4f6"
  gray-200: "#e5e7eb"
  gray-300: "#d1d5db"
  gray-400: "#9ca3af"
  gray-500: "#6b7280"
  gray-600: "#4b5563"
  gray-700: "#374151"
  gray-800: "#1f2937"
  gray-900: "#111827"
  success: "#22c55e"
  error: "#ef4444"
  warning: "#eab308"
---

# Astro Components — DESIGN.md (alpha)

## Identity

- **Slug:** `astro-components`
- **Repo:** `wm-project-astro-components`
- **Tier:** Internal tool / SaaS
- **Domain:** github.com
- **Stack:** Astro ^6.3.1
- **Status:** yes (src/ present)

## Context

Wender Media internal tool. Stack varies (Astro/Next/Vite).

## Hard rules (WM network-wide)

- Light mode default — NEVER `prefers-color-scheme: dark` auto-detect on web targets
- Address always Halle HQ (Franckestraße 3a, 06110 Halle (Saale))
- No external stock photos (Pexels/Unsplash/Pixabay/Freepik) — only client-owned or Nano Banana editorial
- Proprietary license — NEVER MIT/Apache/GPL/CC BY
- No Co-Authored-By tags in commits
- BFSG 2025 / WCAG 2.1 AA — alt text, 4.5:1 contrast, 44×44 px touch targets

## Status

- DESIGN.md auto-generated 2026-05-13 as alpha stub
- Expand sections (typography, components, do/don't, agent prompts) when active development resumes
- Audit: `.claude/scripts/design-dna-audit.py --repo .`
