import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { STORAGE_ACTIONS, userActionsWithStore } from '../../store/user/storage';
import { IUser } from '../../types';



export const UserCard = () => {
    const user: IUser = React.useMemo(() => {
        return userActionsWithStore(undefined, STORAGE_ACTIONS.GET_USER_FROM_STORAGE);
    }, [])
    return (
        <Card className="user-card">
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {user.name} {user.surname}
                </Typography>
                <Typography variant="h6" component="h6" style={{display:"flex", fontWeight: "bold", fontSize: "14px"}}>
                    Email: {user.email}
                </Typography>
            </CardContent>
        </Card>
    )
}
