import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Photo } from "./photo/photo";
import { fetchPhotoCollection, filterAlbum, updateTotalPage } from "../../store/photoCollectionSlice";
import styles from './photoCollection.module.scss';

export function PhotoCollection() {
    const dispatch = useAppDispatch();
    const photoCollection = useAppSelector(state => state.photoCollettion.photoColletion);
    const albumFilter = useAppSelector(state => state.photoCollettion.albumFilter);
    const collectionPage = useAppSelector(state => state.photoCollettion.currentPage);
    const numberPhotosOnScreen = useAppSelector(state => state.photoCollettion.numberPhotosOnScreen);
    const photoCollectionOnScreen = useAppSelector(state => state.photoCollettion.photoCollectionOnScreen);
    const finitePhotoOnScreen = numberPhotosOnScreen * collectionPage;
    const startPhotoOnScreen = finitePhotoOnScreen - numberPhotosOnScreen;
    

    useEffect(() => {
        dispatch(fetchPhotoCollection());
    }, [])

    useEffect(() => {
        dispatch(updateTotalPage());
    }, [photoCollectionOnScreen, albumFilter]);

    useEffect(() => {
        dispatch(filterAlbum());
    }, [photoCollection, albumFilter])

    return (
        <div className={styles.photoCollection}>

            {photoCollectionOnScreen.map((photo, index) => {

                if (startPhotoOnScreen <= index && index < finitePhotoOnScreen) {
                    return <Photo
                        key={photo.id}
                        thumbnailUrl={photo.thumbnailUrl}
                        numberAlbum={photo.albumId}
                        url={photo.url}
                        title={photo.title}
                        id={photo.id} />
                }
            })
            }

        </div>
    );
}