type Theme = 'light' | 'dark';
type Scrolled = 'scrolled' | 'notScrolled';

type BackgroundColors = {
  [K in Theme]: {
    [P in Scrolled]: string;
  };
};

const backgroundColors: BackgroundColors = {
  light: {
    scrolled: '#dee3e3',
    notScrolled: '#F9F9F9',
  },
  dark: {
    scrolled: '#2b2b2b',
    notScrolled: '#1f1f1f',
  },
};

export function getBackgroundColor(scrolled: Scrolled, theme: Theme) {
  return backgroundColors[theme][scrolled];
}