import  Search from "./Search";
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
              <Search/>
              <div className="row">
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{width: '18rem'}}>
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{ width: '18rem' }}>
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{ width: '18rem' }}>
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{ width: '18rem' }}>
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{ width: '18rem' }}>
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{ width: '18rem' }}>
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{ width: '18rem' }}>
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
