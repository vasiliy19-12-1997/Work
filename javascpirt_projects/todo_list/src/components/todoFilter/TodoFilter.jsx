import React from "react";
import MyInput from "../ui/myInput/MyInput";
import MySelect from "../ui/mySelect/MySelect";

const TodoFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="sort by"
        options={[
          { value: "title", name: "On title" },
          { value: "completed", name: "On completed" },
          { value: "body", name: "onBody" },
        ]}
      />
    </div>
  );
};

export default TodoFilter;
