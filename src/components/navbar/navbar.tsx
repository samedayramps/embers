import { component$, useSignal, $ } from '@builder.io/qwik';
import { Button } from '../ui/button';

export default component$(() => {
  const isMenuOpen = useSignal(false);

  const handleMenuToggle = $(() => {
    isMenuOpen.value = !isMenuOpen.value;
  });

  return (
    <div class="navbar sticky top-0 bg-base-100 bg-opacity-40 backdrop-blur-md text-white z-50">
      <div class="navbar-start">
        <div class="dropdown">
          <Button
            variant="ghost"
            onClick$={handleMenuToggle}
            class="lg:hidden p-2"
            aria-label="Open menu"
            aria-expanded={isMenuOpen.value}
            aria-controls="mobile-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </Button>
          <ul
            id="mobile-menu"
            class={{
              'menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white': true,
              'hidden': !isMenuOpen.value
            }}
          >
            <li>
              <a class="text-base py-3" href="/how-it-works">How It Works</a>
            </li>
            <li>
              <details>
                <summary class="text-base py-3">Parent</summary>
                <ul class="p-2">
                  <li><a class="text-base py-2" href="#">Submenu 1</a></li>
                  <li><a class="text-base py-2" href="#">Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a class="text-base py-3" href="#">Item 3</a></li>
          </ul>
        </div>
        <Button 
          variant="ghost"
          size="lg"
          class="text-2xl px-4"
          aria-label="Home"
        >
          <a href="/">daisyUI</a>
        </Button>
      </div>

      {/* Desktop Navigation */}
      <nav class="navbar-center hidden lg:flex" aria-label="Main navigation">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a class="text-base py-3" href="/how-it-works">How It Works</a>
          </li>
          <li>
            <details>
              <summary class="text-base py-3">Parent</summary>
              <ul class="p-2">
                <li><a class="text-base py-2" href="#">Submenu 1</a></li>
                <li><a class="text-base py-2" href="#">Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a class="text-base py-3" href="#">Item 3</a></li>
        </ul>
      </nav>

      <div class="navbar-end">
        <Button 
          variant="primary"
          shape="pill"
          class="text-dark text-sm font-medium px-6"
          aria-label="Get Started"
        >
          <a href="#">Get Started</a>
        </Button>
      </div>
    </div>
  );
});