const Pagination = () => {
  return (
    <div className="col-12">
      <div className="d-flex justify-content-center">
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item">
              <a href="/" className="page-link" >
                Previous
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                1
              </a>
            </li>
            <li className="page-item active">
              <a href="/" className="page-link">
                2 <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link" >
                3
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link" >
                4
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link" >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
