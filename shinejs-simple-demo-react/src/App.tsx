import { Shine } from '@hazya/shinejs/react';
import './App.css';
import { NextSteps } from './components/NextSteps';
import { ThemeToggle } from './components/ThemeToggle';


function App() {
  return (
    <>
      <ThemeToggle />

      <section id="center">
        <Shine
          as="h1"
          className="shine-heading"
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
