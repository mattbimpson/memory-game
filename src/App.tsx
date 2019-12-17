import React, { useState } from 'react';
import './App.css';
import Grid from './components/grid/Grid';
import { ImagesService } from './services/ImagesService';

const App: React.FC = () => {

  const initialList = ImagesService.getCharacters();
  const [characters, setCharacters] = useState(initialList);

  function onFinish() {
    const shuffled = ImagesService.getCharacters();
    setCharacters(shuffled);
  }

  return (
    <div className="App">
      <Grid characters={characters} onFinish={onFinish}/>
    </div>
  );
}

export default App;
