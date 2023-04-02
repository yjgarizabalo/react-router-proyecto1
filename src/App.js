import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Blog } from './Blog';
import { BlogPost } from './BlogPost';
import { About } from './About';
import { Menu } from './Menu';


function App() {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<p>Pagina No encontrada</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
