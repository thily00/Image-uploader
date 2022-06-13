import { useEffect, useState, useRef } from "react";
import imagePlaceholder from "../assets/image.svg";
import ProgressBar from "../components/ProgressBar";

function ImageUploader() {
  const [loader, setLoader] = useState(false);
  const dropArea = useRef();

  useEffect(() => {
    dropArea.current.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropArea.current.classList.add("active");
    });

    dropArea.current.addEventListener("dragleave", () => {
      dropArea.current.classList.remove("active");
    });

    dropArea.current.addEventListener("drop", (e) => {
      e.preventDefault();
      UploadImage(e.dataTransfer.files[0]);
    });
  }, []);

  const UploadImage = (file) => {
    console.log(file);
    setLoader(true);
  };

  return !loader ? (
    <>
      <h1 className="uploader__title">Upload your image</h1>
      <p className="uploader__subTitle">File should be Jpeg, Png,...</p>
      <div className="drag-area" ref={dropArea}>
        <img src={imagePlaceholder} />
        <p>Drag & Drop your image here</p>
        <input type="file" hidden></input>
      </div>
      <p>Or</p>
      <button>Choose File</button>
    </>
  ) : (
    <>
      <h1 className="uploader__title">Uploading...</h1>
      <ProgressBar />
    </>
  );
}

export default ImageUploader;
