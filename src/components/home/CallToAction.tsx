import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

const CallToAction = component$(() => {
  return (
    <section class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Grow Your Business?
          </h2>
          <p class="text-xl text-gray-300 mb-8">
            Don't let complicated marketing hold you back.
          </p>
          <p class="text-lg text-gray-300 mb-12">
            Contact us today for your free consultation and start attracting more customers without wasting time or money.
          </p>
          <div class="flex justify-center gap-4">
            <Link href="/contact" class="btn btn-primary btn-lg">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});

export default CallToAction; 