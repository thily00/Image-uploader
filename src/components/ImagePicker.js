import { useEffect, useRef } from "react";
import imagePlaceholder from "../assets/image.svg";
import toast from "react-hot-toast";
import axios from "axios";

function ImagePicker({ setImageUrl, setLoader }) {
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
  });

  const UploadImage = async (file) => {
    setLoader(true);
    if (file["type"].split("/")[0] === "image") {
      const formData = new FormData();
      formData.append("file", file, file.name);
      await axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/upload`, formData)
        .then((res) => {
          res.data.response.msg === "file uploaded" &&
            setImageUrl(res.data.response.imageUrl);
          res.data.response.msg === "No file uploaded" &&
            toast.error("Aucun fichier téléchargé !");
        })
        .catch((err) => {
          console.log("erreur");
          err.message === "Network Error"
            ? toast.error("Erreur réseau !")
            : toast.error("Veillez vérifier votre connexion et réessayer");
        });
    } else {
      toast.error("Le fichier téléchargé n'est pas une image ");
    }

    setLoader(false);
  };

  return (
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
  );
}

export default ImagePicker;
