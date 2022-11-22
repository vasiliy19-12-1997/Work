import React, { useMemo } from "react";
import MyInput from "../ui/myInput/MyInput";
import MySelect from "../ui/mySelect/MySelect";

const TodoFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search..."
      />
    </div>
  );
};

export default TodoFilter;
