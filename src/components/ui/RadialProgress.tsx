import { component$, useSignal } from '@builder.io/qwik';

interface RadialProgressProps {
  targetValue: number;
  duration: number;
}

export default component$<RadialProgressProps>(({ targetValue, duration }) => {
  const progressValue = useSignal(0);

  const animateProgress = () => {
    let currentValue = 0;
    const stepTime = Math.abs(Math.floor(duration / targetValue));
    const timer = setInterval(() => {
      currentValue += 1;
      progressValue.value = currentValue;
      if (currentValue === targetValue) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  animateProgress();

  return (
    <div class="radial-progress text-primary" style={`--value:${progressValue.value};`} role="progressbar">
      {progressValue.value}%
    </div>
  );
}); 