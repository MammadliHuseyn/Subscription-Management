const Navbar = () => {
  return (
    <nav
      className="
        navbar navbar-expand navbar-light
        bg-white
        topbar
        mb-4
        static-top
        shadow
      "
    >
      <form
        className="
          d-none d-sm-inline-block
          form-inline
          mr-auto
          ml-md-3
          my-2 my-md-0
          mw-100
          navbar-search
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
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow mx-1">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="messagesDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-envelope fa-fw"></i>
            <span className="badge badge-danger badge-counter">7</span>
          </a>
        </li>
        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="d-none d-lg-inline text-gray-600 small">
              Douglas McGee
            </span>
            <button className="ml-1 btn btn-primary">LogOut</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
