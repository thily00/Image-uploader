import { useEffect, useRef } from "react";
import checkicon from "../assets/check-icon.jpg";
import toast from "react-hot-toast";

function UploadedImage({ imageUrl }) {
  const uri = `http://localhost:8080${imageUrl}`;
  const copyButton = useRef();

  useEffect(() => {
    copyButton.current.addEventListener("click", () => {
      navigator.clipboard.writeText(uri);
      notify();
    });
  });

  const notify = () => toast.success("copié !");

  return (
    <>
      <img src={checkicon} className="checkIcon" alt="check icon" />
      <h1 className="uploader__title">Uploaded Successfully!</h1>
      <img src={uri} className="uploaded__image" alt="uploaded" />
      <div className="imageurl">
        <input type="text" defaultValue={uri} />
        <button ref={copyButton}>Copy Link</button>
      </div>
    </>
  );
}

export default UploadedImage;
