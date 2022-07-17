export type CurrentState = {};

export type Landscape = Photo[];


export type PhotoCollectionType = Record<string,Photo[]>;

export type Photo = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}


