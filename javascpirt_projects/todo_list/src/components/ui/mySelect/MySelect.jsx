import React from "react";
import s from "./MySelect.module.scss";
const MySelect = ({ value, onChange, options }) => {
  return (
    <div className={s.MySelect}>
      <select
        className={s.MySelectS}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option disabled defaultValue="Сортировка по"></option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
