import Aside from "../Aside/Aside";
import Navbar from "../Navbar/Navbar";
import Pagination from "./Pagination";

const Main = () => {
  return (
    <div id="page-top">
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div className="container">
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
                <a
                  href="#"
                  className="
                  d-sm-inline-block
                  btn btn-sm btn-primary
                  shadow-sm
                "
                >
                  <i className="fa-sm text-white-50"></i> Create Subscription
                </a>
              </div>
              <div className="row">
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{ width: "18rem;" }}>
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{ width: "18rem;" }}>
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{ width: "18rem;" }}>
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{ width: "18rem;" }}>
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{ width: "18rem;" }}>
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{ width: "18rem;" }}>
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{ width: "18rem;" }}>
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{ width: "18rem;" }}>
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <br />
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
