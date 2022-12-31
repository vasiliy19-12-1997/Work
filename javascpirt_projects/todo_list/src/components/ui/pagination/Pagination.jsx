import React from "react";
import MyButton from "./../myButton/MyButton";
import { usePagination } from "../../hooks/usePagination";
const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = usePagination(totalPages);
  return (
    <div>
      {pagesArray.map((page) => (
        <MyButton onClick={() => changePage(page)} key={page}>
          {page}
        </MyButton>
      ))}
    </div>
  );
};

export default Pagination;
