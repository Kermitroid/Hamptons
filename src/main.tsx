import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { PostHogProvider } from 'posthog-js/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PostHogProvider
        apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
        options={{
          api_host: "https://us.i.posthog.com",
          debug: import.meta.env.MODE === "development",
        }}
      >
        <App />
      </PostHogProvider>
    </BrowserRouter>
  </StrictMode>
);
