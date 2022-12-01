import React from "react";
import { usePagination } from "../../hooks/usePagination";
import s from "./Pagination.module.scss";
const Pagination = ({ totalPages, changePage }) => {
  let pagesArray = usePagination(totalPages);
  return (
    <div className={s.Pagination}>
      {pagesArray.map((t) => (
        <span
          onClick={() => changePage(t)}
          key={t}
          className={s.PaginationSpan}
        >
          {t}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
