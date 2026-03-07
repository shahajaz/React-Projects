import React from 'react'

function Section({ title, description, backgroundImg, OrderBtn, ViewBtn }) {

    console.log(title, description, backgroundImg, OrderBtn, ViewBtn);

    return (
        <div
            className="Wrap"
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh"
            }}
        >
            <div className="ItemText">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            <div className="ButtonGrp">
                <div className="OrderBtn">{OrderBtn}</div>
                <div className="ViewBtn">{ViewBtn}</div>
            </div>

            <div className="DownArrow">
                <i className="fa-solid fa-chevron-down"></i>
            </div>
        </div>
    )
}

export default Section