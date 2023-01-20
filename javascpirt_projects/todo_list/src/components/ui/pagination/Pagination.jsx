import React from "react";
import MyButton from "./../myButton/MyButton";
import { usePagination } from "../../hooks/usePagination";
import s from "./Pagination.module.scss";
const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = usePagination(totalPages);
  return (
    <div className={s.Pagination}>
      {pagesArray.map((page) => (
        <MyButton
          className={s.PaginationButton}
          onClick={() => changePage(page)}
          key={page}
        >
          {page}
        </MyButton>
      ))}
    </div>
  );
};

export default Pagination;
