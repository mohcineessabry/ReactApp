import { useEffect, useState } from "react"
export default function Effect() {
    const [photos , setphotos] = useState([])

    useEffect(
        ()=>{
            fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res)=> res.json())
            .then((data)=> setphotos(data))
            return ()=>{return false}
            } , []
            
    );



    return(
        <>
        {
            photos.map (
               photo =>(
                <>
                <div className="posts">
                <h3> {photo.title}</h3> 
                <img src={photo.thumbnailUrl} alt="Logo" />
                </div>

               </>) 
            )
        }
        </>
    )
}
