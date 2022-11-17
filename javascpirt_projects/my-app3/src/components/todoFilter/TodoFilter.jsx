import React, { useMemo } from "react";
import MyInput from "../ui/myInput/MyInput";
import MySelect from "../ui/mySelect/MySelect";

const TodoFilter = ({ filter, setFilter }, todos, props, setTodos) => {
  const sortedTodos = useMemo((sort) => {
    if (sort) {
      setTodos([...props.todos].sort((a, b) => a[sort].localeCompare(b[sort])));
    }
  }, []);
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
