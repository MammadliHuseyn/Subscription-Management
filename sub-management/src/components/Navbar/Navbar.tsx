import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { logOutUser } from "../../store/user/actions";
import { ISelector } from "../../types/useSelectorType";
import Swal from "sweetalert2/dist/sweetalert2.js";

const Navbar = () => {
  const user = useSelector((state: ISelector) => state.UserReducer);
  const dispatch = useDispatch();
  const { push } = useHistory();
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        logOutUser(user.id)(dispatch).then(() => push("/login"));
      }
    });
  };
  return (
    <header className="container-fluid">
    <nav
      className="
     
        navbar navbar-expand navbar-light
        bg-white
        mb-4
        static-top
        shadow
        container
        d-flex
        justify-content-center
        justify-content-md-between
      "
    >
      <div className="header-comp d-flex justify-content-between align-items-center">
        <a className="header-content">Managment System</a>
        <ul className=" navbar-nav justify-content-end">
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link"
              href="/"
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
          <li className="flex-between nav-item dropdown no-arrow">
            <a
              className="nav-link"
              href="/"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="d-none d-lg-inline text-gray-600 pr-2">
                {`${user.name} ${user.surname}`}
              </span>
            </a>
            <div id="log-out">
              <button className="ml-1 btn btn-primary" onClick={handleLogOut}>
                LogOut
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    </header>

  );
};

export default Navbar;
