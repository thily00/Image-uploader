import { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import UploadedImage from "./components/UploadedImage";
import { Toaster } from "react-hot-toast";

function App() {
  const [imageUrl, setImageUrl] = useState(null);

  return (
    <div className="App">
      <div className="uploader">
        {imageUrl != null ? (
          <UploadedImage imageUrl={imageUrl} />
        ) : (
          <ImageUploader setImageUrl={setImageUrl} />
        )}
      </div>
      <footer>
        created by <a href="https://github.com/thily00">Thily</a> -
        devChallenges.io
      </footer>
      <Toaster />
    </div>
  );
}

export default App;
