import React, { useContext } from 'react';
import Usercontext from '../context/Usercontext';

function Profile() {
    const { user } = useContext(Usercontext);

    if (!user) return <div>Please login</div>;
    return <div>Welcome {user.username} {user.password}</div>;
}

export default Profile;
