import React, { useState } from "react";

const style = {
    padding: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)'
}

const DwikyChandraCard = () => {
    const [data, setData] = useState({
        name: "Dwiky Chandra Hidayat",
        facebook_link: "https://www.facebook.com/dwikychandra.hidayat",
        github_link: "https://github.com/dwikychandra21"
    });

    return(
        <div className="DwikyCard" style={style}>
             <h1>{data.name}</h1>
             <p>Facebook Link : {data.facebook_link}</p>
             <p>Github Link : {data.github_link}</p>
        </div>
    )
}

export default DwikyChandraCard;