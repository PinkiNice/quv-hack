import { createRoot } from 'react-dom/client';
import { App } from './components/app';

export function startReactApp() {
  const container = document.getElementById('app');
  if (!container) {
    throw new Error('No container found');
  }
  const root = createRoot(container);

  root.render(<App />);
}
