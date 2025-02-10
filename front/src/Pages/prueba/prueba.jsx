import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Pane } from "tweakpane";

import "./Home.css";

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const config = {
      theme: "dark",
      animate: true,
      snap: true,
      start: gsap.utils.random(0, 100, 1),
      end: gsap.utils.random(900, 1000, 1),
      scroll: true,
      debug: false,
    };

    const ctrl = new Pane({ title: "Config", expanded: false });
    const items = gsap.utils.toArray("ul li");

    const update = () => {
      document.documentElement.dataset.theme = config.theme;
      document.documentElement.dataset.syncScrollbar = config.scroll;
      document.documentElement.dataset.animate = config.animate;
      document.documentElement.dataset.snap = config.snap;
      document.documentElement.dataset.debug = config.debug;
      document.documentElement.style.setProperty("--start", config.start);
      document.documentElement.style.setProperty("--hue", config.start);
      document.documentElement.style.setProperty("--end", config.end);
    };

    ctrl.addBinding(config, "animate", { label: "Animate" });
    ctrl.addBinding(config, "snap", { label: "Snap" });
    ctrl.addBinding(config, "start", { label: "Hue Start", min: 0, max: 1000, step: 1 });
    ctrl.addBinding(config, "end", { label: "Hue End", min: 0, max: 1000, step: 1 });
    ctrl.addBinding(config, "scroll", { label: "Scrollbar" });
    ctrl.addBinding(config, "debug", { label: "Debug" });
    ctrl.addBinding(config, "theme", {
      label: "Theme",
      options: { System: "system", Light: "light", Dark: "dark" },
    });

    ctrl.on("change", update);
    update();
  }, []);

  return (
    <div>
      <header>
        <h1 className="fluid">you can<br />scroll.</h1>
      </header>
      <main>
        <section className="content fluid">
          <h2>
            <span aria-hidden="true">you can&nbsp;</span>
            <span className="sr-only">you can ship things.</span>
          </h2>
          <ul aria-hidden="true">
            {["design", "prototype", "solve", "build", "develop", "debug", "learn", "cook", "ship", "prompt", "collaborate", "create", "inspire", "follow", "innovate", "test", "optimize", "teach", "visualize", "transform", "scale", "do it"].map((item, index) => (
              <li key={index} style={{ "--i": index }}>{item}.</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="fluid">fin.</h2>
        </section>
      </main>
      <footer>ʕ⊙ᴥ⊙ʔ jh3yy &copy; 2024</footer>
      <a
        className="bear-link"
        href="https://twitter.com/intent/follow?screen_name=jh3yy"
        target="_blank"
        rel="noreferrer noopener"
      >
        {/* Aquí iría el SVG */}
      </a>
    </div>
  );
};

export default Home;
