import React from "react";
import MyInput from "../ui/myInput/MyInput";
import MySelect from "../ui/mySelect/MySelect";
const PostFilter = ({ filter, setFilter }) => {
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
          //event возвращает выбраннуб уже опцию
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Сортировка по"
        options={[
          { value: "title", name: "По заголовку" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
