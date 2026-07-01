/**
 * ProgressSteps Stories — WenderMedia Astro Components
 * @copyright 2007-2026 Arnold Wender · Wender Media. All Rights Reserved. License: LicenseRef-Wender-Media-Source-1.0
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/* ─────────────────────────────────────────────────────────────────────────────
   Helpers — render the visual entirely in lit-html (no .astro import).
   Token values are inlined so the story works without a full token build.
   ───────────────────────────────────────────────────────────────────────────── */

interface StepDef {
  label: string;
  description?: string;
}

type Status = 'completed' | 'current' | 'pending';

function stepStatus(index: number, currentStep: number): Status {
  const n = index + 1;
  if (n < currentStep) return 'completed';
  if (n === currentStep) return 'current';
  return 'pending';
}

/** Checkmark SVG for completed steps */
const CHECK_SVG = html`
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="3"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
`;

/** Per-status circle colours (mirrors tokens.css brand aliases) */
const CIRCLE_STYLES: Record<Status, string> = {
  completed: 'background:var(--color-brand-primary,#0ea5e9);border:2px solid var(--color-brand-primary,#0ea5e9);color:#fff;',
  current:   'background:var(--color-brand-primary,#0ea5e9);border:2px solid var(--color-brand-primary,#0ea5e9);color:#fff;box-shadow:0 0 0 4px color-mix(in srgb,var(--color-brand-primary,#0ea5e9) 20%,transparent);',
  pending:   'background:var(--color-background-muted,#f8fafc);border:2px solid var(--color-border-default,#e2e8f0);color:var(--color-text-muted,#64748b);',
};

