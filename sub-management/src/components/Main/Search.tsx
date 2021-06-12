import Modal from "./Modal";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      // margin: theme.spacing(1),
      maxWidth: "500px",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

const Search = () => {
  const classes = useStyles();
  const [state, setState] = React.useState<{
    age: string | number;
    name: string;
  }>({
    age: "",
    name: "hai",
  });
  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <div className=" mb-4">
      <Modal />
      <div className="d-flex justify-content-between align-items-center">
        <form
          className="
            d-sm-inline-block
            form-inline
            mr-auto
            ml-md-3
            my-2 my-md-0
            mw-100
            navbar-search
            w-50
            border
            rounded
           "
        >
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="Categories">Categories</InputLabel>
            <Select
              native
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: "Categories",
                id: "Categories",
              }}
            >
              <option aria-label="Categories" value="Categories" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};
export default Search;
