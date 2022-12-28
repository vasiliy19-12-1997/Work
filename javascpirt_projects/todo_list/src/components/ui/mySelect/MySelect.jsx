import React from "react";

const MySelect = ({ value, onChange }) => {
  return (
    <div>
      <div>
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          <option disabled defaultValue="Сортировка по"></option>
          <option>on title</option>
          <option>on body</option>
        </select>
      </div>
    </div>
  );
};

export default MySelect;
