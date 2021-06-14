import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DURATION_UNIT, ISubscription, ISubscriptionUpdateForm } from "../../types";
import InputLabel from "@material-ui/core/InputLabel";
import { Formik, Form, Field } from "formik";
import { deleteSubscription, getSubscriptions, updateSubscription } from "../../store/subscription/actions";
import { useDispatch } from "react-redux";
import { Animated } from "react-animated-css";
import Swal from "sweetalert2";
import * as Yup from "yup";
import moment from "moment";


interface IProps {
  sub: ISubscription;
  curPage: number;
  pageSize: number;
}

export const SubItem: React.FC<IProps> = ({ sub, curPage, pageSize }) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateSubSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    price: Yup.string().required("Required")
  });

  const initialValue: ISubscriptionUpdateForm = React.useMemo(() => {
    return {
      name: sub.name,
      active: sub.active,
      price: sub.price,
      hasNotification: sub.hasNotification,
      duration: {
        ...sub.duration
      },
      lastPaymentDay: sub.lastPaymentDay,
    };
  }, [sub.active, sub.duration, sub.hasNotification, sub.name, sub.price, sub.lastPaymentDay]);

  const deleteSub = () => {
    deleteSubscription(sub.userId, sub.id)(dispatch)
      .then(() => {
        handleClose();
        Swal.fire('Deleted successfully!', '', 'success');
      })
      .then(() => getSubscriptions(sub.userId, curPage, pageSize)(dispatch))
      .catch(() => {
        handleClose();
        Swal.fire('Can not deleted!', 'Uncaught error...', 'error');
      })
  }

  const imgHandler = () => {
    const lowerCasedName = sub.name.toLowerCase().trim();
    const defaults = ['apple music.jpg', 'netflix.jpg', 'spotify.png', 'twitch.jpg', 'youtube.png'];
    let result = "subscription.png";
    defaults.forEach(def => {
      if (def.includes(lowerCasedName)) {
        result = def;
      }
    });
    return result;
  }
  const momentHandler = () => {
    return moment(sub.nextPaymentDay).diff(moment(), 'days');
  }
  return (
    <>
      <div className="col-xl-3 col-md-6 mb-4 p-0" onClick={handleClickOpen}>
        <div className="card card-imgs zoom" style={{ width: "18rem", cursor: 'pointer' }}>
          <img className="card-img-top "
            src={`${process.env.PUBLIC_URL}/img/${imgHandler()}`}
            alt="Card cap" />
          <div className="d-flex info">
            <span className="me-1">Payment day comes in</span>
            {momentHandler() > 0
              ?
              <span className="font-weight-bold">{momentHandler()} days . . .</span>
              :
              <span className="font-weight-bold">Expired . . . </span>
            }
          </div>
        </div>
      </div>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent className="p-3">
          <Formik
            initialValues={initialValue}
            validationSchema={updateSubSchema}
            onSubmit={updatedSub => {
              updatedSub.hasNotification = Boolean(updatedSub.hasNotification);
              updatedSub.duration.value = Number(updatedSub.duration.value);
              updateSubscription(sub.userId, sub.id, updatedSub)(dispatch)
                .then(() => {
                  Swal.fire("Updated Successfully", "", "success");
                  handleClose();
                })
                .then(() => getSubscriptions(sub.userId, curPage, pageSize)(dispatch))
                .catch(() => {
                  Swal.fire("Can not updated", "Uncaught error", "error");
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
                <button type="submit" className="btn btn-success">
                  Update Subscription
                </button>
              </Form>
            )}
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteSub} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
