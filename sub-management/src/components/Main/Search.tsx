import Modal from "./Modal";
import React, { Dispatch, SetStateAction } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

interface IProps {
  onCurChange: Dispatch<SetStateAction<number>>;
  curPageCount: number;
  totalCount: number;
}

const Search: React.FC<IProps> = ({ onCurChange, curPageCount, totalCount }) => {
  return (
    <div className=" mb-4">
      <div className="d-flex justify-content-between align-items-center">
        <span style={{color:'#699EA0'}}>Total: <span style={{color:'#699EA0'}} className="font-weight-bold">{totalCount}</span> subscriptions</span>
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
