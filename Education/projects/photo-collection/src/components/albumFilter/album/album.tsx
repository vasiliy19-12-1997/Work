import { useAppDispatch } from "../../../store/hooks";
import { updateTheAlbumFilter } from "../../../store/photoCollectionSlice";
import styles from "./album.module.scss";

type Props = { albumNumber: number }

export function Album({ albumNumber }: Props) {
    const dispatch = useAppDispatch();

    return (
        <div>
            <input
                id={`${albumNumber}`}
                type="checkbox"
                className={styles.input} />

            <label
                htmlFor={`${albumNumber}`}
                className={styles.album}
                onClick={() => dispatch(updateTheAlbumFilter(albumNumber))}>
                
                <span>
                    Альбом {albumNumber}
                </span>
            </label>

        </div>




    )
}