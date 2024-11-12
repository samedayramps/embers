import { component$, useSignal, $, useTask$ } from '@builder.io/qwik';
import type { PropFunction } from '@builder.io/qwik';

interface MarketingGuideFormProps {
  onComplete$: PropFunction<() => void>;
  onSubmitStart$?: PropFunction<() => void>;
  isSubmitting?: boolean;
}

export const MarketingGuideForm = component$<MarketingGuideFormProps>(({ 
  onComplete$, 
  onSubmitStart$,
  isSubmitting: externalIsSubmitting 
}) => {
  const email = useSignal('');
  const isValidEmail = useSignal(false);
  const isLoading = useSignal(externalIsSubmitting || false);
  const loadingMessage = useSignal('');

  // Validate email on change
  useTask$(({ track }) => {
    track(() => email.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValidEmail.value = emailRegex.test(email.value);
  });

  const startLoading = $(async () => {
    isLoading.value = true;
    loadingMessage.value = 'Sending email version';
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    loadingMessage.value = 'Opening guide in new window';
    await new Promise(resolve => setTimeout(resolve, 1000));
  });

  const handleSubmit = $(async () => {
    if (!isValidEmail.value) return;
    
    try {
      onSubmitStart$?.();
      await startLoading();
      
      window.open('/marketing-guide.pdf', '_blank');
      localStorage.setItem('marketing-guide-submitted', 'true');
      onComplete$();
    } catch (error) {
      loadingMessage.value = 'An error occurred. Please try again.';
    }
  });

  const handleInput = $((ev: Event) => {
    email.value = (ev.target as HTMLInputElement).value;
  });

  return (
    <div 
      class="space-y-6"
      role="form"
      aria-label="Marketing Guide Download Form"
    >
      <div>
        <h2 class="text-2xl font-bold mb-4">Guide to Effective Marketing in 2024</h2>
        <p class="text-gray-600">
          Get exclusive access to our comprehensive guide on modern marketing strategies.
          Learn how to leverage digital channels, optimize your campaigns, and drive better results.
        </p>
      </div>

      <div class="space-y-3">
        <input
          type="email"
          placeholder="Enter your email"
          value={email.value}
          onInput$={handleInput}
          aria-invalid={!isValidEmail.value && email.value !== ''}
          aria-describedby="email-validation"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
        />
        {!isValidEmail.value && email.value !== '' && (
          <span id="email-validation" class="text-red-500 text-sm">
            Please enter a valid email address
          </span>
        )}
        <button
          onClick$={handleSubmit}
          disabled={!isValidEmail.value || isLoading.value}
          class={{
            'w-full px-6 py-2 rounded-md font-medium transition-all relative': true,
            'bg-[#FF6B6B] hover:bg-[#FF5252] text-white': isValidEmail.value,
            'bg-gray-200 text-gray-400 cursor-not-allowed': !isValidEmail.value
          }}
        >
          {isLoading.value ? (
            <div class="flex items-center justify-center gap-3">
              <svg 
                class="animate-spin h-5 w-5 text-white" 
                xmlns="http://www.w3.org/2000/svg" 
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
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span class="inline-flex items-center">
                {loadingMessage.value}
                {loadingMessage.value === 'Sending email version' && (
                  <span class="ml-1 animate-[ellipsis_1.5s_infinite]">...</span>
                )}
              </span>
            </div>
          ) : (
            'Open'
          )}
        </button>
      </div>
    </div>
  );
}); 