import React from 'react'
import { motion } from "framer-motion";

function Section({ title, description, backgroundImg, OrderBtn, ViewBtn }) {

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
            <motion.div
                className="ItemText"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1>{title}</h1>
                <p>{description}</p>
            </motion.div>

            <motion.div
                className="ButtonGrp"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <div className="OrderBtn">{OrderBtn}</div>
                <div className="ViewBtn">{ViewBtn}</div>
            </motion.div>

            <motion.div
                className="DownArrow"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <i className="fa-solid fa-chevron-down"></i>
            </motion.div>

        </div>
    )
}

export default Section;