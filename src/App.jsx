import React, { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import Table from "./components/Table";
import fetchProjectsData from "./api/fetchProjectsData";
import { DEFAULT_DATA_PER_PAGE } from "./utils/config";
import { getCurrentPageRecords, getTotalPages } from "./utils/helper";

const INITIAL_PAGE = 1;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

  const fetchAndUpdateProjects = async () => {
    const projects = await fetchProjectsData();
    setProjects(projects);
    setLoading(false);
  };

  const totalPages = getTotalPages(projects, DEFAULT_DATA_PER_PAGE);
  const currentPageRecords = getCurrentPageRecords(
    projects,
    currentPage,
    DEFAULT_DATA_PER_PAGE
  );

  useEffect(() => {
    fetchAndUpdateProjects();
  }, []);

  return (
    <div className="container">
      <header>
        <h1 id="page-title">Highly Rated Kickstarter Projects</h1>
      </header>

      <main aria-labelledby="page-title">
        {loading ? (
          <p role="status" aria-busy="true">
            Loading project records...
          </p>
        ) : (
          <section aria-live="polite">
            <Table
              projects={currentPageRecords}
              currentPage={currentPage}
              recordPerPage={DEFAULT_DATA_PER_PAGE}
              aria-describedby="table-description"
            />
            <p id="table-description" hidden>
              This table lists Kickstarter projects along with their funding
              details.
            </p>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </section>
        )}
      </main>
    </div>
  );
};

export default App;
