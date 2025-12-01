<script lang="ts">
  /**
   * Svelte Toast Notification Component
   * Con animaciones nativas de Svelte
   */

  import { fade, fly } from 'svelte/transition';
  import { flip } from 'svelte/animate';

  interface Toast {
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    duration?: number;
  }

  export let position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' = 'top-right';

  let toasts: Toast[] = [];

  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
  };

  const typeStyles = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      icon: 'text-green-500',
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: 'text-red-500',
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-800',
      icon: 'text-yellow-500',
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: 'text-blue-500',
    },
  };

  export function addToast(type: Toast['type'], message: string, duration = 5000) {
    const id = crypto.randomUUID();
    const toast: Toast = { id, type, message, duration };
    toasts = [...toasts, toast];

    if (duration > 0) {
      setTimeout(() => removeToast(id), duration);
    }

    return id;
  }

  export function removeToast(id: string) {
    toasts = toasts.filter((t) => t.id !== id);
  }

  // Expose methods globally for use from other components
  if (typeof window !== 'undefined') {
    (window as any).toast = {
      success: (msg: string, duration?: number) => addToast('success', msg, duration),
      error: (msg: string, duration?: number) => addToast('error', msg, duration),
      warning: (msg: string, duration?: number) => addToast('warning', msg, duration),
      info: (msg: string, duration?: number) => addToast('info', msg, duration),
    };
  }
</script>

<div class="fixed {positionClasses[position]} z-50 flex flex-col gap-2 pointer-events-none">
  {#each toasts as toast (toast.id)}
    <div
      in:fly={{ x: position.includes('right') ? 100 : -100, duration: 300 }}
      out:fade={{ duration: 200 }}
      animate:flip={{ duration: 300 }}
      class="pointer-events-auto max-w-sm w-full {typeStyles[toast.type].bg} {typeStyles[toast.type].border} border rounded-lg shadow-lg p-4 flex items-start gap-3"
      role="alert"
    >
      <!-- Icon -->
      <div class="{typeStyles[toast.type].icon} flex-shrink-0">
        {#if toast.type === 'success'}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        {:else if toast.type === 'error'}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        {:else if toast.type === 'warning'}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        {:else}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        {/if}
      </div>

      <!-- Message -->
      <p class="{typeStyles[toast.type].text} text-sm font-medium flex-1">
        {toast.message}
      </p>

      <!-- Close button -->
      <button
        on:click={() => removeToast(toast.id)}
        class="{typeStyles[toast.type].text} hover:opacity-70 transition-opacity"
        aria-label="Dismiss"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  {/each}
</div>
