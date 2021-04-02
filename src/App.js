import logo from './logo.svg';
import './App.css';
import {Post} from "./post";

function App() {
  return (
    <div className="App">
      <Post message="test" numLikes={420} timePosted={69} />
    </div>
  );
}

export default App;
