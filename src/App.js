import ImageOne from "./components/ImageOne";
import ImageThree from "./components/ImageThree";
import ImageTwo from "./components/ImageTwo";
import TextBox from "./components/TextBox";
import "./App.css";


function App() {
  return (
    <div className="App">
      <ImageOne  />
      <TextBox />
      <ImageTwo />
      <TextBox />
      <ImageThree />
    </div>
  );
}

export default App;
