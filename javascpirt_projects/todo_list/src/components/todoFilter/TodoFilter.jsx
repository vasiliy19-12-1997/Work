import React from "react";
import MyInput from "./../ui/myInput/MyInput";
import MySelect from "./../ui/mySelect/MySelect";

const TodoFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Write selections..."
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <MySelect
          value={filter.sort}
          onChange={(selectedSort) =>
            setFilter({ ...filter, sort: selectedSort })
          }
          options={[
            { value: "title", name: "on title" },
            { value: "body", name: "on body" },
          ]}
        />
      </div>
    </div>
  );
};

export default TodoFilter;
