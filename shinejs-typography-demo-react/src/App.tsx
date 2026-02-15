import { Shine } from '@hazya/shinejs/react';
import { useState } from 'react';
import { NextSteps } from './components/NextSteps';
import { ThemeToggle } from './components/ThemeToggle';

import './App.css';

const fontFamilies = {
  sans: {
    label: "Sans",
    value: "Inter, system-ui, sans-serif",
  },
  serif: {
    label: "Serif",
    value: "Georgia, \"Times New Roman\", serif",
  },
  mono: {
    label: "Mono",
    value: "\"JetBrains Mono\", \"Fira Code\", monospace",
  },
} as const;

const fontWeights = {
  regular: {
    label: "400",
    value: 400,
  },
  bold: {
    label: "700",
    value: 700,
  },
  black: {
    label: "900",
    value: 900,
  },
} as const;

const fontStyles = {
  normal: {
    label: "Normal",
    value: "normal",
  },
  italic: {
    label: "Italic",
    value: "italic",
  },
  oblique: {
    label: "Oblique",
    value: "oblique",
  },
} as const;

const localizedContent = {
  english: {
    label: "English",
    value: "Typography Shine",
  },
  chinese: {
    label: "Chinese",
    value: "排版光泽",
  },
  hindi: {
    label: "Hindi",
    value: "टाइपोग्राफी शाइन",
  },
  japanese: {
    label: "Japanese",
    value: "タイポグラフィ シャイン",
  },
  arabic: {
    label: "Arabic",
    value: "توهج الطباعة",
  },
} as const;

type FontFamilyKey = keyof typeof fontFamilies;
type FontWeightKey = keyof typeof fontWeights;
type FontStyleKey = keyof typeof fontStyles;
type ContentKey = keyof typeof localizedContent;

function App() {
  const [fontFamily, setFontFamily] = useState<FontFamilyKey>("sans");
  const [fontWeight, setFontWeight] = useState<FontWeightKey>("black");
  const [fontStyle, setFontStyle] = useState<FontStyleKey>("normal");
  const [content, setContent] = useState<ContentKey>("english");

  const setContentLanguage = (nextContent: ContentKey) => {
    setContent(nextContent);
  };

  const optionButtonClass = (isActive: boolean) =>
    `invert rounded-md border-2 px-3 py-1.5 text-xs font-semibold tracking-wide text-slate-400 dark:text-slate-900 transition sm:text-sm ${isActive
      ? "border-slate-400 dark:bg-slate-200 bg-slate-800"
      : "cursor-pointer border-slate-300 hover:border-slate-400 hover:bg-slate-900"
    }`;

  return (
    <>
      <ThemeToggle />

      <section className="flex flex-col grow place-items-center gap-16 px-10 md:px-20 pt-10 pb-20 lg:p-20">
        <div className="flex w-full max-w-5xl flex-col gap-6 rounded-xl border border-slate-200 bg-white/70 p-5 shadow-sm sm:p-8 dark:bg-white/5">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <p className="w-fit text-xs font-bold tracking-[0.14em] text-slate-600 uppercase dark:text-slate-300">Font Family</p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(fontFamilies).map(([key, option]) => (
                  <button key={key} className={optionButtonClass(fontFamily === key)} onClick={() => setFontFamily(key as FontFamilyKey)}>
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="w-fit text-xs font-bold tracking-[0.14em] text-slate-600 uppercase dark:text-slate-300">Font Weight</p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(fontWeights).map(([key, option]) => (
                  <button key={key} className={optionButtonClass(fontWeight === key)} onClick={() => setFontWeight(key as FontWeightKey)}>
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="w-fit text-xs font-bold tracking-[0.14em] text-slate-600 uppercase dark:text-slate-300">Font Style</p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(fontStyles).map(([key, option]) => (
                  <button key={key} className={optionButtonClass(fontStyle === key)} onClick={() => setFontStyle(key as FontStyleKey)}>
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="w-fit text-xs font-bold tracking-[0.14em] text-slate-600 uppercase dark:text-slate-300">Content Language</p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(localizedContent).map(([key, option]) => (
                <button key={key} className={optionButtonClass(content === key)} onClick={() => setContentLanguage(key as ContentKey)}>
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <Shine
          as="h1"
          className="text-[clamp(2rem,14vw,8rem)] font-bold text-(--hero-text) tracking-wide leading-tight dark:invert"
          style={{
            fontFamily: fontFamilies[fontFamily].value,
            fontStyle: fontStyles[fontStyle].value,
            fontWeight: fontWeights[fontWeight].value,
          }}
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
          {localizedContent[content].value}
        </Shine>
      </section>

      <NextSteps />
    </>
  );
}

export default App;
