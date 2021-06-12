import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ISubscription } from "../../types";

export const SubItem: React.FC<{ sub: ISubscription }> = ({ sub }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent className='p-3'>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
            value={sub.name}
          />
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
    </>
  );
};
