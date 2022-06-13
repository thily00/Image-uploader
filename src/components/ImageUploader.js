import imagePlaceholder from "../assets/image.svg";

function ImageUploader() {
  return (
    <>
      <div className="drag-area">
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
