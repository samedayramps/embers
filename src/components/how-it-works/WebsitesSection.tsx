import { component$, useVisibleTask$, useSignal } from '@builder.io/qwik';
import type { Signal } from '@builder.io/qwik';
import { animate } from 'motion';

export default component$(() => {
  const speedBarRef = useSignal<Element>();
  const contentRef = useSignal<Element>();
  const engagementValue = useSignal(0);
  const bounceRateValue = useSignal(0);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    // Animate the speed bar
    if (speedBarRef.value) {
      const speedBarAnimation = animate(
        speedBarRef.value,
        { width: ['0%', '100%'] },
        { duration: 1.2, easing: 'ease-in-out' }
      );
      cleanup(() => speedBarAnimation.stop());
    }

    // Fade in content and synchronize with count-up
    if (contentRef.value) {
      const contentAnimation = animate(
        contentRef.value,
        { 
          opacity: [0, 1],
          transform: ['translateY(20px)', 'translateY(0)'] 
        },
        { duration: 1.2, delay: 0.4, easing: 'ease-in-out' }
      );
      cleanup(() => contentAnimation.stop());
    }

    // Smooth counting up animation with easing
    const countUp = (signal: Signal<number>, end: number, callback?: () => void) => {
      let start = 0;
      const duration = 1600;
      const stepTime = Math.abs(Math.floor(duration / end));
      const easeOutQuad = (t: number) => t * (2 - t); // Easing function
      const timer = setInterval(() => {
        start += 1;
        signal.value = Math.floor(easeOutQuad(start / end) * end);
        if (start === end) {
          clearInterval(timer);
          if (callback) callback();
        }
      }, stepTime);
    };

    countUp(engagementValue, 30, () => {
      countUp(bounceRateValue, 50, () => {}); // Provide an empty callback
    });

  });

  return (
    <section 
      class="relative min-h-[50vh] bg-base-200 flex flex-col items-center justify-center px-4 py-8 md:py-16 overflow-hidden"
    >
      {/* Speed indicator bar */}
      <div class="absolute top-0 left-0 w-full h-2">
        <div 
          ref={speedBarRef}
          class="h-full bg-primary w-0"
        />
      </div>

      {/* Main content */}
      <div 
        ref={contentRef} 
        class="max-w-md md:max-w-4xl mx-auto text-center space-y-4 md:space-y-8 opacity-0"
      >
        <h2 class="text-3xl md:text-5xl font-bold text-base-content">
          A Faster Website Means a <span class="text-primary">Better Experience</span> for Your Customers
        </h2>

        {/* Bullet points in a flex grid */}
        <div class="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-lg md:text-xl text-base-content/80">
          <span>It’s easy to navigate.</span>
          <span>Enjoyable to use.</span>
          <span>Looks good.</span>
        </div>

        {/* Counting up elements side by side */}
        <div class="flex flex-col md:flex-row items-center justify-center gap-8 py-4">
          <div class="flex flex-col items-center">
            <span class="text-5xl md:text-6xl font-bold text-primary">+{engagementValue.value}%</span>
            <span class="text-xs md:text-sm text-base-content/70">More Sales</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-5xl md:text-6xl font-bold text-primary">+{bounceRateValue.value}%</span>
            <span class="text-xs md:text-sm text-base-content/70">Better Retention</span>
          </div>
        </div>

        <div class="flex flex-col gap-1 md:gap-2 max-w-md mx-auto">
          <p class="text-sm md:text-base text-base-content/80">
            "53% of mobile users will leave a page if it takes longer than three seconds to load."
          </p>
          <span class="text-xs md:text-sm text-base-content/60">- Shopify</span>
        </div>
      </div>
    </section>
  );
}); 