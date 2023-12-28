import React,{useContext,useEffect} from 'react'
import { AppContext } from '../App'

function LatestImage() {
    const {latestPost, setLatestPost} = useContext(AppContext)
    
    useEffect(() => {
        fetch("http://localhost:3000/api/v1/latest")
        .then((response) => response.json())
        .then((data) => {
            setLatestPost(data.image_url);
        })
        .catch((error) => console.error(error));
    },[latestPost]);


    return (
    <div>
        <img src={latestPost} alt='latest post'
         className='latest-image'/>
    </div>
  )
}

export default LatestImage