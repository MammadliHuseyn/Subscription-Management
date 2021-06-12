import React from 'react';
import { Link, Redirect, useHistory } from "react-router-dom";
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { IUserLoginForm } from '../../types';
import { loginUser } from '../../store/user/actions';
import { useDispatch } from 'react-redux';
import { STORAGE_ACTIONS, userActionsWithStore } from '../../store/user/storage';


export const Login = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .required('Required'),
    password: Yup.string()
      .required('Required'),
  });

  const initialValues: IUserLoginForm = React.useMemo(() => {
    return {
      username: '',
      password: '',
    }
  }, []);

  const user = React.useMemo(() => {
    return userActionsWithStore(undefined, STORAGE_ACTIONS.GET_USER_FROM_STORAGE);
  }, [])

  return !user ? (
    <section className="page-heigth">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          Welcome Studio!
                        </h1>
                      </div>
                      <Formik
                        initialValues={initialValues}
                        validationSchema={LoginSchema}
                        onSubmit={validUser => {
                          loginUser(validUser)(dispatch).then((data) => data.id ? push('/') : '');
                        }}
                      >
                        {({ errors, touched }) => (
                          <Form className="user">
                            <div className="form-group">
                              <Field
                                type="text"
                                className="form-control form-control-user"
                                aria-describedby="emailHelp"
                                placeholder="Enter User Name..."
                                name="username"
                              />
                              {errors.username && touched.username ? <div className="error-validation">{errors.username}</div> : null}
                              <br />
                            </div>
                            <div className="form-group">
                              <Field
                                type="password"
                                className="form-control form-control-user"
                                placeholder="Password..."
                                name="password"
                              />
                              {errors.password && touched.password ? <div className="error-validation">{errors.password}</div> : null}
                              <br />
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary btn-user btn-block w-50">Login
                            </button>
                          </Form>
                        )}
                      </Formik>
                      <hr />
                      <div className="text-center">
                        <Link className="small" to="/register">
                          Create an Account!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : <Redirect to="/" />;
};
