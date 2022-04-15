

import "./App.css"

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";
import { Watch } from "./pages/Watch";
import { Error } from "./components/Error/Error";
import { PlayListPage } from "./pages/PlaylistPage";
import { WatchLaterPage } from "./pages/WatchLaterPage";
import { HistoryPage } from "./pages/HistoryPage";
import { LikesPage } from "./pages/LikesPage";
import { PlaylistVideoPage } from "./pages/PlaylistVideoPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";


export const App = () => {
  return <>
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/watch/:videoId" element={<Watch />} />
      <Route path="/playlist" element={<PlayListPage />} />
      <Route path="/watchlater" element={<WatchLaterPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/likes" element={<LikesPage />} />
      <Route path="/pvideo/:play" element={<PlaylistVideoPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  </>
}

export default App;
