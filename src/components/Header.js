import React from "react";

function Header({ logInEnable, uploadUser }) {

    return (
        <>
            <h1 className="header">Easel
            <p className="header-tag">An Image Sharing App</p>
                <div className="log-in-header">
                    {logInEnable ? 
                    <>
                        <div>Welcome Back, {uploadUser}</div>
                        <form>
                            <button className="logout">Log Out</button>
                        </form>
                    </>
                    : null}
                </div>       
            </h1>
        </>
    )
}

export default Header