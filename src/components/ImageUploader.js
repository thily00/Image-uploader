import { useState } from "react";
import ImagePicker from "./ImagePicker";
import ProgressBar from "./ProgressBar";

function ImageUploader({ setImageUrl }) {
  const [loader, setLoader] = useState(false);

  return !loader ? (
    <ImagePicker setImageUrl={setImageUrl} setLoader={setLoader} />
  ) : (
    <ProgressBar />
  );
}

export default ImageUploader;
