import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import React from 'react';
import { IUserRegisterForm } from '../../types';
import { useDispatch } from 'react-redux';
import { registerUser } from './../../store/user/actions';
import { useHistory } from 'react-router';

const Register = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const RegisterSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    surname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const initialValues: IUserRegisterForm = React.useMemo(() => {
    return {
      username: '',
      email: '',
      name: '',
      password: '',
      surname: '',
      active: true
    }
  }, []);


  return (
    <section className="page-heigth bg-register">
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Create an Account!
                    </h1>
                  </div>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={RegisterSchema}
                    onSubmit={validUser => {
                      registerUser(validUser)(dispatch).then((data) => data.id ? push('/') : '');
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form className="user">
                        <div className="form-group row">
                          <div className="col-sm-4 mb-3 mb-sm-0">
                            <Field
                              type="text"
                              className="form-control form-control-user my-3"
                              placeholder="Username"
                              name="username"
                            />
                            {errors.username && touched.username ? <div className="error-validation">{errors.username}</div> : null}
                          </div>
                          <div className="col-sm-4 mb-3 mb-sm-0">
                            <Field
                              type="text"
                              className="form-control form-control-user my-3"
                              placeholder="Name"
                              name="name"
                            />
                            {errors.name && touched.name ? <div className="error-validation">{errors.name}</div> : null}
                          </div>
                          <div className="col-sm-4">
                            <Field
                              type="text"
                              className="form-control form-control-user my-3"
                              placeholder="Surname"
                              name="surname"
                            />
                            {errors.surname && touched.surname ? <div className="error-validation">{errors.surname}</div> : null}
                          </div>
                        </div>
                        <div className="form-group">
                          <Field
                            type="email"
                            className="form-control form-control-user my-3"
                            placeholder="Email Address"
                            name="email"
                          />
                          {errors.email && touched.email ? <div className="error-validation">{errors.email}</div> : null}
                        </div>
                        <div className="form-group row">
                          <div className="offset-12 col-sm-12 mb-3 mb-sm-0">
                            <Field
                              type="password"
                              className="form-control form-control-user my-3"
                              placeholder="Password"
                              name="password"
                            />
                            {errors.password && touched.password ? <div className="error-validation">{errors.password}</div> : null}
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"> Register Account
                          </button>
                        <hr />
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
