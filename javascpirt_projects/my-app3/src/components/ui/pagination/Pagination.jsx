import React from "react";
import { getPagesAray } from "../../../utils/page";
import s from "./Pagination.module.scss";
const Pagination = ({ totalPages, changePage, page }) => {
  let pagesArray = getPagesAray(totalPages);
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
