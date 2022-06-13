import { useEffect, useRef } from "react";
import imagePlaceholder from "../assets/image.svg";

function ImageUploader() {
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
      dropArea.current.classList.remove("active");
      console.log(e.dataTransfer.files[0]);
    });
  }, []);

  return (
    <>
      <div className="drag-area" ref={dropArea}>
        <img src={imagePlaceholder} />
        <p>Drag & Drop your image here</p>
        <input type="file" hidden></input>
      </div>
      <p>Or</p>
      <button>Choose File</button>
    </>
  );
}

export default ImageUploader;
