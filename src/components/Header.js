import React from "react";

function Header({ logInEnable, uploadUser }) {
    return (
        <>
            <h1 className="header">Easel
                <div className="log-in-header">
                    {logInEnable ? `Welcome Back, ${uploadUser}`: null}
                </div>       
            </h1>
        </>
    )
}

export default Header