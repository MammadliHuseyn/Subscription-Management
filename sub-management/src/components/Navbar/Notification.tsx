import axios from 'axios';
import React from 'react';
import { baseUrl } from '../../Api/baseUrl';
import { NotificationItem } from './NotificationItem';

export interface INotification {
    context: string;
    hasSeen: Boolean;
    id: number;
    name: string;
    subscriptionId: number;
    time: string;
    userId: number;
}

export const Notification: React.FC<{ userId: number }> = ({ userId }) => {
    const [isNotificationOpen, setIsNotificationOpen] = React.useState<Boolean>(false);
    const [notifications, setNotifications] = React.useState<Array<INotification>>([]);
    const handleOpen = () => {
        setIsNotificationOpen(!isNotificationOpen);
        resetNotf();
    }
    const notificationSeenCount = () => {
        let count = 0
        notifications.forEach(notf => {
            if (!notf.hasSeen) {
                count++;
            }
        })
        return count;
    }
    const resetNotf = () => {
        axios.post(`${baseUrl}/api/notifications/reset?userId=${userId}`);
    }
    React.useEffect(() => {
        axios.get(`${baseUrl}/api/notifications/simple?userId=${userId}&limit=${5}`)
            .then(({ data }) => setNotifications(data.second))
    }, [userId]);
    return (
        <li className="nav-item dropdown no-arrow mx-1 show">
            <button className="nav-link dropdown-toggle notification__button"
                id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"
                onClick={handleOpen}>
                <i className="fas fa-bell fa-fw"></i>
                <span className="badge badge-danger badge-counter notification__count">{notificationSeenCount()}</span>
            </button>
            <div className={`dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in ${isNotificationOpen ? "show" : ""}`} aria-labelledby="alertsDropdown">
                <h6 className="dropdown-header">
                    Alerts Center
                </h6>
                {notifications.map(notf =>
                    <NotificationItem
                        key={notf.id}
                        notf={notf} />
                )}
            </div>
        </li>
    )
}
