import { component$, useSignal, $ } from '@builder.io/qwik';
import { Form } from '@builder.io/qwik-city';
import { useLeadFormAction } from '~/routes/index';
import { SlideModal } from '../slide-modal/slide-modal';

export default component$(() => {
  const action = useLeadFormAction();
  const isModalOpen = useSignal(false);
  const formRef = useSignal<HTMLFormElement>();
  const firstInputRef = useSignal<HTMLInputElement>();
  const isSubmitting = useSignal(false);
  const isLoading = useSignal(false);
  const errorMessage = useSignal('');

  const handleModalOpen = $(() => {
    isModalOpen.value = true;
  });

  const handleSubmitSuccess = $(() => {
    if (action.value?.success) {
      formRef.value?.reset();
      isModalOpen.value = false;
      isSubmitting.value = false;
    }
  });

  const handleModalClose = $(() => {
    if (!isSubmitting.value) {
      isModalOpen.value = false;
    }
  });

  return (
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p class="text-gray-300 mb-8">Tell us about your business needs and let's create a plan together.</p>
          <button 
            class="btn btn-primary btn-lg"
            onClick$={handleModalOpen}
            aria-haspopup="dialog"
          >
            Contact Us Now
          </button>
        </div>

        <SlideModal 
          isOpen={isModalOpen.value}
          onClose$={handleModalClose}
          preventClose={isSubmitting.value}
          height="max-h-[90vh]"
        >
          <Form 
            ref={formRef}
            action={action} 
            class="relative"
            preventdefault:submit
            onSubmit$={handleSubmitSuccess}
          >
            <div class="mb-6">
              <h3 class="font-bold text-lg">Get Started Today</h3>
            </div>
              
            {action.value?.success && (
              <div class="alert alert-success mb-4" role="alert">
                <span>{action.value.message}</span>
              </div>
            )}

            {errorMessage.value && (
              <div class="alert alert-error mb-4" role="alert">
                <span>{errorMessage.value}</span>
              </div>
            )}

            <div class="form-control w-full">
              <label class="label" for="name">
                <span class="label-text">Name</span>
              </label>
              <label class="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input 
                  ref={firstInputRef}
                  id="name"
                  type="text" 
                  name="name"
                  class="grow"
                  placeholder="Your name"
                  autocomplete="name"
                  aria-required="true"
                />
              </label>
              {action.value?.fieldErrors?.name && (
                <label class="label">
                  <span class="label-text-alt text-error" role="alert">{action.value.fieldErrors.name}</span>
                </label>
              )}
            </div>

            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <label class="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input 
                  type="email" 
                  name="email"
                  class="grow"
                  placeholder="your@email.com"
                  required
                />
              </label>
              {action.value?.fieldErrors?.email && (
                <label class="label">
                  <span class="label-text-alt text-error">{action.value.fieldErrors.email}</span>
                </label>
              )}
            </div>

            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Phone (Optional)</span>
              </label>
              <label class="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="h-4 w-4 opacity-70"
                >
                  <path fill-rule="evenodd" d="M1.885 1.885a.75.75 0 0 1 1.06 0L4.86 3.8A2.5 2.5 0 0 1 6.91 3h2.18a2.5 2.5 0 0 1 2.05.8l1.915-1.915a.75.75 0 1 1 1.06 1.06L12.2 4.86a2.5 2.5 0 0 1 .8 2.05v2.18a2.5 2.5 0 0 1-.8 2.05l1.915 1.915a.75.75 0 1 1-1.06 1.06L11.14 12.2a2.5 2.5 0 0 1-2.05.8H6.91a2.5 2.5 0 0 1-2.05-.8L2.945 14.115a.75.75 0 0 1-1.06-1.06L3.8 11.14A2.5 2.5 0 0 1 3 9.09V6.91a2.5 2.5 0 0 1 .8-2.05L1.885 2.945a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
                <input 
                  type="tel" 
                  name="phone"
                  class="grow"
                  placeholder="Your phone number"
                />
              </label>
            </div>

            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Message</span>
              </label>
              <textarea 
                name="message"
                class="textarea textarea-bordered w-full h-24 text-base"
                placeholder="Tell us about your business needs"
                required
                style={{
                  "line-height": "1.5rem",
                  "padding": "0.5rem 1rem"
                }}
              />
              {action.value?.fieldErrors?.message && (
                <label class="label">
                  <span class="label-text-alt text-error">{action.value.fieldErrors.message}</span>
                </label>
              )}
            </div>

            <div class="flex justify-end gap-3 mt-8">
              <button 
                type="submit" 
                class="btn btn-primary min-h-[44px]"
                disabled={isLoading.value || action.isRunning}
              >
                {(isLoading.value || action.isRunning) ? (
                  <span class="loading loading-spinner"></span>
                ) : 'Send Message'}
              </button>
            </div>
          </Form>
        </SlideModal>
      </div>
    </section>
  );
}); 