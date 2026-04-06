/**
 * AuthSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/AuthSection',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Authentication section with login, signup, forgot password, reset, verify, and MFA variants.
- Three layouts: centered, split, card
- Social login providers (Google, GitHub)
- Password visibility toggle and verification code inputs
- Fully accessible with WCAG 2.1 AA compliance
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['login', 'signup', 'forgot', 'reset', 'verify', 'mfa'], description: 'Auth form variant' },
    layout: { control: 'select', options: ['centered', 'split', 'card'], description: 'Layout style' },
    title: { control: 'text', description: 'Section title' },
    subtitle: { control: 'text', description: 'Subtitle text' },
    showSocials: { control: 'boolean', description: 'Show social login buttons' },
    showRemember: { control: 'boolean', description: 'Show remember me checkbox' },
    showForgotPassword: { control: 'boolean', description: 'Show forgot password link' },
  },
};

export default meta;
type Story = StoryObj;

const renderAuth = (args: Record<string, unknown>) => html`
  <section class="auth-section auth-section--${args.layout}" style="min-height: 600px; display: flex; align-items: center; justify-content: center; background: #f9fafb; padding: 2rem;">
    <div style="width: 100%; max-width: 28rem;">
      <div style="${args.layout === 'card' ? 'background: #fff; border-radius: 1.5rem; padding: 2.5rem; box-shadow: 0 10px 40px rgba(0,0,0,0.08);' : ''}">
        <div style="text-align: center; margin-bottom: 2rem;">
          <h1 style="font-size: 1.5rem; font-weight: 700; margin: 0 0 0.5rem; color: #1e293b;">${args.title}</h1>
          <p style="font-size: 0.875rem; color: #64748b; margin: 0;">${args.subtitle}</p>
        </div>

        ${args.showSocials && (args.variant === 'login' || args.variant === 'signup') ? html`
          <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;">
            <a href="#" style="display: flex; align-items: center; justify-content: center; gap: 0.75rem; padding: 0.75rem 1rem; background: #fff; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 500; color: #1e293b; text-decoration: none;">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/></svg>
              Continue with Google
            </a>
            <a href="#" style="display: flex; align-items: center; justify-content: center; gap: 0.75rem; padding: 0.75rem 1rem; background: #fff; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 500; color: #1e293b; text-decoration: none;">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Continue with GitHub
            </a>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
            <div style="flex: 1; height: 1px; background: #e2e8f0;"></div>
            <span style="font-size: 0.75rem; color: #94a3b8; text-transform: uppercase;">or continue with email</span>
            <div style="flex: 1; height: 1px; background: #e2e8f0;"></div>
          </div>
        ` : ''}

        <form style="display: flex; flex-direction: column; gap: 1.25rem;">
          ${args.variant === 'signup' ? html`
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div>
                <label style="font-size: 0.875rem; font-weight: 500; color: #1e293b; display: block; margin-bottom: 0.375rem;">First name</label>
                <input type="text" placeholder="Jane" style="width: 100%; padding: 0.75rem 1rem; font-size: 0.875rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; box-sizing: border-box;" />
              </div>
              <div>
                <label style="font-size: 0.875rem; font-weight: 500; color: #1e293b; display: block; margin-bottom: 0.375rem;">Last name</label>
                <input type="text" placeholder="Doe" style="width: 100%; padding: 0.75rem 1rem; font-size: 0.875rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; box-sizing: border-box;" />
              </div>
            </div>
          ` : ''}

          <div>
            <label style="font-size: 0.875rem; font-weight: 500; color: #1e293b; display: block; margin-bottom: 0.375rem;">Email address</label>
            <input type="email" placeholder="you@example.com" style="width: 100%; padding: 0.75rem 1rem; font-size: 0.875rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; box-sizing: border-box;" />
          </div>

          ${args.variant === 'login' || args.variant === 'signup' ? html`
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.375rem;">
                <label style="font-size: 0.875rem; font-weight: 500; color: #1e293b;">Password</label>
                ${args.variant === 'login' && args.showForgotPassword ? html`<a href="#" style="font-size: 0.75rem; color: #3b82f6; text-decoration: none;">Forgot password?</a>` : ''}
              </div>
              <input type="password" placeholder="••••••••" style="width: 100%; padding: 0.75rem 1rem; font-size: 0.875rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; box-sizing: border-box;" />
            </div>
          ` : ''}

          ${args.variant === 'login' && args.showRemember ? html`
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <input type="checkbox" id="remember" style="accent-color: #3b82f6;" />
              <label for="remember" style="font-size: 0.875rem; color: #64748b;">Remember me for 30 days</label>
            </div>
          ` : ''}

          <button type="button" style="width: 100%; padding: 0.875rem 1.5rem; font-size: 0.875rem; font-weight: 600; background: #3b82f6; color: #fff; border: none; border-radius: 0.5rem; cursor: pointer;">
            ${args.variant === 'login' ? 'Sign in' : args.variant === 'signup' ? 'Create account' : args.variant === 'forgot' ? 'Send reset link' : 'Submit'}
          </button>
        </form>

        <div style="text-align: center; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid #e2e8f0;">
          <p style="font-size: 0.875rem; color: #64748b; margin: 0;">
            ${args.variant === 'login' ? html`Don't have an account? <a href="#" style="color: #3b82f6; font-weight: 500; text-decoration: none;">Sign up</a>` : ''}
            ${args.variant === 'signup' ? html`Already have an account? <a href="#" style="color: #3b82f6; font-weight: 500; text-decoration: none;">Sign in</a>` : ''}
          </p>
        </div>
      </div>
    </div>
  </section>
`;

export const Login: Story = {
  args: {
    variant: 'login',
    layout: 'centered',
    title: 'Welcome back',
    subtitle: 'Sign in to continue to your account',
    showSocials: true,
    showRemember: true,
    showForgotPassword: true,
  },
  render: (args) => renderAuth(args),
};

export const Signup: Story = {
  args: {
    variant: 'signup',
    layout: 'card',
    title: 'Create your account',
    subtitle: 'Get started with a free account',
    showSocials: true,
    showRemember: false,
    showForgotPassword: false,
  },
  render: (args) => renderAuth(args),
};

export const ForgotPassword: Story = {
  args: {
    variant: 'forgot',
    layout: 'centered',
    title: 'Forgot password?',
    subtitle: "Enter your email and we'll send you a reset link",
    showSocials: false,
    showRemember: false,
    showForgotPassword: false,
  },
  render: (args) => renderAuth(args),
};
