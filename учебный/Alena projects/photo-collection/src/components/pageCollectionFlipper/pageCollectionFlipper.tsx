import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { flipingCurrentPage } from "../../store/photoCollectionSlice";
import styles from "./pageCollectionFlipper.module.scss";
import arrow from "./arrow.png"

export function PageCollectionFlipper() {
    const dispatch = useDispatch();
    const currentPage = useAppSelector(state => state.photoCollettion.currentPage);
    const totalPage = useAppSelector(state => state.photoCollettion.totalPage);
    const numberPhotosOnScreen = useAppSelector(state => state.photoCollettion.numberPhotosOnScreen) 
    
    const isFinalPageLeft =  ( currentPage === 1 ); 
    const  isFinalPageRight = ( currentPage === totalPage ); 

    return (
        <div className={styles.pageCollectionFlipper}>
            <button
            className={isFinalPageLeft? styles.finalPage :  ''}
                onClick={() => dispatch(flipingCurrentPage(-1))}>
                <img
                    className={styles.backPage}
                    src={arrow} />
            </button>

            <span>
                {currentPage} из {totalPage}
            </span>

            <button
            className={isFinalPageRight ? styles.finalPage :  ''}
                onClick={() => dispatch(flipingCurrentPage(1))}>
                
                <img
                    src={arrow} />
            </button >
        </div>
    )
}