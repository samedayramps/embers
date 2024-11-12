import { component$ } from '@builder.io/qwik';
import { routeAction$, zod$, z } from '@builder.io/qwik-city';
import Hero from '~/components/home/Hero';
import MarketingPain from '~/components/home/MarketingPain';
import ValueProposition from '~/components/home/ValueProposition';
import Services from '~/components/home/Services';
import HowItWorks from '~/components/home/HowItWorks';
import LeadForm from '~/components/home/LeadForm';
import CallToAction from '~/components/home/CallToAction';

export const useLeadFormAction = routeAction$(
  async (data) => {
    // Here you would typically send this data to your backend/API
    console.log('Form submitted:', data);
    
    return {
      success: true,
      message: "Thanks! We'll be in touch soon."
    };
  },
  // Form validation schema
  zod$({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Please enter a valid email'),
    message: z.string().min(1, 'Message is required'),
    phone: z.string().optional(),
  })
);

export default component$(() => {
  return (
    <main>
      <Hero />
      <MarketingPain />
      <ValueProposition />
      <Services />
      <HowItWorks />
      <LeadForm />
      <CallToAction />
    </main>
  );
});
