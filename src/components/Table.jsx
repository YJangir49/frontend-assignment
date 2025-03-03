import React from "react";
import { calculateRowNumber } from "../utils/helper";

const Table = ({ projects, currentPage, recordPerPage }) => {
  return (
    <table role="table" aria-live="polite">
      <thead>
        <tr>
          <th scope="col" abbr="Serial Number">
            S.No.
          </th>
          <th scope="col" abbr="Percentage Funded">
            Percentage Funded
          </th>
          <th scope="col" abbr="Amount Pledged">
            Amount Pledged
          </th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => (
          <tr key={index} role="row" tabIndex={0}>
            <td role="cell">
              {calculateRowNumber(currentPage, recordPerPage, index)}
            </td>
            <td
              role="cell"
              aria-label={`Funded ${project["percentage.funded"]}%`}
            >
              {project["percentage.funded"]}
            </td>
            <td
              role="cell"
              aria-label={`Pledged amount ${project["amt.pledged"]}`}
            >
              {project["amt.pledged"]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
