import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FC } from 'react';
import './App.css';
import TextContainer from './components/TextContainer';
import ImageContainer from './components/ImageContainer';
const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TextContainer/>} />
        <Route path='/showimages' element={<ImageContainer  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
