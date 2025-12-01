import { createSignal, createEffect } from 'solid-js';

interface ToggleProps {
  defaultChecked?: boolean;
  label?: string;
  description?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onChange?: (checked: boolean) => void;
}

export default function Toggle(props: ToggleProps) {
  const defaultChecked = props.defaultChecked ?? false;
  const size = props.size ?? 'md';
  const disabled = props.disabled ?? false;

  const [checked, setChecked] = createSignal(defaultChecked);

  createEffect(() => {
    props.onChange?.(checked());
  });

  const sizeClasses = {
    sm: {
      track: 'w-8 h-4',
      thumb: 'w-3 h-3',
      translate: 'translate-x-4',
    },
    md: {
      track: 'w-11 h-6',
      thumb: 'w-5 h-5',
      translate: 'translate-x-5',
    },
    lg: {
      track: 'w-14 h-7',
      thumb: 'w-6 h-6',
      translate: 'translate-x-7',
    },
  };

  const toggle = () => {
    if (!disabled) {
      setChecked(!checked());
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div class="flex items-start gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={checked()}
        disabled={disabled}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        class={`
          relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent
          transition-colors duration-200 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          ${sizeClasses[size].track}
          ${checked() ? 'bg-blue-600' : 'bg-gray-200'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <span class="sr-only">{props.label ?? 'Toggle'}</span>
        <span
          class={`
            pointer-events-none inline-block rounded-full bg-white shadow ring-0
            transition duration-200 ease-in-out
            ${sizeClasses[size].thumb}
            ${checked() ? sizeClasses[size].translate : 'translate-x-0'}
          `}
        />
      </button>
      {(props.label || props.description) && (
        <div class="flex flex-col">
          {props.label && (
            <span
              class={`text-sm font-medium ${disabled ? 'text-gray-400' : 'text-gray-900'}`}
              onClick={() => !disabled && toggle()}
            >
              {props.label}
            </span>
          )}
          {props.description && (
            <span class={`text-sm ${disabled ? 'text-gray-300' : 'text-gray-500'}`}>
              {props.description}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
