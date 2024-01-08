import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('./Layout'));
const Home = lazy(() => import('../pages/Home'));
const Library = lazy(() => import('../pages/Library'));
const Reading = lazy(() => import('../pages/Reading'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="library" element={<Library />} />
        <Route path="reading" element={<Reading />} />
      </Route>
    </Routes>
  );
}

export default App;
