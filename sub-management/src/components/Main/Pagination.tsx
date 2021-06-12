import { Dispatch, SetStateAction } from "react";

interface IProps {
  maxCount: number;
  curPage: number;
  onPageChange: Dispatch<SetStateAction<number>>;
}

const Pagination: React.FC<IProps> = ({ maxCount, curPage, onPageChange }) => {
  return (
    <div className="col-12">
      <div className="d-flex justify-content-center">
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item active">
              <button className="page-link"
                disabled={curPage === 0 && true}
                onClick={() => {
                  if (curPage !== 0) {
                    onPageChange(curPage - 1)
                  }
                }}>
                Previous
              </button>
            </li>
            {
              Array.from(Array(maxCount).keys()).map(count =>
                <li className={`page-item ${count === curPage ? 'active' : ''}`}
                  key={count}
                  onClick={() => onPageChange(count)}>
                  <button className="page-link" >
                    {count + 1}
                  </button>
                </li>
              )
            }
            <li className="page-item active">
              <button className="page-link"
                disabled={curPage === maxCount-1 && true}
                onClick={() => {
                  if (curPage !== maxCount) {
                    onPageChange(curPage + 1);
                  }
                }}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
