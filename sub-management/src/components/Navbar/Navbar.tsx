import React from "react";
import { useDispatch } from "react-redux";
import { UserCard } from "./UserCard";
import { useHistory } from "react-router";
import { logOutUser } from "../../store/user/actions";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { STORAGE_ACTIONS, userActionsWithStore } from "../../store/user/storage";

const Navbar = () => {
  const user = React.useMemo(() => {
    return userActionsWithStore(undefined, STORAGE_ACTIONS.GET_USER_FROM_STORAGE);
  }, [])
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
        userActionsWithStore(undefined, STORAGE_ACTIONS.DELETE_USER_FROM_STORAGE);
      }
    });
  };
  return (
    <>
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
               
                  <span className="badge badge-danger badge-counter">7</span>
                </a>
              </li>
              <li className="flex-between nav-item dropdown no-arrow mx-2 user-name">
                <p className="d-none d-lg-inline text-gray-600 p-0">
                  <img src="https://iconape.com/wp-content/png_logo_vector/user-circle.png" 
                  alt="user-logo" 
                  width="30" height="30"
                  className="mx-2"/>
                  {`${user.name} ${user.surname}`}
                </p>
                <UserCard />
              </li>
              <div id="log-out">
                <button className="ml-1 btn btn-primary" onClick={handleLogOut}>
                  LogOut
                </button>
              </div>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
