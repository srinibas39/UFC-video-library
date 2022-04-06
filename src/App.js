
import { Categories } from "./components/Categories/Categories";
import { Hero } from "./components/Hero/Hero";
import { NavBar } from "./components/Navbar/Navbar";
import { VideoCard } from "./components/VideoCard/VideoCard";
import { VideoCardContainer } from "./components/VideoCardContainer/VideoCardContainer";
import "./App.css"
import { VideoComponent } from "./components/VideoComponent/VideoComponent";
import { VideoOption } from "./components/VideoOptions/VideoOption";
import { Routes , Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";
import { Watch } from "./pages/Watch";
import { Error } from "./components/Error/Error";
import { PlayListPage } from "./pages/PlaylistPage";
import { WatchLaterPage } from "./pages/WatchLaterPage";
import { HistoryPage } from "./pages/HistoryPage";
import { LikesPage } from "./pages/LikesPage";


export const App = () => {
  return <>
   <Routes>
     <Route path="*" element={<Error/>}/>
     <Route path="/" element={<Home/>}/>
     <Route path="/explore" element={<Explore/>}/>
     <Route path="/watch/:videoId" element={<Watch/>}/>
     <Route path="/playlist" element={<PlayListPage/>}/>
     <Route path="/watchlater" element={<WatchLaterPage/>}/>
     <Route path="/history" element={<HistoryPage/>}/>
     <Route path="/likes" element={<LikesPage/>}/>
   </Routes>

  
   
   

  </>
}

export default App;
