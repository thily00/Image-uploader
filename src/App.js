import { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import UploadedImage from "./components/UploadedImage";

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
    </div>
  );
}

export default App;
