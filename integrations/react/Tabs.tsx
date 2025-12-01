/**
 * React Tabs Component
 * Tabs accesibles con keyboard navigation
 */

import { useState, useRef, useCallback } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  variant?: 'underline' | 'pills' | 'boxed';
  onChange?: (tabId: string) => void;
}

export default function Tabs({
  tabs,
  defaultTab,
  variant = 'underline',
  onChange,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, currentIndex: number) => {
      const enabledTabs = tabs.filter((t) => !t.disabled);
      const currentEnabledIndex = enabledTabs.findIndex(
        (t) => t.id === tabs[currentIndex].id
      );

      let nextIndex: number | null = null;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          nextIndex = (currentEnabledIndex + 1) % enabledTabs.length;
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          nextIndex =
            (currentEnabledIndex - 1 + enabledTabs.length) % enabledTabs.length;
          break;
        case 'Home':
          nextIndex = 0;
          break;
        case 'End':
          nextIndex = enabledTabs.length - 1;
          break;
      }

      if (nextIndex !== null) {
        e.preventDefault();
        const nextTab = enabledTabs[nextIndex];
        setActiveTab(nextTab.id);
        onChange?.(nextTab.id);
        tabRefs.current.get(nextTab.id)?.focus();
      }
    },
    [tabs, onChange]
  );

  const variantStyles = {
    underline: {
      list: 'border-b border-gray-200',
      tab: 'pb-3 px-4 -mb-px border-b-2 border-transparent hover:border-gray-300',
      activeTab: 'border-blue-500 text-blue-600',
      inactiveTab: 'text-gray-500 hover:text-gray-700',
    },
    pills: {
      list: 'gap-2',
      tab: 'px-4 py-2 rounded-full',
      activeTab: 'bg-blue-500 text-white',
      inactiveTab: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    },
    boxed: {
      list: 'bg-gray-100 p-1 rounded-lg gap-1',
      tab: 'px-4 py-2 rounded-md',
      activeTab: 'bg-white text-gray-900 shadow-sm',
      inactiveTab: 'text-gray-600 hover:text-gray-900',
    },
  };

  const styles = variantStyles[variant];
  const activeTabData = tabs.find((t) => t.id === activeTab);

  return (
    <div>
      {/* Tab List */}
      <div
        role="tablist"
        aria-label="Tabs"
        className={`flex ${styles.list}`}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el) => {
              if (el) tabRefs.current.set(tab.id, el);
            }}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            disabled={tab.disabled}
            onClick={() => handleTabClick(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`
              ${styles.tab}
              ${activeTab === tab.id ? styles.activeTab : styles.inactiveTab}
              font-medium text-sm transition-all
              disabled:opacity-50 disabled:cursor-not-allowed
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className="mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={activeTab !== tab.id}
            tabIndex={0}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
