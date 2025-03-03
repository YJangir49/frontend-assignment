export const calculateRowNumber = (currentPage, recordPerPage, index) =>
  (currentPage - 1) * recordPerPage + index + 1;

export const getTotalPages = (projects, recordPerPage) =>
  Math.ceil(projects.length / recordPerPage);

export const getCurrentPageRecords = (records, currentPage, recordPerPage) =>
  records.slice((currentPage - 1) * recordPerPage, currentPage * recordPerPage);
