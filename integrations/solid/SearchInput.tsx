import { createSignal, createEffect, onCleanup, Show } from 'solid-js';

interface SearchInputProps {
  placeholder?: string;
  debounceMs?: number;
  minLength?: number;
  onSearch?: (query: string) => void;
  onClear?: () => void;
  autofocus?: boolean;
  disabled?: boolean;
}

export default function SearchInput(props: SearchInputProps) {
  const placeholder = props.placeholder ?? 'Search...';
  const debounceMs = props.debounceMs ?? 300;
  const minLength = props.minLength ?? 1;
  const autofocus = props.autofocus ?? false;
  const disabled = props.disabled ?? false;

  const [query, setQuery] = createSignal('');
  const [isSearching, setIsSearching] = createSignal(false);

  let timeoutId: number | undefined;
  let inputRef: HTMLInputElement | undefined;

  // Debounced search effect
  createEffect(() => {
    const currentQuery = query();

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (currentQuery.length >= minLength) {
      setIsSearching(true);
      timeoutId = window.setTimeout(() => {
        props.onSearch?.(currentQuery);
        setIsSearching(false);
      }, debounceMs);
    } else if (currentQuery.length === 0) {
      props.onClear?.();
      setIsSearching(false);
    }
  });

  onCleanup(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  });

  const handleClear = () => {
    setQuery('');
    props.onClear?.();
    inputRef?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClear();
    }
  };

  return (
    <div class="relative w-full max-w-md">
      {/* Search Icon */}
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Show
          when={!isSearching()}
          fallback={
            <svg
              class="w-5 h-5 text-gray-400 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              />
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          }
        >
          <svg
            class="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Show>
      </div>

      {/* Input */}
      <input
        ref={inputRef}
        type="search"
        value={query()}
        onInput={(e) => setQuery(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        autofocus={autofocus}
        class={`
          block w-full pl-10 pr-10 py-2.5
          border border-gray-300 rounded-lg
          text-gray-900 placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          transition-shadow
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
        `}
        aria-label={placeholder}
      />

      {/* Clear Button */}
      <Show when={query().length > 0}>
        <button
          type="button"
          onClick={handleClear}
          class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Clear search"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </Show>

      {/* Keyboard hint */}
      <Show when={query().length === 0}>
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <kbd class="hidden sm:inline-flex items-center px-2 py-0.5 text-xs text-gray-400 bg-gray-100 border border-gray-200 rounded">
            /
          </kbd>
        </div>
      </Show>
    </div>
  );
}
