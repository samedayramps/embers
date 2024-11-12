import { component$ } from '@builder.io/qwik';

const HowItWorks = component$(() => {
  return (
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
            How It Works
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body items-center text-center">
                <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                  <span class="text-2xl font-bold text-white">1</span>
                </div>
                <h3 class="card-title text-white mb-4">Connect With Us</h3>
                <p class="text-gray-300">
                  Schedule a Free Consultation to discuss your business goals and challenges.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body items-center text-center">
                <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                  <span class="text-2xl font-bold text-white">2</span>
                </div>
                <h3 class="card-title text-white mb-4">Receive a Tailored Plan</h3>
                <p class="text-gray-300">
                  We'll provide a simple marketing strategy designed to attract more customers.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body items-center text-center">
                <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                  <span class="text-2xl font-bold text-white">3</span>
                </div>
                <h3 class="card-title text-white mb-4">Grow Your Business</h3>
                <p class="text-gray-300">
                  Implement the plan with our support and watch your customer base expand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HowItWorks; 