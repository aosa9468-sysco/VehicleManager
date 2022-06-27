const Pagination = ({ vehiclesPerPage, totalVehicles, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalVehicles / vehiclesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <navbar>
      <nav aria-label="align-middle">
        <ul class="pagination justify-content-end">
          <li class="page-item">
            <span className="btn btn-warning-outline" aria-hidden="true">
              &laquo;
            </span>
          </li>
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              &nbsp;
              <button className="btn btn-dark" onClick={() => paginate(number)}>
                {number}
              </button>
            </li>
          ))}
          <li className="page-item">
            <span className="btn btn-warning-outline" aria-hidden="true">
              &raquo;
            </span>
          </li>
        </ul>
      </nav>
    </navbar>
  );
};

export default Pagination;
