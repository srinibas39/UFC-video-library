

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
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { useAuth } from "./context/AuthContext";
import { UploadPage } from "./pages/UploadPage";
import { SearchedVideo } from "./components/SearchedVideo/SearchedVideo";
import { ProfilePage } from "./pages/ProfilePage";



export const App = () => {
  const { token } = useAuth();

  return <>
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/watch/:videoId" element={<Watch />} />
      <Route path="/playlist" element={<PrivateRoute token={token}><PlayListPage /></PrivateRoute>} />
      <Route path="/watchlater" element={<PrivateRoute token={token}><WatchLaterPage /></PrivateRoute>} />
      <Route path="/history" element={<PrivateRoute token={token}><HistoryPage /></PrivateRoute>} />
      <Route path="/likes" element={<PrivateRoute token={token}><LikesPage /></PrivateRoute>} />
      <Route path="/playlist/:playlistId" element={<PrivateRoute token={token}><PlaylistVideoPage /></PrivateRoute>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/search" element={<SearchedVideo />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  </>
}

export default App;
