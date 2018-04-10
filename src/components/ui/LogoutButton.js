import React from 'react'

const LogoutButton = ({
    logout = f => f
}) => {

    const handleLogout = (e) => {
        console.log('handle logout');
        logout();
    }

    return (
        <div>
            <button onClick={(e) => handleLogout(e)}>
                Logout</button>
        </div>
    )
}

export default LogoutButton;
