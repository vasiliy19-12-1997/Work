import { useAppSelector } from "../../store/hooks";
import { Album } from "./album/album";
import styles from "./albumFilter.module.scss";


export function AlbumFilter() {
    const albumList = useAppSelector(state => state.photoCollettion.albumList);
    
    return (
        <div
            className={styles.albumFilter}>
            {albumList?.map(
                (albumNamber, index) =>
                    <Album key={index} albumNumber={albumNamber} />
            )}
        </div>

    )
}