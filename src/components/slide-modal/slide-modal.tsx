import { Slot, component$, useOnDocument, $, useSignal } from '@builder.io/qwik';
import type { PropFunction } from '@builder.io/qwik';

interface SlideModalProps {
  isOpen: boolean;
  onClose$: PropFunction<() => void>;
  height?: string;
  preventClose?: boolean;
}

export const SlideModal = component$<SlideModalProps>(({ isOpen, onClose$, height = 'max-h-[85vh]', preventClose = false }) => {
  const modalRef = useSignal<Element>();

  // Handle ESC key
  useOnDocument(
    'keydown',
    $((event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen && !preventClose) {
        onClose$();
      }
    })
  );

  // Focus trap implementation
  useOnDocument('keydown', $((event: KeyboardEvent) => {
    if (event.key === 'Tab' && isOpen && modalRef.value) {
      const focusableElements = Array.from(
        modalRef.value.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // If shift + tab
      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } 
      // If just tab
      else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }
  }));

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      class={{
        'fixed inset-0 z-50 transition-all duration-300 ease-in-out': true,
        'visible': isOpen,
        'invisible': !isOpen
      }}
    >
      {/* Backdrop */}
      <div 
        class={{
          'absolute inset-0 bg-black transition-opacity duration-300': true,
          'opacity-50': isOpen,
          'opacity-0': !isOpen
        }}
        onClick$={() => !preventClose && onClose$()}
      />
      
      {/* Modal Content */}
      <div
        class={{
          [`absolute bottom-0 left-0 right-0 ${height} bg-white rounded-t-2xl shadow-xl transform transition-transform duration-300 ease-in-out overflow-hidden`]: true,
          'translate-y-0': isOpen,
          'translate-y-full': !isOpen
        }}
      >
        {/* Handle bar and close button container */}
        <div class="sticky top-0 z-10 bg-white w-full pt-4 pb-2 rounded-t-2xl">
          <div 
            class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto"
            role="presentation"
          />
          
          {/* Close button - moved inside sticky container */}
          <button
            onClick$={onClose$}
            class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 rounded-full p-1"
            aria-label="Close modal"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content - with auto height and scrolling */}
        <div 
          class="px-6 py-4 overflow-y-auto"
          role="document"
        >
          <Slot />
        </div>
      </div>
    </div>
  );
}); 