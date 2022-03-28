// import { upload } from "@testing-library/user-event/dist/upload";
import axios from "axios"
import { useState } from "react";
import classes from './ExcelUploadComponent.module.css';

function ExcelUploadComponent () {

    // function refreshPage() {
    //     window.location.reload(false);
    // }

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [Uploaded, setUploaded] = useState(false);
    const [NotUploaded, setNotUploaded] = useState(false);


    const saveFile = (e) => {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    };

    const uploadFile = async (e) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", fileName);
      try {
        const res = await axios.post(
          "https://lydio-backend-app.herokuapp.com/api/excel/upload",
          // "http://localhost:2800/api/excel/upload",
          formData
        );
        if (res.data.message === 'successfully-uploaded'){
            setUploaded(true)
            setNotUploaded(false)
            // refreshPage();
            // console.log(res.data.message);
        }
      } catch (err) {
        // if (res.data.message == 'fail-to-import-data-into-database'){
        //     console.log('donneeeeee')
        //     setUploaded(false)
        //     setNotUploaded(true)
        //     console.log(res.data.message);
        // }
        // else if (res.data.message == 'could-not-upload-the-file'){
        //     console.log('donneeeeee')
        //     setUploaded(false)
        //     setNotUploaded(true)
        //     console.log(res.data.message);
        // }
        // console.log(err);
        setUploaded(false)
        setNotUploaded(true)
      }
    };
     

    return (
        <div className={classes.upload}>
            <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Sélectionnez le fichier excel!</label>
            <input type="file" className="form-control" id="formFile"  onChange={saveFile} />
            <button className="btn--flat" onClick={uploadFile}> Télécharger </button>
        </div>
          {/* <label htmlFor="formFile" className="form-label">Default file input example</label>
          <input type="file"   onChange={saveFile} />
          <button className="btn" onClick={uploadFile}>Télécharger</button> */}
          { Uploaded &&  <p> Le téléchargement a réussi </p> }
          { NotUploaded &&  <p> Une erreur est survenue. Merci de vous assurer que le fichier se termine par .xlsx </p> }
        </div>
      );
}

export default ExcelUploadComponent;