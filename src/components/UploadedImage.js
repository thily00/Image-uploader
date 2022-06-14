import { useEffect, useRef } from "react";
import checkicon from "../assets/check-icon.jpg";
import showMessage from "../components/ShowMessage";

function UploadedImage({ imageUrl }) {
  const uri = `http://localhost:8080${imageUrl}`;
  const copyButton = useRef();

  useEffect(() => {
    copyButton.current.addEventListener("click", () => {
      navigator.clipboard.writeText(uri);
    });
  }, []);

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
