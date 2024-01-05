import { createContext, useState ,useEffect} from 'react'
import './App.css'
import FileForm from './components/FileForm'
import LatestImage from './components/LatestImage'
import axios from 'axios'

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

export const AppContext = createContext(null);

function App() {
  const [latestPost, setLatestPost] = useState(AppContext)

  const posts = async() => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/projects");
      console.log(res.data.image_url);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    posts();
  },[]);

  return (
   <AppContext.Provider value={{latestPost, setLatestPost}}>
   <div>
    <FileForm />
    <LatestImage />
   </div>
    </AppContext.Provider>
  )
}

export default App
