import moment from 'moment'
import React from 'react'
import { INotification } from './Notification'

interface IProps {
    notf: INotification,
    setNotfSeen: any;
}

export const NotificationItem: React.FC<IProps> = ({ notf, setNotfSeen }) => {
    return (
        <div className={`dropdown-item d-flex align-items-center ${notf.hasSeen ? 'notf__seen' : 'notf__not-seen'}`} onClick={() => setNotfSeen(notf.id)}>
            <div className="mr-3">
                <div className="icon-circle bg-warning mx-2">
                    <i className="fas fa-exclamation-triangle text-white"></i>
                </div>
            </div>
            <div>
                <div className={`small ${notf.hasSeen ? 'text-gray-500' : ''}`}>{moment(notf.time).fromNow()}</div>
                <div className={`${notf.hasSeen ? 'text-gray-500' : ''}`}>{notf.context}</div>
            </div>
        </div>
    )
}
