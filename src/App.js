import "./App.css";
import ImageUploader from "./components/ImageUploader";

function App() {
  return (
    <div className="App">
      <div className="uploader">
        <h1 className="uploader__title">Upload your image</h1>
        <p className="uploader__subTitle">File should be Jpeg, Png,...</p>
        <ImageUploader />
      </div>
    </div>
  );
}

export default App;
