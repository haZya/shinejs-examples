import { Shine } from '@hazya/shinejs/react';
import { NextSteps } from './components/NextSteps';
import { ThemeToggle } from './components/ThemeToggle';

import './App.css';

function App() {
  return (
    <>
      <ThemeToggle />

      <section className="flex grow place-items-center px-20 pt-10 pb-20 lg:p-20">
        <Shine
          as="h1"
          className="text-[clamp(2rem,14vw,8rem)] font-bold text-(--hero-text) leading-none dark:invert"
          options={{
            light: {
              position: "followMouse",
              intensity: 1.2,
            },
            config: {
              blur: 30,
              opacity: 0.3,
              offset: 0.1,
              shadowRGB: { r: 24, g: 41, b: 71 },
            },
          }}
        >
          Shining Bright
        </Shine>
      </section>

      <NextSteps />
    </>
  );
}

export default App;
