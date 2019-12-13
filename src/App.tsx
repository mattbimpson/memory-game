import React from 'react';
import './App.css';
import Grid from './components/grid/Grid';
import { ImagesService } from './services/ImagesService';

const App: React.FC = () => {

  return (
    <div className="App">
      <Grid items={ImagesService.getCharacters()}/>
    </div>
  );
}

export default App;
