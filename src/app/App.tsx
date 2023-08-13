import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { PageLoader } from 'widgets/PageLoader';

export const App = () => (
  <div className="app">
    <Suspense fallback={<PageLoader />}>
      <MainPage />
    </Suspense>
  </div>
);
