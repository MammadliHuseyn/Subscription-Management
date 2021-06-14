import React from "react";
import { useDispatch } from "react-redux";
import { UserCard } from "./UserCard";
import { useHistory } from "react-router";
import { logOutUser } from "../../store/user/actions";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { STORAGE_ACTIONS, userActionsWithStore } from "../../store/user/storage";
import userLogo from './../../img/user-logo.png';
import { Notification } from "./Notification";
import { IUser } from "../../types";

const Navbar = () => {
  const user:IUser = React.useMemo(() => {
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
          className="navbar navbar-expand navbar-light bg-white mb-4 static-top shadow container d-flex justify-content-center justify-content-md-between">
          <div className="header-comp d-flex justify-content-between align-items-center">
            <span className="header-content font-weight-bold">Managment System</span>
            <ul className=" navbar-nav justify-content-end">
              <Notification userId={user.id}/>
              <li className="flex-between nav-item dropdown no-arrow mx-2 user-name">
                <p className="d-none d-lg-inline text-gray-600 p-0">
                  <img src={userLogo}
                    alt="user-logo"
                    width="30" height="30"
                    className="mx-2" />
                  {user.name} {user.surname}
                </p>
                <UserCard />
              </li>
              <div id="log-out">
                <button className="ml-1 btn btn-primary" onClick={handleLogOut}>
                  Log Out
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
