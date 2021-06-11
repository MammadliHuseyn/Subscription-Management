import Modal from './Modal';
const Search = () => {
  return (
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <form
        className="
            d-sm-inline-block
            form-inline
            mr-auto
            ml-md-3
            my-2 my-md-0
            mw-100
            navbar-search
            w-75
            border
            rounded
           "
      >
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-light border-0 small"
            placeholder="Search for..."
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fas fa-search fa-sm"></i>
            </button>
          </div>
        </div>
      </form>
    <Modal/>
    </div>
  );
};
export default Search;
