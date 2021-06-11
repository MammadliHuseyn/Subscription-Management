import Aside from "../Aside/Aside";
import Navbar from "../Navbar/Navbar";
import Pagination from "./Pagination";

const Main = () => {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Aside />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div className="container">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Subscriptions</h1>
                <a
                  href="#"
                  className="
                  d-none d-sm-inline-block
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
