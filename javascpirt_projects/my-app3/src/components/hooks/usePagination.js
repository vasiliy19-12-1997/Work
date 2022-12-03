import { useMemo } from "react";
export const usePagination = (totalPages) => {
  const pagination = useMemo(() => {}, [totalPages]);
  return pagination;
};
