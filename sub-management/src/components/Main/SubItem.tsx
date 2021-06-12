import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import FormControl from "@material-ui/core/FormControl";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ISubscription } from "../../types";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { deleteSubscription, getSubscriptions } from "../../store/subscription/actions";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

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

  return (
    <>
      <div className="col-xl-3 col-md-6 mb-4 p-0" onClick={handleClickOpen}>
        <div className="card card-imgs zoom" style={{ width: "18rem" }}>
          <img
            className="card-img-top "
            src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
            alt="Card cap"
          />
          <div className="d-flex justify-content-evenly info">
            <span>{sub.name}</span>
            <span>{`${sub.duration.value} : ${sub.duration.unit}.....`}</span>
          </div>
        </div>
      </div>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent className="p-3">
          <TextField
            className="mt-2 mb-2"
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
            defaultValue={sub.name}
          />
          <TextField
            className="mt-2 mb-2"
            autoFocus
            margin="dense"
            id="price"
            label="Price"
            type="email"
            fullWidth
            defaultValue={sub.price}
          />
          <InputLabel className="mt-2 mb-2" htmlFor="age-native-simple">
            Categories
          </InputLabel>
          <FormControl fullWidth>
            <Select
              fullWidth
              native
              inputProps={{
                name: "Categories",
                id: "categorie",
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>Category1</option>
              <option value={20}>Category2</option>
              <option value={30}>Category3</option>
            </Select>
          </FormControl>
          <InputLabel className="mt-2 mb-2" htmlFor="age-native-simple">
            Has_Notification
          </InputLabel>
          <FormControl fullWidth>
            <Select
              fullWidth
              native
              inputProps={{
                name: "has_Notification",
                id: "hasNotification",
              }}
            >
              <option aria-label="None" value="Has-Notification" />
              <option value={"Yes"}>Yes</option>
              <option value={"No"}>No</option>
            </Select>
          </FormControl>
          <InputLabel className="mt-2 mb-2" htmlFor="age-native-simple">
            Duration
          </InputLabel>
          <FormControl fullWidth>
            <Select
              fullWidth
              native
              inputProps={{
                name: "has_Notification",
                id: "hasNotification",
              }}
            >
              <option aria-label="None" value="Duration" />
              <option value={"Yes"}>1</option>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Update
          </Button>
          <Button onClick={deleteSub} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
