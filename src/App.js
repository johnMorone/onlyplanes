import './App.css';
import {Post} from "./post";
import {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => true);

    const shibariMessage = <div><span>Sorry babe, I'm all </span><a href="https://www.youtube.com/channel/UCXuqSBlHAE6Xw-yeJA0Tunw" target="_blank">#tiedUp</a></div>
    const stickMessage = <div>
        <span>My flight stick is hard</span><i> and </i><span>I'm excited to see you</span>
        <a href="https://www.lttstore.com/" target="_blank">#lttstore</a>
    </div>
    const gimpMessage = <div><a href="https://www.youtube.com/channel/UCXuqSBlHAE6Xw-yeJA0Tunw" target="_blank">Sub2LTT</a></div>
    const videoMessage = <div><span>Announcement vid {"<3"}</span><br />
    Visit <a href="https://onlyfans.com/reallinustechtips" target="_blank">reallinustechtips</a></div>

    const lttVid = <div className="video-responsive">
        <iframe width="470" height="220" src="https://www.youtube.com/embed/dJwjqZZgcWk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
        />
    </div>;

    const logoSrc = isDarkMode ? "/OnlyPlanes_logo_light.svg" : "/OnlyPlanes_logo.svg";

    return (
    <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <div className="content">
            <div className="header"><img src={logoSrc} /></div>
            <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={80}
                className="dark-mode-toggle"
            />
            <Post message={videoMessage} numLikes={169000000} timePosted={35}>{lttVid}</Post>
            <Post message={shibariMessage} imageSrc="/shibari.png" numLikes={69} timePosted={49} />
            <Post message={stickMessage} imageSrc="/stick.jpg" numLikes={13.3} timePosted={58} />
            <Post message={gimpMessage} imageSrc="/gimp.jpg" numLikes={420} timePosted={69} />
        </div>
    </div>
    );
}

export default App;
