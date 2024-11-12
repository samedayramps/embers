import { component$, useTask$ } from '@builder.io/qwik';
import type { PropFunction } from '@builder.io/qwik';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onHide$: PropFunction<() => void>;
}

export const Toast = component$<ToastProps>(({ message, isVisible, onHide$ }) => {
  useTask$(({ track }) => {
    track(() => isVisible);
    if (isVisible) {
      const timeoutId = setTimeout(() => {
        onHide$();
      }, 3000); // Hide after 3 seconds

      return () => {
        clearTimeout(timeoutId);
      };
    }
  });

  return (
    <div
      class={[
        'toast toast-end z-[100] transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      ].join(' ')}
    >
      <div class="alert alert-success">
        <span>{message}</span>
      </div>
    </div>
  );
}); 