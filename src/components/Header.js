import React from "react";

function Header({ logInEnable, uploadUser }) {
    return (
        <>
            <h1 className="header">Easel</h1>
            <div>
                {logInEnable ? 
                <p className="log-in-header">Welcome Back, {uploadUser}!</p> : null}
            </div>
        </>
    )
}

export default Header