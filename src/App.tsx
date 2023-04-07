import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Components/Layout/Layout';
import AppWrapper from './Components/AppWrapper/AppWrapper';
import Footer from './Components/Footer/Footer';
import myGif from './Assets/image/loading.gif';


const LazyHomePage = lazy(() => import("./Components/Pages/HomePage/HomePage"));
const LazyDetails = lazy(() => import("./Components/Pages/Details/Details"));
const LazyAbout = lazy(() => import("./Components/Pages/About/About"));
const LazyGenres = lazy(() => import("./Components/Pages/Genres/Genres"));
const LazyGenreGames = lazy(() => import("./Components/Pages/GenreGames/GenreGames"));
const LazyAccount = lazy(() => import("./Components/Pages/Account/Account"));
const LazySearch = lazy(() => import("./Components/Pages/Search/SearchResults"));



function App() {
  return (
    <BrowserRouter>
    <AppWrapper>
      <Layout>
      <Routes>
        <Route path="/" element={<Suspense fallback={<img src={myGif} alt="Loading...." />}><LazyHomePage /></Suspense>}></Route>
        <Route path="/details/:id" element={<Suspense fallback={<img src={myGif} alt="Loading...." />}><LazyDetails /></Suspense>}></Route>
        <Route path="/about" element={<Suspense fallback={<img src={myGif} alt="Loading...." />}><LazyAbout /></Suspense>}></Route>
        <Route path="/genres" element={<Suspense fallback={<img src={myGif} alt="Loading...." />}><LazyGenres /></Suspense>}></Route>
        <Route path="/genres/:id" element={<Suspense fallback={<img src={myGif} alt="Loading...." />}><LazyGenreGames /></Suspense>}></Route>
        <Route path="/account" element={<Suspense fallback={<img src={myGif} alt="Loading...." />}><LazyAccount /></Suspense>}></Route>
        <Route path="/search/:searchQuery" element={<Suspense fallback={<img src={myGif} alt="Loading...." />}><LazySearch /></Suspense>}/>
      </Routes>
      <Footer></Footer>
      </Layout>
      </AppWrapper>
      {/* </Layout>
      </AppWrapper> */}
    </BrowserRouter>
  );
}

export default App;
