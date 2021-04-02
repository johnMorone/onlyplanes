import './App.css';
import {Post} from "./post";

function App() {

    const shibariMessage = <div><span>Sorry babe, I'm all </span><a href="https://www.youtube.com/channel/UCXuqSBlHAE6Xw-yeJA0Tunw" target="_blank">#tiedUp</a></div>
    const stickMessage = <div><span>My flight stick is hard</span><i> and </i><span>I'm excited to see you</span></div>
    const gimpMessage = <div><a href="https://www.youtube.com/channel/UCXuqSBlHAE6Xw-yeJA0Tunw" target="_blank">Sub2LTT</a></div>

    const lttVid = <div className="video-responsive">
        <iframe width="470" height="220" src="https://www.youtube.com/embed/dJwjqZZgcWk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
        />
    </div>;

    return (
    <div className="App">
        <div className="header"><img src="/logo.png" /></div>
      <Post message="Announcement vid <3" numLikes={169000000} timePosted={35}>{lttVid}</Post>
      <Post message={shibariMessage} imageSrc="/shibari.png" numLikes={69} timePosted={49} />
      <Post message={stickMessage} imageSrc="/stick.jpg" numLikes={13.3} timePosted={58} />
      <Post message={gimpMessage} imageSrc="/gimp.jpg" numLikes={420} timePosted={69} />
    </div>
    );
}

export default App;
