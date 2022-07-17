import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closePhotoModal } from "../../store/photoCollectionSlice";
import styles from "./photoModal.module.scss";

export function PhotoModal() {
    const photo = useAppSelector(state => state.photoCollettion.photoModal);
    const modalRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const closeModal = (event: any) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                dispatch(closePhotoModal());
            }
        }
        window.addEventListener('click', closeModal);
        return () => {
            window.removeEventListener('click', closeModal);
        }
    }, [photo]);

    if (!photo) {
        return null
    }

    return ReactDOM.createPortal(
        <div
            className={styles.darkeningScreen}>
            <div
                className={styles.photoModale}
                ref={modalRef}>
                <img
                    src={photo?.url}
                    alt="" />
                <h3>
                    {photo?.title}
                </h3>
            </div>

        </div>
        , document.body);
}