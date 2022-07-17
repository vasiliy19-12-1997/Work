import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import s from '../../styles/Header.module.css';
function Header({clicks}){
    return(
        <div  className={s.root}>Todo list</div>
    )
}
export default Header;