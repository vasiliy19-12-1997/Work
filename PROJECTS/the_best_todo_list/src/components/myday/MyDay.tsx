import { observer } from "mobx-react";
import React from "react";
import s from './MyDay.module.scss'


function MyDay() {
  return (
    <div className={s.MyDay}>
      <h3
      className={s.MyDayHeader}
      >My day</h3>
      <button
      className={s.MyDaySort}
      aria-label="Sort"
      />
      <button
      className={s.MyDayOffers}
      aria-label="Offers"
      />
    </div>
    );
}
export default MyDay;