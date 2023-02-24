import React, {useState, useEffect, useRef} from 'react'
import toast from 'react-hot-toast'
import MetaTags from '../Components/MetaTags'
import { firestore, STATE_CHANGED, storage } from '../lib/firebase'
import uuid from 'react-uuid'
import ReactHtmlParser from 'react-html-parser';



const Admin = () => {

     const [Title, setTitle] = useState('')
     const [downloadURL, setDownloadURL] = useState(null);
     const [IMGURL, setIMGURL] = useState(null)
     const [H3, setH3] = useState('')
     const [P, setP] = useState('')
     const [HTMLContent, setHTMLContent] = useState('')

     const GetImg = async (e) => {
      if(e.target.files && e.target.files.length > 0){
        setIMGURL(URL.createObjectURL(e.target.files[0]))
        const file = Array.from(e.target.files)[0];
          const extension = file.type.split('/')[1];
      
          // Makes reference to the storage bucket location
          const ref = storage.ref(`uploads/${uuid()}/${Date.now()}.${extension}`);
      
          // Starts the upload
          const task = ref.put(file);
          toast.success("Has subido correctamente la imagen, puedes visualizarla en más abajo.")
      
          // Listen to updates to upload task
          task.on(STATE_CHANGED, () => {      
            task
              .then(() => ref.getDownloadURL())
              .then((url) => {
                setDownloadURL(url);
              });
          });
     }
    }

    const Add = (v) => {
      var aux = HTMLContent
      if(v && H3 != "") {
        setHTMLContent(`${aux}<h3>${H3}</h3>`)
        setH3("")
        toast.success("Has añadido el encabezado")
      }
      else if(!v && P != ""){
        setHTMLContent(`${aux}<p>${P}</p>`)
        setP("")
        toast.success("Has añadido el texto")
      }
    }


     const Submit = async () => {
               const Doc = firestore.doc(`blog/${uuid()}`)
               const batch = firestore.batch();
               batch.set(Doc, { 
               title: Title,
               img: downloadURL,
               content: HTMLContent 
           });
      
          await batch.commit().then(
            toast.success("Está subido"),
            setH3(""),
            setP(""),
            setTitle(""),
            setIMGURL(""),
            setHTMLContent("")
            )
     }

     

  return <>
  <MetaTags title="Admin"/>
  <div className='landing blog-form'>
          <input value={Title} onChange={(e) => setTitle(e.target.value)} placeholder="Escribe aquí el título del artículo"/>
          <label className="btn">
            📸 Escoge la imágen de portada del artículo
            <input type="file" onChange={(e) => GetImg(e)} accept="image/x-png,image/gif,image/jpeg" />
          </label>
          <input value={H3} onChange={(e) => setH3(e.target.value)} placeholder="Añade un encabezado"/>
          <button className='btn-primary' onClick={() => Add(1)}>Añadir encabezado</button>
          <textarea rows={5} value={P} onChange={(e) => setP(e.target.value)} placeholder="Añade un texto"/>
          <button className='btn-primary' onClick={() => Add(0)}>Añadir texto</button>
       <button className='btn-primary' onClick={Submit}>Submit</button>
  </div>
  <div className='blog-article'>
    <h1>{Title.length ? Title : "Aquí va el título del blog"}</h1>
    <p className='by'>Por: Grace</p>
  <img src={IMGURL} alt={IMGURL ? "Imagen" : "Aquí va la imagen central"}/>
    {
      ReactHtmlParser(HTMLContent)
    }
  </div>
  </>
}

export default Admin