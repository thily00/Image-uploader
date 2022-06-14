import { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import UploadedImage from "./components/UploadedImage";
import { Toaster } from "react-hot-toast";

import "./App.css";

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
      <Toaster />
    </div>
  );
}

export default App;
