import React from 'react'
import styled from 'styled-components'

const PaginationWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content:center;
  max-width: 80vw;
`

const PaginationItem = styled.div`
  cursor: pointer;
  padding: 5px;
  ${props =>
    props.$active &&
    `
      font-weight: bold;
      background: #aaadaf;
      color: #fff;
    `
  }
`

export const Pagination = ({
  currentPage,
  totalPosts,
  handlePagination
}) => {
  const totalPages = Math.ceil(totalPosts / 5);
  let pagesArray = []
  for (let i = 0; i < totalPages; i++) {
    pagesArray.push(i + 1);
  }

  return (
    <PaginationWrapper>
      {
        pagesArray.map(pageNumber => {
          return (
            <PaginationItem
              key={pageNumber}
              onClick={()=>handlePagination(pageNumber)}
              $active={pageNumber === currentPage}
            >
            {pageNumber}
            </PaginationItem>
          );
        })
      }
    </PaginationWrapper>
  );
}
