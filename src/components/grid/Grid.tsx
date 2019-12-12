import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';

import crash from '../../images/crash.png';
import spyro from '../../images/spyro.png';
import mario from '../../images/mario.webp';
import link from '../../images/link.jpg';
import mgs from '../../images/mgs.jpg';
import duke from '../../images/duke.webp';
import lara from '../../images/lara.jpg';
import freeman from '../../images/freeman.jpg';
import kong from '../../images/kong.png';
import chunli from '../../images/chunli.jpg';
import hitman from '../../images/hitman.jpg';
import nico from '../../images/nico.jpg';
import sonic from '../../images/sonic.png';
import pikachu from '../../images/pikachu.png';
import pacman from '../../images/pacman.jpeg';
import rayman from '../../images/rayman.webp';
import ellie from '../../images/ellie.jpg';
import fallout from '../../images/fallout.jpg';

export const GridComponent: React.FC<any> = () => {
  const characters = [
    { id: 0, image: crash },
    { id: 1, image: spyro },
    { id: 2, image: mario },
    { id: 3, image: link },
    { id: 4, image: mgs },
    { id: 5, image: duke },
    { id: 6, image: lara },
    { id: 7, image: freeman },
    { id: 8, image: kong },
    { id: 9, image: chunli },
    { id: 10, image: hitman },
    { id: 11, image: nico },
    { id: 12, image: sonic },
    { id: 13, image: pikachu },
    { id: 14, image: pacman },
    { id: 15, image: rayman },
    { id: 16, image: ellie },
    { id: 17, image: fallout }
  ];

  const items = [...characters, ...characters];

  const imageStyle = {
    objectFit: 'contain' as 'contain',
    height: '100%'
  };

  return (
    <>
      <GridList
        cellHeight={160}
        cols={6}>
        {
          items.map(
            (item: any, i: number) => 
              <GridListTile key={item.id}>
                <img src={item.image} alt="image" style={imageStyle}  />
              </GridListTile>
          )
        }
      </GridList>
    </>
  )
};

export default GridComponent;
