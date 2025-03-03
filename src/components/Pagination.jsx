import React from "react";
import usePagination from "../hooks/usePagination";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = usePagination({ currentPage, totalPages });

  return (
    <nav
      className="pagination"
      role="navigation"
      aria-labelledby="pagination-heading"
    >
      <span className="page-info">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="pagination-btn"
        disabled={currentPage === 1}
        aria-disabled={currentPage === 1}
        aria-label="Go to previous page"
        onClick={() => onPageChange(currentPage - 1)}
      >
        &#8592; Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`pagination-btn ${currentPage === page ? "active" : ""}`}
          aria-current={currentPage === page ? "page" : undefined}
          aria-label={`Go to page ${page}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="pagination-btn"
        disabled={currentPage === totalPages}
        aria-disabled={currentPage === totalPages}
        aria-label="Go to next page"
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next &#8594;
      </button>
    </nav>
  );
};

export default Pagination;
