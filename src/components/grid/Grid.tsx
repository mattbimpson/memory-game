import React, { useState } from 'react';
import { GridList, GridListTile } from '@material-ui/core';

export const GridComponent: React.FC<any> = (props) => {
  const { items } = props; 

  const imageStyle = {
    objectFit: 'contain' as 'contain',
    height: '100%'
  };

  const selectedTile = {
    border: '2px solid red'
  };

  const isSelected = (gridRef: number) => {
    return selection.length <= 2 && selection.some(x => x.gridRef === gridRef);
  };

  const defaultSelection: any[] = [];
  const [selection, setSelection] = useState(defaultSelection);

  const tileClicked = (item: any, gridRef: number) => {
    setSelection([...selection, { ...item, gridRef }]);
    setTimeout(() => {
      if (selection.length === 2) {
        if ((selection[0].id > -1 && selection[1].id > -1) && selection[0].id === selection[1].id) {
          window.alert('found match!');
        }
  
        setSelection([]);
      }
    }, 100);
    
  };

  return (
    <>
      <GridList
        cellHeight={160}
        cols={6}>
        {
          items.map(
            (item: any, i: number) => 
              <GridListTile
                key={i}
                onClick={() => {tileClicked(item, i)}}
                style={isSelected(i) ? selectedTile : {} }>
                <img src={item.image} alt="image" style={imageStyle}  />
              </GridListTile>
          )
        }
      </GridList>
    </>
  )
};

export default GridComponent;
