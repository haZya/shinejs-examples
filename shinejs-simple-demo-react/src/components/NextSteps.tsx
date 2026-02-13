export function NextSteps() {
  return (
    <section id="next-steps">
      <div id="docs">
        <svg className="icon" role="presentation" aria-hidden="true">
          <use href="/icons.svg#documentation-icon"></use>
        </svg>
        <h2>Documentation</h2>
        <ul>
          <li>
            <a href="https://shinejs.vercel.app/docs/getting-started/react-quick-start" target="_blank">
              <img className="button-icon" src="/favicon.ico" alt="" />
              Getting&nbsp;Started
            </a>
          </li>
          <li>
            <a href="https://shinejs-demo.vercel.app" target="_blank">
              <img className="button-icon" src="/favicon.ico" alt="" />
              Explore
            </a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/@hazya/shinejs" target="_blank">
              <svg
                className="button-icon"
                role="presentation"
                aria-hidden="true"
              >
                <use href="/icons.svg#npm-icon"></use>
              </svg>
              NPM
            </a>
          </li>
        </ul>
      </div>
      <div id="social">
        <svg className="icon" role="presentation" aria-hidden="true">
          <use href="/icons.svg#social-icon"></use>
        </svg>
        <h2>Connect</h2>
        <ul>
          <li>
            <a href="https://github.com/haZya/shinejs" target="_blank">
              <svg
                className="button-icon"
                role="presentation"
                aria-hidden="true"
              >
                <use href="/icons.svg#github-icon"></use>
              </svg>
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/hasitha-wickramasinghe-92483a19b" target="_blank">
              <svg
                className="button-icon"
                role="presentation"
                aria-hidden="true"
              >
                <use href="/icons.svg#linkedin-icon"></use>
              </svg>
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://hazya.dev" target="_blank">
              <svg
                className="button-icon"
                role="presentation"
                aria-hidden="true"
              >
                <use href="/icons.svg#code-icon"></use>
              </svg>
              hazya.dev
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
