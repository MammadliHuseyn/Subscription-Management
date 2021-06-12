import React from 'react';
import { ISubscription } from '../../types';

export const SubItem: React.FC<{ sub: ISubscription }> = ({ sub }) => {
    return (
        <div className="col-xl-3 col-md-6 mb-4 " id="card">
            <div className="card" style={{ width: "18rem" }}>
                <img
                    className="card-img-top"
                    src="https://insideios.com/wp-content/uploads/2021/03/netflix.jpg"
                    alt="Card cap" />
                <div className="d-flex justify-content-evenly">
                    <span>{sub.name}</span>
                    <span>{`${sub.duration.value} ${sub.duration.unit}` }</span>
                </div>
            </div>
        </div>
    )
}
