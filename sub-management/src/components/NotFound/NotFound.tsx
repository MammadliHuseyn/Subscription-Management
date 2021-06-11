import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div id="wrapper">
      <div className="container-fluid " style={{ height: '100vh' }}>
        <div className="center-404">
          <div className="text-center">
            <div className="error mx-auto" data-text="404">
              404
            </div>
            <p className="lead text-gray-800 mb-5">Page Not Found</p>
            <Link to="/">&larr;Go Back </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
