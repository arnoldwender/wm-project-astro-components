/**
 * React Counter Component
 * Ejemplo de componente interactivo con React
 */

import { useState } from 'react';

interface CounterProps {
  initialValue?: number;
  step?: number;
  min?: number;
  max?: number;
  label?: string;
  onChange?: (value: number) => void;
}

export default function Counter({
  initialValue = 0,
  step = 1,
  min = -Infinity,
  max = Infinity,
  label = 'Counter',
  onChange,
}: CounterProps) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    const newValue = Math.min(count + step, max);
    setCount(newValue);
    onChange?.(newValue);
  };

  const decrement = () => {
    const newValue = Math.max(count - step, min);
    setCount(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="inline-flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
      <span className="text-sm font-medium text-gray-700">{label}</span>

      <div className="flex items-center gap-2">
        <button
          onClick={decrement}
          disabled={count <= min}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Decrease"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>

        <span className="w-12 text-center text-xl font-bold text-gray-900">
          {count}
        </span>

        <button
          onClick={increment}
          disabled={count >= max}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Increase"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
}
