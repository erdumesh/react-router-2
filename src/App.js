import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Post from './components/pages/Post'
import PostDetail from './components/pages/PostDetail'
import Layout from './components/Layout'
import PostLayout from './components/PostLayout'
function App() {
  return (
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="post" element={<PostLayout />}>
                <Route path=":category" element={<PostDetail />} />
                <Route index element={<Post />} />
            </Route>
        </Route>
        <Route path="*" element={<h1>404 Error Page Not Found</h1>} />
      
    </Routes>
   </BrowserRouter>
    
  );
}

export default App;