const LABEL_STYLES: Record<Status, string> = {
  completed: 'color:var(--color-text-primary,#1e293b);font-weight:var(--font-weight-medium,500);',
  current:   'color:var(--color-text-primary,#1e293b);font-weight:var(--font-weight-semibold,600);',
  pending:   'color:var(--color-text-muted,#64748b);font-weight:var(--font-weight-medium,500);',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Horizontal render
   ───────────────────────────────────────────────────────────────────────────── */
function renderHorizontal(steps: StepDef[], currentStep: number, clickable: boolean) {
  return html`
    <nav aria-label="Fortschrittsanzeige" style="width:100%;padding:1rem 0;">
      <ol role="list" style="
        display:flex;
        flex-direction:row;
        align-items:flex-start;
        justify-content:space-between;
        list-style:none;
        margin:0;
        padding:0;
      ">
        ${steps.map((step, index) => {
          const status    = stepStatus(index, currentStep);
          const isLast    = index === steps.length - 1;
          const canClick  = clickable && status === 'completed';
          const stepNum   = index + 1;
          const circleCss = CIRCLE_STYLES[status];
          const connFill  = index < currentStep - 1
            ? 'var(--color-brand-primary,#0ea5e9)'
            : 'var(--color-border-default,#e2e8f0)';

          return html`
            <li
              style="
                flex:1;
                display:flex;
                flex-direction:column;
                align-items:center;
                position:relative;
              "
              aria-current=${status === 'current' ? 'step' : ''}
            >
              <!-- Indicator -->
              <div style="position:relative;z-index:10;">
                ${canClick ? html`
                  <button
                    type="button"
                    aria-label="Zurück zu Schritt ${stepNum}: ${step.label}"
                    style="
                      ${circleCss}
                      width:40px;height:40px;
                      border-radius:9999px;
                      display:flex;align-items:center;justify-content:center;
                      font-size:0.875rem;font-weight:600;
                      cursor:pointer;padding:0;
                    "
                  >${CHECK_SVG}</button>
                ` : html`
                  <div aria-hidden="true" style="
                    ${circleCss}
                    width:40px;height:40px;
                    border-radius:9999px;
                    display:flex;align-items:center;justify-content:center;
                    font-size:0.875rem;font-weight:600;
                  ">
                    ${status === 'completed' ? CHECK_SVG : html`<span>${stepNum}</span>`}
                  </div>
                `}
              </div>

              <!-- Connector (not after last step) -->
              ${!isLast ? html`
                <div aria-hidden="true" style="
                  position:absolute;
                  top:1.25rem;
                  left:calc(50% + 1.25rem);
                  width:calc(100% - 2.5rem);
                  height:2px;
                  background:${connFill};
                "></div>
              ` : ''}

              <!-- Label + description -->
              <div style="text-align:center;margin-top:0.5rem;display:flex;flex-direction:column;gap:0.125rem;">
                <span style="font-size:0.875rem;${LABEL_STYLES[status]}">${step.label}</span>
                ${step.description ? html`
                  <span style="font-size:0.75rem;color:var(--color-text-secondary,#475569);line-height:1.5;max-width:9.375rem;">
                    ${step.description}
                  </span>
                ` : ''}
              </div>
            </li>
          `;
        })}
      </ol>
    </nav>
  `;
}

/* ─────────────────────────────────────────────────────────────────────────────
   Vertical render
   ───────────────────────────────────────────────────────────────────────────── */
function renderVertical(steps: StepDef[], currentStep: number, clickable: boolean) {
  return html`
    <nav aria-label="Fortschrittsanzeige" style="width:100%;max-width:20rem;padding:1rem 0;">
      <ol role="list" style="
        display:flex;flex-direction:column;
        list-style:none;margin:0;padding:0;
      ">
        ${steps.map((step, index) => {
          const status    = stepStatus(index, currentStep);
          const isLast    = index === steps.length - 1;
          const canClick  = clickable && status === 'completed';
          const stepNum   = index + 1;
          const circleCss = CIRCLE_STYLES[status];
          const connFill  = index < currentStep - 1
            ? 'var(--color-brand-primary,#0ea5e9)'
            : 'var(--color-border-default,#e2e8f0)';

          return html`
            <li
              style="
                display:flex;flex-direction:row;
                align-items:flex-start;position:relative;
                padding-bottom:${!isLast ? '1.5rem' : '0'};
              "
              aria-current=${status === 'current' ? 'step' : ''}
            >
              <!-- Indicator -->
              <div style="position:relative;z-index:10;flex-shrink:0;">
                ${canClick ? html`
                  <button
                    type="button"
                    aria-label="Zurück zu Schritt ${stepNum}: ${step.label}"
                    style="
                      ${circleCss}
                      width:40px;height:40px;
                      border-radius:9999px;
                      display:flex;align-items:center;justify-content:center;
                      font-size:0.875rem;font-weight:600;
                      cursor:pointer;padding:0;
                    "
                  >${CHECK_SVG}</button>
                ` : html`
                  <div aria-hidden="true" style="
                    ${circleCss}
                    width:40px;height:40px;
                    border-radius:9999px;
                    display:flex;align-items:center;justify-content:center;
                    font-size:0.875rem;font-weight:600;
                  ">
                    ${status === 'completed' ? CHECK_SVG : html`<span>${stepNum}</span>`}
                  </div>
                `}
              </div>

              <!-- Connector (not after last step) -->
              ${!isLast ? html`
                <div aria-hidden="true" style="
                  position:absolute;
                  top:2.5rem;left:19px;
                  width:2px;height:calc(100% - 1.25rem);
                  background:${connFill};
                "></div>
              ` : ''}

              <!-- Label + description -->
              <div style="margin-left:1rem;padding-top:0.25rem;display:flex;flex-direction:column;gap:0.125rem;">
                <span style="font-size:0.875rem;${LABEL_STYLES[status]}">${step.label}</span>
                ${step.description ? html`
                  <span style="font-size:0.75rem;color:var(--color-text-secondary,#475569);line-height:1.5;">
                    ${step.description}
                  </span>
                ` : ''}
              </div>
            </li>
          `;
        })}
      </ol>
    </nav>
  `;
}

/* ─────────────────────────────────────────────────────────────────────────────
   Meta
   ───────────────────────────────────────────────────────────────────────────── */

const DEMO_STEPS: StepDef[] = [
  { label: 'Kontakt',     description: 'Ihre Angaben' },
  { label: 'Details',     description: 'Projektdetails' },
  { label: 'Bestätigung' },
];

const meta: Meta = {
  title: 'Forms/ProgressSteps',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A step-by-step progress indicator for multi-step forms and wizard flows.

- **Horizontal** (default): steps arranged in a row; collapses to vertical on ≤ 640 px screens.
- **Vertical**: steps stacked with a left-rail connector line.
- **Clickable** mode: completed steps become \`<button>\` elements that dispatch a bubbling
  \`progress-step-click\` custom event with \`detail.step\` (1-indexed) for parent navigation.

Fully accessible: \`aria-current="step"\` on the active item, \`<nav>\` landmark with
configurable \`aria-label\`, \`aria-label\` on clickable buttons, \`aria-hidden\` on decorative
connectors. All transitions respect \`prefers-reduced-motion\`.
        `,
      },
    },
  },
  argTypes: {
    currentStep: {
      control: { type: 'number', min: 1, max: 4 },
      description: '1-indexed active step',
    },
    variant: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout direction',
    },
    clickable: {
      control: 'boolean',
      description: 'Completed steps become navigation buttons',
    },
  },
};

