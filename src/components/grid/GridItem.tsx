import React from 'react';
import { styles } from './Styles';

export const GridItem: React.FC<any> = (props) => {
  
  const { character, selected, onClick } = props;

  return (
    <>
      <div style={selected ? styles.selectedTile : {} }>
        <img src={character.image} alt="image" style={styles.imageStyle} />
      </div>
    </>
  );
};
