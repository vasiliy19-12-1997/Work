const photoCollection = "http://jsonplaceholder.typicode.com/photos";

export function getPhotoCollection() {
    const promise = fetch(photoCollection)
        .then(collection => collection.json());
    return promise
}


export function deletePhotoFromCollection(photoId: number,  numberAlbum: number) {
    const promise = fetch(photoCollection + "/" + photoId)
    .then(response => {
        if(response.ok){
            alert(`фото ${photoId} из альбома ${numberAlbum} успешно удалено, но гоблины не дают вам этого показать - ух негодники`)
        }
    })
    .catch(error => alert("гномы не смогли удалить столь чудное фото"));
    return promise
}