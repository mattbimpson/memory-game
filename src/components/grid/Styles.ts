export const styles = {
  container(height: number) {
    return {
      height: `${height}px`,
      overflow: 'hidden'
    }
  },
  grid: {
    height: '100%',
    backgroundColor: 'gray'
  },
  imageStyle: {
    objectFit: 'contain' as 'contain',
    height: '100%'
  },
  selectedTile: {
    //display: 'contents',
    border: '1px solid red'
  },
  tile: {
    border: '1px solid blue'
  },
  hidden: {
    display: 'none'
  }
};
