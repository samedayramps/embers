import { component$ } from '@builder.io/qwik';

const About = component$(() => {
  return (
    <div class="about-section bg-base-100 py-10">
      <div class="container mx-auto text-center text-white">
        <h2 class="text-3xl font-bold mb-4">About Us</h2>
        <p class="mb-4">
          We are dedicated to helping businesses grow by connecting them with the right audience through authentic marketing strategies.
        </p>
        <p>
          Our team of experts works tirelessly to ensure that your marketing efforts are not only effective but also sustainable in the long run.
        </p>
      </div>
    </div>
  );
});

export default About; 