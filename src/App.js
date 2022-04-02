
import { Categories } from "./components/Categories/Categories";
import { Hero } from "./components/Hero/Hero";
import { NavBar } from "./components/Navbar/Navbar";
import { VideoCard } from "./components/VideoCard/VideoCard";
import { VideoCardContainer } from "./components/VideoCardContainer/VideoCardContainer";
import "./App.css"

export const App = () => {
  return <>
    <NavBar />
    {/* <Hero/> */}
    <div class="main">
      <Categories />
      <VideoCardContainer />
    </div>
    {/* <VideoCard/> */}

  </>
}

export default App;
