import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ProjectPage from './pages/projects';

import './static/css/main.scss'; // all of our styles

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/projects' element={<ProjectPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
