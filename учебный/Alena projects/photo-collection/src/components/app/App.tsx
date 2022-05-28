import { AlbumFilter } from '../albumFilter/albumFilter';
import { PhotoModal } from '../photoModal/photoModal';
import { PhotoCollection } from '../photoCollection/photoCollection';
import styles from './App.module.scss';
import { PageCollectionFlipper } from '../pageCollectionFlipper/pageCollectionFlipper';


function App() {
  return (
    <div className={styles.app}>
      <PageCollectionFlipper />
      <PhotoModal />
      <AlbumFilter />
      <PhotoCollection />
    </div>
  );
}

export default App;
