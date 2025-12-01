/**
 * React Accordion Component
 * Accordion accesible con animaciones
 */

import { useState, useRef, useEffect } from 'react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  variant?: 'default' | 'bordered' | 'separated';
}

export default function Accordion({
  items,
  allowMultiple = false,
  variant = 'default',
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(() => {
    const defaultOpen = new Set<string>();
    items.forEach((item) => {
      if (item.defaultOpen) defaultOpen.add(item.id);
    });
    return defaultOpen;
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(id);
      }
      return newSet;
    });
  };

  const variantStyles = {
    default: {
      container: 'divide-y divide-gray-200',
      item: '',
      header: 'py-4',
      content: 'pb-4',
    },
    bordered: {
      container: 'border border-gray-200 rounded-lg divide-y divide-gray-200',
      item: '',
      header: 'px-4 py-4',
      content: 'px-4 pb-4',
    },
    separated: {
      container: 'space-y-2',
      item: 'border border-gray-200 rounded-lg',
      header: 'px-4 py-4',
      content: 'px-4 pb-4',
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <AccordionItemComponent
          key={item.id}
          item={item}
          isOpen={openItems.has(item.id)}
          onToggle={() => toggleItem(item.id)}
          styles={styles}
        />
      ))}
    </div>
  );
}

interface AccordionItemComponentProps {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  styles: {
    item: string;
    header: string;
    content: string;
  };
}

function AccordionItemComponent({
  item,
  isOpen,
  onToggle,
  styles,
}: AccordionItemComponentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(isOpen ? undefined : 0);

  useEffect(() => {
    if (isOpen) {
      const contentHeight = contentRef.current?.scrollHeight;
      setHeight(contentHeight);
      // After animation, set to auto for dynamic content
      const timer = setTimeout(() => setHeight(undefined), 200);
      return () => clearTimeout(timer);
    } else {
      // First set to actual height, then to 0 for animation
      const contentHeight = contentRef.current?.scrollHeight;
      setHeight(contentHeight);
      requestAnimationFrame(() => setHeight(0));
    }
  }, [isOpen]);

  return (
    <div className={styles.item}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`content-${item.id}`}
        className={`
          ${styles.header}
          w-full flex items-center justify-between text-left
          font-medium text-gray-900 hover:text-gray-700
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          transition-colors
        `}
      >
        <span>{item.title}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        id={`content-${item.id}`}
        ref={contentRef}
        style={{ height: height !== undefined ? `${height}px` : 'auto' }}
        className="overflow-hidden transition-[height] duration-200 ease-out"
        aria-hidden={!isOpen}
      >
        <div className={styles.content}>
          {item.content}
        </div>
      </div>
    </div>
  );
}
