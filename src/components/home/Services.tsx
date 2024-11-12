import { component$ } from '@builder.io/qwik';

const Services = component$(() => {
  return (
    <section class="py-16 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
            Our Services
          </h2>
          
          <div class="space-y-12">
            {/* Customized Marketing Plans */}
            <div class="flex flex-col md:flex-row gap-8 items-center">
              <div class="md:w-1/3">
                <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              <div class="md:w-2/3 text-center md:text-left">
                <h3 class="text-2xl font-bold text-white mb-3">Customized Marketing Plans</h3>
                <p class="text-gray-300">We create personalized strategies tailored to your business goals, focusing on methods that bring real results.</p>
              </div>
            </div>

            {/* Effective Online Presence */}
            <div class="flex flex-col md:flex-row gap-8 items-center">
              <div class="md:w-1/3">
                <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
              </div>
              <div class="md:w-2/3 text-center md:text-left">
                <h3 class="text-2xl font-bold text-white mb-3">Effective Online Presence</h3>
                <p class="text-gray-300">From user-friendly websites to engaging social media profiles, we'll help you reach your audience where they are.</p>
              </div>
            </div>

            {/* Engaging Video Content */}
            <div class="flex flex-col md:flex-row gap-8 items-center">
              <div class="md:w-1/3">
                <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div class="md:w-2/3 text-center md:text-left">
                <h3 class="text-2xl font-bold text-white mb-3">Engaging Video Content</h3>
                <p class="text-gray-300">Capture attention with compelling videos that showcase your products or services and connect with customers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Services; 