import { createSignal } from 'solid-js';

interface CounterProps {
  initialValue?: number;
  step?: number;
  min?: number;
  max?: number;
  label?: string;
}

export default function Counter(props: CounterProps) {
  const initialValue = props.initialValue ?? 0;
  const step = props.step ?? 1;
  const min = props.min ?? -Infinity;
  const max = props.max ?? Infinity;
  const label = props.label ?? 'Counter';

  const [count, setCount] = createSignal(initialValue);

  const increment = () => {
    setCount((c) => Math.min(c + step, max));
  };

  const decrement = () => {
    setCount((c) => Math.max(c - step, min));
  };

  return (
    <div class="inline-flex flex-col items-center gap-2">
      {label && (
        <span class="text-sm font-medium text-gray-700">{label}</span>
      )}
      <div class="inline-flex items-center rounded-lg border border-gray-300 bg-white shadow-sm">
        <button
          type="button"
          onClick={decrement}
          disabled={count() <= min}
          class="px-4 py-2 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
          aria-label="Decrease"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
          </svg>
        </button>
        <span
          class="px-6 py-2 text-lg font-semibold text-gray-900 min-w-[80px] text-center border-x border-gray-300"
          aria-live="polite"
        >
          {count()}
        </span>
        <button
          type="button"
          onClick={increment}
          disabled={count() >= max}
          class="px-4 py-2 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
          aria-label="Increase"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
}
