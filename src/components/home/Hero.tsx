import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Button } from '../ui/button';

const Hero = component$(() => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center text-white">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Attract More Customers Without Wasting Money on Complicated Marketing</h1>
          <p class="py-6">Simple, Effective Marketing Solutions for Small Businesses</p>
          <Button 
            variant="primary"
            class="mt-4"
            aria-label="Learn how our marketing solutions work"
          >
            <Link href="/how-it-works" class="font-medium">
              See How It Works
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
});

export default Hero; 

