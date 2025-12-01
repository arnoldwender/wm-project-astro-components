import { createSignal, For, Show, JSX } from 'solid-js';

interface Tab {
  id: string;
  label: string;
  content: JSX.Element;
  disabled?: boolean;
  icon?: JSX.Element;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  variant?: 'underline' | 'pills' | 'boxed';
  fullWidth?: boolean;
  onChange?: (tabId: string) => void;
}

export default function Tabs(props: TabsProps) {
  const variant = props.variant ?? 'underline';
  const fullWidth = props.fullWidth ?? false;
  const defaultTab = props.defaultTab ?? props.tabs[0]?.id;

  const [activeTab, setActiveTab] = createSignal(defaultTab);

  const selectTab = (tabId: string) => {
    setActiveTab(tabId);
    props.onChange?.(tabId);
  };

  const handleKeyDown = (e: KeyboardEvent, index: number) => {
    const enabledTabs = props.tabs.filter((t) => !t.disabled);
    const currentEnabledIndex = enabledTabs.findIndex((t) => t.id === props.tabs[index].id);

    let newIndex: number | null = null;

    if (e.key === 'ArrowRight') {
      newIndex = (currentEnabledIndex + 1) % enabledTabs.length;
    } else if (e.key === 'ArrowLeft') {
      newIndex = (currentEnabledIndex - 1 + enabledTabs.length) % enabledTabs.length;
    } else if (e.key === 'Home') {
      newIndex = 0;
    } else if (e.key === 'End') {
      newIndex = enabledTabs.length - 1;
    }

    if (newIndex !== null) {
      e.preventDefault();
      const newTab = enabledTabs[newIndex];
      selectTab(newTab.id);
      // Focus the new tab
      document.getElementById(`tab-${newTab.id}`)?.focus();
    }
  };

  const variantClasses = {
    underline: {
      list: 'border-b border-gray-200',
      tab: (isActive: boolean, isDisabled: boolean) => `
        px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors
        ${isActive ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `,
    },
    pills: {
      list: 'gap-2',
      tab: (isActive: boolean, isDisabled: boolean) => `
        px-4 py-2 text-sm font-medium rounded-full transition-colors
        ${isActive ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `,
    },
    boxed: {
      list: 'bg-gray-100 p-1 rounded-lg gap-1',
      tab: (isActive: boolean, isDisabled: boolean) => `
        px-4 py-2 text-sm font-medium rounded-md transition-colors
        ${isActive ? 'bg-white text-gray-900 shadow' : 'text-gray-600 hover:text-gray-900'}
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `,
    },
  };

  const activeContent = () => {
    const tab = props.tabs.find((t) => t.id === activeTab());
    return tab?.content;
  };

  return (
    <div class="w-full">
      {/* Tab List */}
      <div
        class={`flex ${fullWidth ? 'w-full' : ''} ${variantClasses[variant].list}`}
        role="tablist"
        aria-orientation="horizontal"
      >
        <For each={props.tabs}>
          {(tab, index) => (
            <button
              id={`tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={activeTab() === tab.id}
              aria-controls={`panel-${tab.id}`}
              tabIndex={activeTab() === tab.id ? 0 : -1}
              disabled={tab.disabled}
              onClick={() => !tab.disabled && selectTab(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index())}
              class={`
                ${fullWidth ? 'flex-1 justify-center' : ''}
                ${variantClasses[variant].tab(activeTab() === tab.id, !!tab.disabled)}
                inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              `}
            >
              <Show when={tab.icon}>{tab.icon}</Show>
              {tab.label}
            </button>
          )}
        </For>
      </div>

      {/* Tab Panels */}
      <div class="mt-4">
        <For each={props.tabs}>
          {(tab) => (
            <div
              id={`panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
              hidden={activeTab() !== tab.id}
              tabIndex={0}
              class="focus:outline-none"
            >
              <Show when={activeTab() === tab.id}>{tab.content}</Show>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}
