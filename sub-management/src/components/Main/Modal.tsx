import React from "react";
import { DURATION_UNIT, ISubscriptionCreateForm } from "../../types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import InputLabel from "@material-ui/core/InputLabel";
import { useDispatch } from "react-redux";
import { addSubscription, getSubscriptions, } from "../../store/subscription/actions";
import Swal from "sweetalert2";
import moment from "moment";
import { Animated } from "react-animated-css";

interface IProps {
  userId: number;
  curPage: number;
  pageSize: number;
}

const Modal: React.FC<IProps> = ({ userId, curPage, pageSize }) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const NewSubSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    price: Yup.string().required("Required"),
    lastPaymentDay: Yup.string().required("Required"),
  });

  const initialValue: ISubscriptionCreateForm = React.useMemo(() => {
    return {
      name: "",
      active: true,
      price: 1,
      hasNotification: false,
      duration: {
        unit: DURATION_UNIT.DAY,
        value: 1,
      },
      userId: userId,
      lastPaymentDay: "",
    };
  }, [userId]);

  return (
    <div className="d-flex justify-content-end mb-4 mt-4">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <span className="font-weight-bold mx-1">+</span> Subscription
      </Button>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValue}
            validationSchema={NewSubSchema}
            onSubmit={newSub => {
              newSub.hasNotification = Boolean(newSub.hasNotification);
              newSub.duration.value = Number(newSub.duration.value);
              newSub.lastPaymentDay += ` ${moment().format("HH:mm:ss")}`;
              addSubscription(userId, newSub)(dispatch)
                .then(() => {
                  Swal.fire("Subscribed successfully", "", "success");
                  handleClose();
                })
                .then(() => getSubscriptions(userId, curPage, pageSize)(dispatch))
                .catch(() => {
                  Swal.fire("Can not subscribed", "", "error");
                  handleClose();
                });
            }}>
            {({ errors, touched }) => (
              <Form className="form-group modal-forms">
                <InputLabel shrink htmlFor="name">
                  Name
                </InputLabel>
                <Field
                  name="name"
                  className="form-control"
                  id="name"
                  list="defaultNames"
                  autoComplete="off" />
                <datalist id="defaultNames">
                  <option value="Netflix" />
                  <option value="Youtube" />
                  <option value="Twitch" />
                  <option value="Spotify" />
                  <option value="Apple music" />
                </datalist>
                {errors.name
                  && touched.name
                  ? <Animated animationIn="shake" animationOut="fadeOut" isVisible={true}><div className="error-validation">{errors.name}</div></Animated>
                  : null}
                <InputLabel shrink htmlFor="age-native-label-placeholder">
                  Price ($)
                </InputLabel>
                <Field
                  name="price"
                  type="number"
                  className="form-control"
                  placeholder="Price" />
                {errors.price
                  && touched.price
                  ? <Animated animationIn="shake" animationOut="fadeOut" isVisible={true}><div className="error-validation">{errors.price}</div></Animated>
                  : null}
                <div className="d-flex justify-content-between ">
                  <div className="w-75">
                    <InputLabel shrink htmlFor="age-native-label-placeholder">
                      duration time
                    </InputLabel>
                    <Field
                      name="duration.value"
                      className="form-control"
                      placeholder="duration time" />
                  </div>
                  <div>
                    <InputLabel shrink htmlFor="age-native-label-placeholder">
                      duration
                    </InputLabel>
                    <Field
                      style={{
                        border: "none;",
                        borderColor: "#ced4da",
                        padding: "7px",
                      }}
                      name="duration.unit"
                      component="select">
                      {Object.keys(DURATION_UNIT).map((dur) => (
                        <option value={dur}>{dur}</option>
                      ))}
                    </Field>
                  </div>
                </div>
                <InputLabel shrink htmlFor="age-native-label-placeholder">
                  Notifications
                </InputLabel>
                <Field
                  style={{
                    border: "none;",
                    borderColor: "#ced4da",
                    padding: "7px",
                  }}
                  className="w-100"
                  name="hasNotification"
                  component="select">
                  <option value={1}>Send me notifications</option>
                  <option value={0}>No notifications</option>
                </Field>
                <br />
                <br />
                <InputLabel shrink htmlFor="age-native-label-placeholder">
                  Last Payment Day
                </InputLabel>
                <Field
                  style={{
                    border: "none;",
                    borderColor: "#ced4da",
                    outline: "none",
                    padding: "7px",
                  }}
                  className="w-50 form-control t-center"
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  type="date"
                  name="lastPaymentDay"
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }} />
                {errors.lastPaymentDay
                  && touched.lastPaymentDay
                  ? <Animated animationIn="shake" animationOut="fadeOut" isVisible={true}><div className="error-validation">{errors.lastPaymentDay}</div></Animated>
                  : null}
                <br />
                <button type="submit" className="btn btn-success">
                  Subscribe
                </button>
              </Form>
            )}
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default Modal;