export default meta;
type Story = StoryObj;

/* ─────────────────────────────────────────────────────────────────────────────
   Stories
   ───────────────────────────────────────────────────────────────────────────── */

/** Default: horizontal, step 2 of 3 active. */
export const Default: Story = {
  args: {
    currentStep: 2,
    variant: 'horizontal',
    clickable: false,
  },
  render: (args) =>
    renderHorizontal(DEMO_STEPS, args['currentStep'] as number, args['clickable'] as boolean),
};

/** First step active — nothing completed yet. */
export const StepOne: Story = {
  args: {
    currentStep: 1,
    variant: 'horizontal',
    clickable: false,
  },
  render: (args) =>
    renderHorizontal(DEMO_STEPS, args['currentStep'] as number, args['clickable'] as boolean),
};

/** Final step — all previous completed. */
export const AllComplete: Story = {
  args: {
    currentStep: 3,
    variant: 'horizontal',
    clickable: false,
  },
  render: (args) =>
    renderHorizontal(DEMO_STEPS, args['currentStep'] as number, args['clickable'] as boolean),
};

/** Horizontal with `clickable={true}` — completed steps are buttons. */
export const HorizontalClickable: Story = {
  args: {
    currentStep: 3,
    variant: 'horizontal',
    clickable: true,
  },
  render: (args) =>
    renderHorizontal(DEMO_STEPS, args['currentStep'] as number, args['clickable'] as boolean),
};

/** Vertical layout, step 2 active. */
export const Vertical: Story = {
  args: {
    currentStep: 2,
    variant: 'vertical',
    clickable: false,
  },
  render: (args) =>
    renderVertical(DEMO_STEPS, args['currentStep'] as number, args['clickable'] as boolean),
};

/** Vertical with clickable completed steps. */
export const VerticalClickable: Story = {
  args: {
    currentStep: 3,
    variant: 'vertical',
    clickable: true,
  },
  render: (args) =>
    renderVertical(DEMO_STEPS, args['currentStep'] as number, args['clickable'] as boolean),
};

/** Four-step flow to test wider layouts. */
export const FourSteps: Story = {
  name: 'Four Steps',
  args: {
    currentStep: 2,
    variant: 'horizontal',
    clickable: false,
  },
  render: (args) => {
    const fourSteps: StepDef[] = [
      { label: 'Kontakt' },
      { label: 'Anfrage',     description: 'Projektdetails' },
      { label: 'Angebot',     description: 'Wir melden uns' },
      { label: 'Abschluss' },
    ];
    return renderHorizontal(fourSteps, args['currentStep'] as number, args['clickable'] as boolean);
  },
};
