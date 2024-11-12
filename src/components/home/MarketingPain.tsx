import { component$ } from '@builder.io/qwik';

const MarketingPain = component$(() => {
  return (
    <section class="py-16 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
            Is Marketing Overwhelming You?
          </h2>
          <p class="text-lg md:text-xl text-gray-300 leading-relaxed">
            As a small business owner, you have enough to juggle without the added 
            stress of marketing complexities. You want to attract more customers 
            and grow your business, but the myriad of marketing options can be 
            confusing and expensive.
          </p>
        </div>
      </div>
    </section>
  );
});

export default MarketingPain; 