import { component$, Slot, type QRL } from '@builder.io/qwik';

interface ButtonProps {
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost' | 'link' | 'outline';
  size?: 'lg' | 'md' | 'sm' | 'xs';
  shape?: 'square' | 'circle' | 'pill' | 'block';
  loading?: boolean;
  disabled?: boolean;
  active?: boolean;
  type?: 'button' | 'submit' | 'reset';
  class?: string;
  onClick$?: QRL<() => void>;
  'aria-label'?: string;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
  'aria-haspopup'?: boolean | 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid';
}

export const Button = component$<ButtonProps>(({
  variant = 'default',
  size = 'md',
  shape,
  loading,
  disabled,
  active,
  type = 'button',
  class: className,
  onClick$,
  'aria-label': ariaLabel,
  'aria-expanded': ariaExpanded,
  'aria-controls': ariaControls,
  'aria-haspopup': ariaHasPopup,
}) => {
  const classes = [
    'btn',
    variant !== 'default' && `btn-${variant}`,
    size !== 'md' && `btn-${size}`,
    shape && `btn-${shape}`,
    loading && 'loading',
    disabled && 'btn-disabled',
    active && 'btn-active',
    className,
  ].filter(Boolean);

  return (
    <button
      type={type}
      class={classes.join(' ')}
      onClick$={onClick$}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-haspopup={ariaHasPopup}
      aria-busy={loading}
    >
      <Slot />
    </button>
  );
}); 