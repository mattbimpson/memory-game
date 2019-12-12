import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';

export const GridComponent: React.FC<any> = () => {
  const items = [
    { id: 0, image: '' },
    { id: 1, image: '' },
    { id: 2, image: '' },
    { id: 3, image: '' },
    { id: 4, image: '' },
    { id: 5, image: '' },
    { id: 6, image: '' },
    { id: 7, image: '' },
    { id: 8, image: '' },
    { id: 9, image: '' },
    { id: 10, image: '' },
    { id: 11, image: '' },
    { id: 12, image: '' },
    { id: 13, image: '' },
    { id: 14, image: '' },
    { id: 15, image: '' },
    { id: 16, image: '' }
  ];

  return (
    <>
      <GridList
        cellHeight={160}
        cols={4}>
        {
          items.map(
            (item: any) => <GridListTile><img src={item.image} alt="image" /></GridListTile>
          )
        }
      </GridList>
    </>
  )
};

export default GridComponent;
