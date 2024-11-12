import { component$ } from '@builder.io/qwik';

const ValueProposition = component$(() => {
  return (
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-8 text-white">
            We Make Marketing Simple
          </h2>
          <p class="text-lg md:text-xl text-gray-300 mb-12">
            At [Your Marketing Business Name], we specialize in helping small businesses like yours:
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div class="p-6 bg-base-100 rounded-lg">
              <h3 class="text-xl font-bold text-white mb-2">
                Attract More Customers
              </h3>
            </div>
            <div class="p-6 bg-base-100 rounded-lg">
              <h3 class="text-xl font-bold text-white mb-2">
                Increase Sales
              </h3>
            </div>
            <div class="p-6 bg-base-100 rounded-lg">
              <h3 class="text-xl font-bold text-white mb-2">
                Save Time and Money
              </h3>
            </div>
          </div>

          <p class="text-lg md:text-xl text-gray-300 italic">
            No unnecessary jargon or costly strategies—just straightforward marketing that works.
          </p>
        </div>
      </div>
    </section>
  );
});

export default ValueProposition; 