import { createContext, useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './pages/about'
import Home from './pages/Home'
import Show from './pages/Show'
import NewNote from './pages/NewNote'
import Edit from './pages/Edit'
import FileForm from './components/FileForm'
import LatestImage from './components/LatestImage'
import axios from 'axios'

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route index element={<Home />} />
//       <Route path="note" element={<Show />} />
//       <Route path="new" element={<NewNote />} />
//       <Route path="edit" element={<Edit />} />
//       <Route path="about" element={<About />} />
//     </Route>
//   )
// )

export const AppContext = createContext(null);

function App() {
  const [latestPost, setLatestPost] = useState(AppContext)

  const posts = async() => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/latest");
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
