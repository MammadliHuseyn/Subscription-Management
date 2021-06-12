import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    title:{
        color: "#0d6efd",
        width:"100%",
        margin:"5px 0"
    },
    widthModal:{
        width: "50%",
    }
})
const Modal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const [state, setState] = React.useState<{ age: string | number; name: string }>({
    age: '',
    name: 'hai',
  });

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };


  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <div className="d-flex justify-content-end mb-4 mt-4">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Subscription Create
      </Button>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle className={classes.widthModal}  id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="form-group modal-forms">
                <Field
                style={{width:"50%"}}
                  name="firstName"
                  className="form-control"
                  placeholder="Name"
                />
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}
                <Field
                  name="lastName"
                  className="form-control"
                  placeholder="Price"
                />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}
                <Field name="email" type="email" className="form-control" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <InputLabel shrink htmlFor="age-native-label-placeholder">
                  Age
                </InputLabel>
                <NativeSelect
                className={classes.title}
               
                  value={state.age}
                  onChange={handleChange}
                  inputProps={{
                    name: "age",
                    id: "age-native-label-placeholder",
                  }}
                >
                  <option value="">None</option>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
                <NativeSelect
                className={classes.title}
                  value={state.age}
                  onChange={handleChange}
                  inputProps={{
                    name: "age",
                    id: "age-native-label-placeholder",
                  }}
                >
                  <option value="">None</option>
                  <option value={10}>Ok</option>
                  <option value={20}>No</option>
                </NativeSelect>
                <FormHelperText>Label + placeholder</FormHelperText>
                <button className="btn btn-primary" type="submit">
                  Create
                </button>
              </Form>
            )}
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default Modal;


