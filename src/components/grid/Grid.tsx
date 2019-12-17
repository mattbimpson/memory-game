import React, { useState } from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import { styles } from './Styles';

export const GridComponent: React.FC<any> = (props) => {

  const { characters } = props;
  const items = mapCharactersToGridItems();
  const [itemState, setItemState] = useState([...items]);
  const initialMatches: any = [];
  const [matches, setMatches] = useState(initialMatches);

  function mapCharactersToGridItems() {
    return characters.map((x: any, i: number) => {
      return { id: x.id, image: x.image, selected: false, gridRef: i }
    });
  }

  function cardVisible(item: any) {
    let show = item.selected;
    for (const x of matches) {
      if (x === item.id) {
        show = true;
      }
    }
    return show;
  }

  const tileClicked = (item: any) => {
    // Don't allow more clicks if 2 cards already selected
    const currentSelected = itemState.filter((x: any) => x.selected);
    if (currentSelected.length === 2) return;

    // Update the state to include the newly selected card
    const newState = itemState.map((x: any) => (x.gridRef === item.gridRef) ? { ...x, selected: true } : x);
    setItemState(newState);
    const selected = newState.filter((x: any) => x.selected);
    if (selected.length === 2) {
      if (selected[0].id === selected[1].id) {
        setMatches([...matches, item.id]);
      }

      // Reset the state
      setTimeout(() => {
        setItemState([...items]);
      }, 2000);
    }
  };

  return (
    <>
      <GridList
        style={{ backgroundColor: 'gray' }}
        cellHeight={160}
        cols={6}>
        {
          itemState.map(
            (item: any, i: number) => 
              <GridListTile
                key={i}
                onClick={() => {tileClicked(item)}}
                style={cardVisible(item) ? styles.selectedTile : styles.tile}>
                <img src={item.image} alt="game character"
                  style={cardVisible(item) ? styles.imageStyle : styles.hidden} />
              </GridListTile>
          )
        }
      </GridList>
    </>
  )
};

export default GridComponent;
