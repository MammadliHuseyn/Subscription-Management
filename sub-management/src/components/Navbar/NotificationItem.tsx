import moment from 'moment'
import React from 'react'
import { INotification } from './Notification'

export const NotificationItem: React.FC<{ notf: INotification }> = ({ notf }) => {
    return (
        <div className="dropdown-item d-flex align-items-center" >
            <div className="mr-3">
                <div className="icon-circle bg-warning mx-2">
                    <i className="fas fa-exclamation-triangle text-white"></i>
                </div>
            </div>
            <div>
                <div className="small text-gray-500">{moment(notf.time).fromNow()}</div>
                {notf.context}
            </div>
        </div>
    )
}
