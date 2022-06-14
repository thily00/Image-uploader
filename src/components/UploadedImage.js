import { useEffect, useRef } from "react";

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
      <h1 className="uploader__title">Uploaded Successfully!</h1>
      <img src={uri} className="uploaded__image" alt="uploaded" />

      <div className="imageurl">
        <input type="text" value={uri} />
        <button ref={copyButton}>Copy Link</button>
      </div>
    </>
  );
}

export default UploadedImage;
