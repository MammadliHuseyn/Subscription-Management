import { ISubscription, IUser } from "./index";

export interface ISelector {
    SubReducer: Array<ISubscription>;
    UserReducer: IUser
}