import React, { useState } from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import { styles } from './Styles';
import { ImagesService } from '../../services/ImagesService';

export const GridComponent: React.FC<any> = (props) => {

  const { characters, onFinish } = props;
  const items = mapCharactersToGridItems(characters);
  const [itemState, setItemState] = useState([...items]);
  const initialMatches: any = [];
  const [matches, setMatches] = useState(initialMatches);

  const height = window.innerHeight;
  const cellHeight = (height / 6) - 5;

  function mapCharactersToGridItems(characters: any) {
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
    for (const selection of currentSelected) {
      if (selection.gridRef === item.gridRef) return;
    }
    if (currentSelected.length === 2) return;

    // Update the state to include the newly selected card
    const newState = itemState.map((x: any) => (x.gridRef === item.gridRef) ? { ...x, selected: true } : x);
    setItemState(newState);
    const selected = newState.filter((x: any) => x.selected);
    if (selected.length === 2) {
      if (selected[0].id === selected[1].id) {
        setMatches([...matches, item.id]);
        if (isGameFinished()) {
          return;
        }
      }

      // Reset the state
      setTimeout(() => {
        setItemState([...items]);
      }, 2000);
    }
  };

  function isGameFinished() {
    if (matches.length === 16) {
      setTimeout(() => {
        setTimeout(() => {
          const characters = ImagesService.getCharacters();
          setItemState(mapCharactersToGridItems(characters));
        }, 500);
        setTimeout(() => {
          const characters = ImagesService.getCharacters();
          setItemState(mapCharactersToGridItems(characters));
        }, 1000);
        setTimeout(() => {
          const characters = ImagesService.getCharacters();
          setItemState(mapCharactersToGridItems(characters));
        }, 1500);
        setTimeout(() => {
          const characters = ImagesService.getCharacters();
          setItemState(mapCharactersToGridItems(characters));
        }, 2000);
        setTimeout(() => {
          setMatches([]);
          onFinish();
        }, 2500);
      }, 1000);
      
      return true;
    }
  }

  return (
    <>
      <div style={styles.container(height)}>
        <GridList
          style={styles.grid}
          cellHeight={cellHeight}
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
      </div>
    </>
  )
};

export default GridComponent;
