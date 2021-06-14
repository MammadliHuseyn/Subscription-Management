import React from 'react';
import Search from "./Search";
import Navbar from "../Navbar/Navbar";
import Pagination from "./Pagination";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { ISelector } from "../../types/useSelectorType";
import { getSubscriptions } from '../../store/subscription/actions';
import { SubItem } from './SubItem';
import { STORAGE_ACTIONS, userActionsWithStore } from '../../store/user/storage';
import { IUser } from '../../types';
import { Animated } from 'react-animated-css';

const Main = () => {
  const dispatch = useDispatch();
  const subscriptions = useSelector((state: ISelector) => state.SubReducer);
  const user: IUser = React.useMemo(() => {
    return userActionsWithStore(undefined, STORAGE_ACTIONS.GET_USER_FROM_STORAGE);
  }, [])
  const [pageCount, setPageCount] = React.useState<number>(1); // calculated page count
  const [totalSubCount, setTotalSubCount] = React.useState<number>(10); // total count of items
  const [curPageCount, setCurPageCount] = React.useState<number>(8); // this page items count
  const [curPage, setCurPage] = React.useState<number>(0); // page of current
  const [isSearchMode, setIsSearchMode] = React.useState<Boolean>(false);
  React.useEffect(() => {
    getSubscriptions(user.id, curPage, curPageCount)(dispatch).then((pages: { pageSize: number, pageCount: number }) => {
      setPageCount(pages.pageCount);
      setTotalSubCount(pages.pageSize);
    });
  }, [dispatch, user.id, curPage, curPageCount])
  return (
    <div id="page-top">
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div className="container">
              <Modal
                userId={user.id}
                pageSize={curPageCount}
                curPage={curPage} />
              <Search
                userId={user.id}
                onCurChange={setCurPageCount}
                curPageCount={curPageCount}
                totalCount={totalSubCount}
                setIsSearchMode={setIsSearchMode} />
              <Animated animationIn="bounceInRight" animationOut="bounceOutLeft" isVisible={true} >
                <div className="row">
                  {subscriptions.map(sub =>
                    <SubItem
                      sub={sub}
                      key={sub.id}
                      curPage={curPage}
                      pageSize={curPageCount} />
                  )}
                </div>
              </Animated>
              <br />
              {(!isSearchMode && totalSubCount > 8)
                &&
                <Pagination
                  maxCount={pageCount}
                  curPage={curPage}
                  onPageChange={setCurPage} />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
