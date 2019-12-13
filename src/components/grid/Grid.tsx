import React, { useState } from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import { styles } from './Styles';

export const GridComponent: React.FC<any> = (props) => {

  const { characters } = props;
  const items = mapCharactersToGridItems();
  const [itemState, setItemState] = useState([...items]);

  function mapCharactersToGridItems() {
    return characters.map((x: any, i: number) => {
      return { id: x.id, image: x.image, selected: false, gridRef: i }
    });
  }

  const tileClicked = (item: any) => {
    const newState = itemState.map((x: any) => x.gridRef === item.gridRef ? { ...x, selected: !x.selected } : x);
    setItemState(newState);
    const selected = newState.filter((x: any) => x.selected);
    if (selected.length === 2) {
      if (selected[0].id === selected[1].id) {
        window.alert('match!');
      }

      setTimeout(() => {
        setItemState([...items]);
      }, 3000);
    }
  };

  return (
    <>
      <GridList
        cellHeight={160}
        cols={6}>
        {
          itemState.map(
            (item: any, i: number) => 
              <GridListTile
                key={i}
                onClick={() => {tileClicked(item)}}
                style={item.selected ? styles.selectedTile : {}}>
                <img src={item.image} alt="game character" style={styles.imageStyle}  />
              </GridListTile>
          )
        }
      </GridList>
    </>
  )
};

export default GridComponent;
