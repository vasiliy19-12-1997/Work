import React from "react";

const pages = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export default pages;
