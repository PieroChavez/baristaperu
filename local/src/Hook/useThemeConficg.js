// src/hooks/useThemeConfig.js
import { useEffect } from 'react';
import { Pane } from 'tweakpane';

const useThemeConfig = () => {
  useEffect(() => {
    const config = {
      theme: 'system',
    };

    const ctrl = new Pane({
      title: 'Config',
      expanded: true,
    });

    const update = () => {
      document.documentElement.dataset.theme = config.theme;
    };

    const sync = (event) => {
      if (
        !document.startViewTransition ||
        event.target.controller.view.labelElement.innerText !== 'Theme'
      )
        return update();
      document.startViewTransition(() => update());
    };

    ctrl.addBinding(config, 'theme', {
      label: 'Theme',
      options: {
        System: 'system',
        Light: 'light',
        Dark: 'dark',
      },
    });

    ctrl.on('change', sync);
    update();

    return () => {
      ctrl.dispose(); // Limpiar Tweakpane al desmontar el componente
    };
  }, []);
};

export default useThemeConfig;