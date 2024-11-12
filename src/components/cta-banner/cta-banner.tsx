import { component$, useSignal, useVisibleTask$, $ } from '@builder.io/qwik';
import { SlideModal } from '../slide-modal/slide-modal';
import { MarketingGuideForm } from '../marketing-guide-form/marketing-guide-form';

export const CtaBanner = component$(() => {
  const isVisible = useSignal(false);
  const isModalOpen = useSignal(false);
  const isSubmitting = useSignal(false);

  // Use useVisibleTask$ with proper options
  useVisibleTask$(({ cleanup }) => {
    const hasSubmitted = localStorage.getItem('marketing-guide-submitted');
    if (!hasSubmitted) {
      const timeoutId = setTimeout(() => {
        isVisible.value = true;
      }, 4000);
      
      // Clean up timeout to prevent memory leaks
      cleanup(() => clearTimeout(timeoutId));
    }
  }, {
    strategy: 'document-idle' // Better performance by waiting for idle time
  });

  const handleFormComplete = $(() => {
    isModalOpen.value = false;
    isVisible.value = false;
    isSubmitting.value = false;
  });

  const handleFormStart = $(() => {
    isSubmitting.value = true;
  });

  const handleClose = $(() => {
    isVisible.value = false;
  });

  const handleModalOpen = $(() => {
    isModalOpen.value = true;
  });

  return (
    <>
      {/* Main Banner */}
      <div 
        role="alert"
        aria-live="polite"
        aria-label="Marketing Guide Banner"
        class={{
          'fixed bottom-0 inset-x-0 transform transition-transform duration-300 ease-in-out z-40': true,
          'translate-y-0': isVisible.value,
          'translate-y-full': !isVisible.value
        }}
      >
        <div class="px-4 pb-4">
          <div class="container mx-auto lg:container-none lg:mr-0 lg:ml-auto lg:max-w-lg">
            <div class="bg-[#98FB98] rounded-lg shadow-lg px-4 py-2.5">
              <div class="flex items-center gap-4">
                <button 
                  class="text-gray-600 hover:text-gray-800 transition-colors"
                  onClick$={handleClose}
                  aria-label="Close banner"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <span class="text-black font-medium">Guide to Effective Marketing in 2024</span>
                <div class="ml-auto">
                  <button 
                    onClick$={handleModalOpen}
                    class="bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors"
                  >
                    Tap To Open
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <SlideModal 
        isOpen={isModalOpen.value} 
        onClose$={() => !isSubmitting.value && (isModalOpen.value = false)}
      >
        <MarketingGuideForm 
          onComplete$={handleFormComplete}
          onSubmitStart$={handleFormStart}
          isSubmitting={isSubmitting.value}
        />
      </SlideModal>
    </>
  );
}); 