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
      <MySelect
        value={filter.sort}
        onChange={(selectSort) => setFilter({ ...filter, sort: selectSort })}
        defaultValue={"Sort by"}
        options={[
          { value: "title", name: "On title" },
          { value: "body", name: "On body" },
        ]}
      />
    </div>
  );
};

export default TodoFilter;
