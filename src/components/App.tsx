import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('./Layout'));
const Home = lazy(() => import('./Home'));
const Library = lazy(() => import('./Library'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="library" element={<Library />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
