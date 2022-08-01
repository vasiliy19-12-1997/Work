import React from "react";
import s from './Bar.module.scss'

import { observer } from 'mobx-react-lite';
function Bar() {
  return( 
     <div className={s.Bar}>
      
       
        <button
        aria-label="Menu"
        className={s.BarMenu}
        />
        <h3
        className={s.BarHeader}
        >To do</h3>
      
        <input type="text" 
        className={s.BarInput}
        />
    
       
        <button
        className={s.BarSettings}
        aria-label="Settings"
        />
        <button
        className={s.BarQuestion}
        aria-label="Question"
        />
        <button
        className={s.BarNewFeatures}
        aria-label="NewFeatures"
        />
        <button
        className={s.BarProfile}
        aria-label="Profile"
        />
       

    </div>
        
    );
}
export default observer(Bar)