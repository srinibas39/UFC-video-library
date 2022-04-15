import { useNavigate } from "react-router-dom"
import "./Hero.css"

export const Hero = () => {
    const navigate = useNavigate()
    return <div className="hero">
        <div>

            <h2>WELCOME TO</h2>
            <img src={"https://assets-global.website-files.com/5cf5a026c170934c311c121c/5cf5ae865c5c341607d12b99_White-H-Logo-p-500.png"}></img>
            <h3>Unlock MORE of your inner combat sports fan with UFC Fight Pass! Fighting is what we live for. And no one brings you MORE live fights, new shows, and events across multiple combat sports from around the world. With a never-ending supply of fighting in every discipline, there’s always something new to watch. Leave it to the world’s authority in MMA to bring you the Ultimate 24/7 platform for MORE combat sports, UFC Fight Pass!</h3>
            <button onClick={() => navigate("/signup")}>SIGN UP</button>
        </div>
    </div>
}