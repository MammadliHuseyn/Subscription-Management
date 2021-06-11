import React from 'react';
import Search from "./Search";
import Navbar from "../Navbar/Navbar";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { ISelector } from "../../types/useSelectorType";
import { getSubscriptions } from '../../store/subscription/actions';

const Main = () => {
  const subscriptions = useSelector((state: ISelector) => state.SubReducer);
  const user = useSelector((state: ISelector) => state.UserReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getSubscriptions(user.id)(dispatch);
  }, [])
  return (
    <div id="page-top">
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div className="container">
              <Search />
              <div className="row">
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card cap"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{width: '18rem'}}>
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card cap"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{ width: '18rem' }}>
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card cap"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{ width: '18rem' }}>
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card cap"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{ width: '18rem' }}>
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card cap"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{ width: '18rem' }}>
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card cap"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{ width: '18rem' }}>
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card cap"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4 " id="card">
                  <div className="card" style={{ width: '18rem' }}>
                    <img
                      className="card-img-top"
                      src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                      alt="Card cap"
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
