import React, { Dispatch, SetStateAction } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Swal from "sweetalert2";
import { getSubscriptions, searchSubscriptions } from "../../store/subscription/actions";
import { useDispatch } from "react-redux";

interface IProps {
  onCurChange: Dispatch<SetStateAction<number>>;
  curPageCount: number;
  totalCount: number;
  userId: number;
  setIsSearchMode: Dispatch<SetStateAction<Boolean>>;
}

const Search: React.FC<IProps> = ({ onCurChange, curPageCount, totalCount, userId, setIsSearchMode }) => {

  const dispatch = useDispatch();
  const [inputQuery, setInputQuery] = React.useState('');
  const inputChangeHandler = (e: any) => {
    setInputQuery(e.target.value);
  }
  const handleSearch = (e: any) => {
    e.preventDefault();
    if (inputQuery.length < 1) {
      Swal.fire('Please enter at least one character', '', 'warning');
    }
    else {
      setIsSearchMode(true);
      searchSubscriptions(userId, inputQuery)(dispatch);
    }
  }
  const handleResetSearch = () => {
    setInputQuery('');
    setIsSearchMode(false);
    getSubscriptions(userId, 0, curPageCount)(dispatch);
  }
  return (
    <div className=" mb-4">
      <div className="d-flex justify-content-between align-items-center">
        <span style={{ color: '#699EA0' }}>Total: <span style={{ color: '#699EA0' }} className="font-weight-bold">{totalCount}</span> subscriptions</span>
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 w-50 navbar-search" onSubmit={handleSearch}>
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light small"
              placeholder="Search for..." aria-label="Search"
              aria-describedby="basic-addon2"
              value={inputQuery}
              onChange={inputChangeHandler} />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
                <i className="fas fa-search fa-sm"></i>
              </button>
              <button className="btn btn-primary ms-2" type="button" onClick={handleResetSearch}>
                <i className="fas fa-undo fa-sm"></i>
              </button>
            </div>
          </div>
        </form>
        <div>
          <InputLabel htmlFor="Items-Per-page">Items per page</InputLabel>
          <FormControl style={{ width: "100px" }}>
            <Select
              native
              onChange={(e: any) => { onCurChange(e.target.value) }}
              value={curPageCount}
              inputProps={{
                name: "Items Per page",
                id: "Items-Per-page",
              }}>
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
