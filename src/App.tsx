import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Components/Layout/Layout';
import AppWrapper from './Components/AppWrapper/AppWrapper';

const LazyHomePage = lazy(() => import("./Components/Pages/HomePage/HomePage"));
const LazyDetails = lazy(() => import("./Components/Pages/Details/Details"));
const LazyAbout = lazy(() => import("./Components/Pages/About/About"));
const LazyGenres = lazy(() => import("./Components/Pages/Genres/Genres"));
const LazyGenreGames = lazy(() => import("./Components/Pages/GenreGames/GenreGames"));
const LazyAccount = lazy(() => import("./Components/Pages/Account/Account"));

function App() {
  return (
    <BrowserRouter>
    <AppWrapper>
    <Layout>
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading....</div>}><LazyHomePage /></Suspense>}></Route>
        <Route path="/details/:id" element={<Suspense fallback={<div>Loading....</div>}><LazyDetails /></Suspense>}></Route>
        <Route path="/about" element={<Suspense fallback={<div>Loading....</div>}><LazyAbout /></Suspense>}></Route>
        <Route path="/genres" element={<Suspense fallback={<div>Loading....</div>}><LazyGenres /></Suspense>}></Route>
        <Route path="/genres/:id" element={<Suspense fallback={<div>Loading....</div>}><LazyGenreGames /></Suspense>}></Route>
        <Route path="/account" element={<Suspense fallback={<div>Loading....</div>}><LazyAccount /></Suspense>}></Route>
      </Routes>
      </Layout>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
