import { useEffect, useState, useRef } from "react";
import ProgressBar from "./ProgressBar";
import imagePlaceholder from "../assets/image.svg";
import axios from "axios";

function ImageUploader({ setImageUrl }) {
  const [loader, setLoader] = useState(false);

  const dropArea = useRef();
  const input = useRef();
  const chooseButton = useRef();

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

    chooseButton.current.addEventListener("click", () => {
      input.current.click();
    });

    input.current.addEventListener("change", () => {
      UploadImage(input.current.files[0]);
    });
  }, []);

  const UploadImage = async (file) => {
    setLoader(true);
    const formData = new FormData();
    formData.append("file", file, file.name);
    await axios
      .post("http://localhost:8080/upload", formData)
      .then((res) => {
        res.data.response.msg == "file uploaded" &&
          setImageUrl(res.data.response.imageUrl);
        console.log(res.data.response.imageUrl);
      })
      .catch((err) => {
        console.error(err);
      });
    setLoader(false);
  };

  return !loader ? (
    <>
      <h1 className="uploader__title">Upload your image</h1>
      <p className="uploader__subTitle">File should be Jpeg, Png,...</p>
      <div className="drag-area" ref={dropArea}>
        <img src={imagePlaceholder} alt={imagePlaceholder} />
        <p>Drag & Drop your image here</p>
        <input type="file" ref={input} hidden />
      </div>
      <p>Or</p>
      <button ref={chooseButton}>Choose File</button>
    </>
  ) : (
    <ProgressBar />
  );
}

export default ImageUploader;
