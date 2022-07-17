import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store';
import { deletePhotoFromCollection, getPhotoCollection } from './photoCollectionAPI';
import { Photo, PhotoCollectionType } from './photoCollectionType';


export interface PhotoCollectionState {
    photoColletion: PhotoCollectionType,
    albumList: number[] | null,
    albumFilter: number[],
    photoModal: { url: string, title: string } | null,
    currentPage: number,
    numberPhotosOnScreen: number,
    totalPage: number | null,
    photoCollectionOnScreen: Photo[],

};

const initialState: PhotoCollectionState = {
    photoColletion: {},
    albumList: null,
    albumFilter: [],
    photoModal: null,
    currentPage: 1,
    numberPhotosOnScreen: 24,
    totalPage: 0,
    photoCollectionOnScreen: []
}

export const photoCollectionSlice = createSlice({
    name: 'photoCollettion',
    initialState,

    reducers: {

        updatePhotoCollettion: (state, action: PayloadAction<PhotoCollectionType>) => {
            state.photoColletion = action.payload;
        },

        updateCountAlbum: (state) => {
            const list = [];
            for (let nameAlbum in state.photoColletion) {
                list.push(Number(nameAlbum));
            }
            state.albumList = list
        },

        updateTheAlbumFilter: (state, action: PayloadAction<number>) => {
            const albumNumberForFilter = state.albumFilter.indexOf(action.payload);
            state.currentPage = 1;
            if (albumNumberForFilter === -1) {
                state.albumFilter = [...state.albumFilter, action.payload];

            } else {
                const newStateAlbumFilret = [...state.albumFilter];
                newStateAlbumFilret.splice(albumNumberForFilter, 1);
                state.albumFilter = [...newStateAlbumFilret];
            }
        },

        openPhotoModal: (state, action: PayloadAction<{ url: string, title: string }>) => {
            state.photoModal = action.payload;
        },

        closePhotoModal: (state) => {
            state.photoModal = null;
        },

        flipingCurrentPage: (state, action: PayloadAction<number>) => {

            if (state.currentPage === 1 && action.payload === -1) {
                state.currentPage = 1;
            }
            else if (state.currentPage === state.totalPage && action.payload === 1) {
                state.currentPage = state.totalPage;
            }
            else {
                state.currentPage = state.currentPage + action.payload
            }
        },

        updateTotalPage: (state) => {
            let countPhoto = 0;
            if (!state.albumFilter.length) {
                for (let album in state.photoColletion) {
                    countPhoto += state.photoColletion[album].length;
                }
                state.totalPage = Math.ceil(countPhoto / state.numberPhotosOnScreen);
            } else {
                for (let photo of state.photoCollectionOnScreen) {
                    countPhoto += 1
                }
                state.totalPage = Math.ceil(countPhoto / state.numberPhotosOnScreen);
            }
        },

        filterAlbum: (state) => {
            const collectionOnScreen = [];
            for (let album in state.photoColletion) {
                collectionOnScreen.push(...state.photoColletion[album].filter(photo => {
                    if (state.albumFilter.length) {
                        return state.albumFilter.includes(photo.albumId)
                    } else {
                        return true
                    }
                }))
            }
            state.photoCollectionOnScreen = collectionOnScreen;
        },
    }
});

export const {
    updatePhotoCollettion,
    updateCountAlbum,
    updateTheAlbumFilter,
    openPhotoModal,
    closePhotoModal,
    flipingCurrentPage,
    updateTotalPage,
    filterAlbum,
} = photoCollectionSlice.actions;

export const fetchPhotoCollection = (): AppThunk => (
    dispatch,
) => {
    getPhotoCollection()
        .then(result => {
            const collection = new Map();
            result.forEach((photo: Photo) => {
                if (collection.has(photo.albumId)) {
                    const albumCollection = [...collection.get(photo.albumId), photo];
                    collection.set(photo.albumId, albumCollection);
                } else {
                    collection.set(photo.albumId, [photo])
                }
            });
            const photoCollection = Object.fromEntries(collection.entries());
            dispatch(updatePhotoCollettion(photoCollection));
            dispatch(updateCountAlbum());
        });
}

export const fetchDeletePhotoFromCollection = (photoId: number, numberAlbum: number): AppThunk => (
    dispatch,
) => {
    deletePhotoFromCollection(photoId, numberAlbum);
    dispatch(fetchPhotoCollection());
}

export default photoCollectionSlice.reducer;