import React from "react";
import s from "./MySelect.module.scss";
const MySelect = ({ defaultValue, options, value, onChange }) => {
  return (
    <div className={s.MySelect}>
      <select
        className={s.MySelectSelect}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option className={s.MySelectSelectOption} disabled>
          {defaultValue}
        </option>
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
