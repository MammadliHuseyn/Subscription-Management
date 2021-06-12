import Modal from "./Modal";
import React, { Dispatch, SetStateAction } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

interface IProps {
  onCurChange: Dispatch<SetStateAction<number>>;
  curPageCount: number;
}

const Search: React.FC<IProps> = ({ onCurChange, curPageCount }) => {
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
            w-75
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
          <InputLabel htmlFor="Items-Per-page">Items per page</InputLabel>
          <FormControl>
            <Select
              native
              onChange={(e: any) => { onCurChange(e.target.value) }}
              value={curPageCount}
              inputProps={{
                name: "Items Per page",
                id: "Items-Per-page",
              }}
            >
              <option value={8}>8</option>
              <option value={12}>12</option>
              <option value={16}>16</option>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};
export default Search;
