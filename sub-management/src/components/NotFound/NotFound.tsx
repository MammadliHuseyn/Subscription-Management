const NotFound = () => {
  return (
    <div id="wrapper">
      <div className="container-fluid d-flex">
        <div className="text-center">
          <div className="error mx-auto" data-text="404">
            404
          </div>
          <p className="lead text-gray-800 mb-5">Page Not Found</p>
          <a href="index.html">&larr; Back to Main</a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
