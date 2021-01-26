import React from "react";
import styled from "styled-components";

const PaginationWrapper = styled.div`
  margin: auto;
  display: inline-flex;
  justify-content: center;
  max-width: 80vw;
  border: solid 3px #aaadaf;
  border-radius: 10px;
  padding: 5px;
`;

const PaginationItem = styled.div`
  border-radius: 8px;
  cursor: pointer;
  padding: 5px;
  ${(props) =>
    props.$active &&
    `
      font-weight: bold;
      background: #aaadaf;
      color: #fff;
    `}
`;

export const Pagination = ({ currentPage, totalPosts, handlePagination }) => {
  const totalPages = Math.ceil(totalPosts / 5);
  let pagesArray = [];
  for (let i = 0; i < totalPages; i++) {
    pagesArray.push(i + 1);
  }

  return (
    <PaginationWrapper>
      {pagesArray.map((pageNumber) => {
        return (
          <PaginationItem
            key={pageNumber}
            onClick={() => handlePagination(pageNumber)}
            $active={pageNumber === currentPage}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
    </PaginationWrapper>
  );
};
