import React from "react";
import { useAppDispatch } from "../../../store/hooks";
import deleteIcon from "./delete.png";
import { fetchDeletePhotoFromCollection, openPhotoModal } from "../../../store/photoCollectionSlice";
import styles from "./photo.module.scss";

type Props = { thumbnailUrl: string, numberAlbum: number, url: string, title: string, id: number }

export function Photo({ thumbnailUrl, numberAlbum, url, title, id }: Props) {
    const dispatch = useAppDispatch();

    function openModal(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        dispatch(openPhotoModal({ url, title }));
        event.stopPropagation();
    }

    return (
        <div className={styles.photo}>
            <div className={styles.informationWindow}>
                <div className={styles.title}>
                    <span>
                        Альбом: {numberAlbum}
                    </span>
                    <span>
                        Фото: {id}
                    </span>
                </div>

                <img
                    src={deleteIcon}
                    className={styles.icon}
                    onClick={() => dispatch(fetchDeletePhotoFromCollection(id, numberAlbum))} />
            </div>


            <img
                src={thumbnailUrl}
                onClick={(event) => openModal(event)} />
        </div>
    );
}