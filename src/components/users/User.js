import React, { Component } from 'react';
import UserItem from './UserItem';

export class User extends Component {
    state = {
    users: [
        {
            id: '1',
            login: 'mojombo',
            avatar_url: 'http://avatars0.githubusercontent.com/u/1?v=4',
        },
        {
            id: '2',
            login: 'ken',
            avatar_url: 'http://avatars0.githubusercontent.com/u/1?v=4',
        },
        {
            id: '3',
            login: 'mopo',
            avatar_url: 'http://avatars0.githubusercontent.com/u/1?v=4',
        },
    ]
}



    
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default User
