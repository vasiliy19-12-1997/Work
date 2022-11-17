import React from "react";
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
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
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
