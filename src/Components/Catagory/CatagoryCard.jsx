import React from 'react'

const CatageoryCard = ({ catageory }) => {
    function showC1(cover, c1, c2, btn) {
        document.getElementById(cover).style.transform = "scale(1)";
        document.getElementById(c1).style.color = "white";
        document.getElementById(c2).style.color = "white";
        document.getElementById(btn).style.transform = "scaleY(1)";
    }

    function hideC1(cover, c1, c2, btn) {
        document.getElementById(cover).style.transform = "scale(0)";
        document.getElementById(c1).style.color = "black";
        document.getElementById(c2).style.color = "black";
        document.getElementById(btn).style.transform = "scaleY(0)";
    }
    return (
        <div className="catagoery-box" onMouseEnter={() => showC1(catageory.id, catageory.menId1, catageory.menId2, catageory.buttonId)}
            onMouseLeave={() => hideC1(catageory.id, catageory.menId1, catageory.menId2, catageory.buttonId)}>
            <div className="c-content">
                <h2 id={catageory.menId1}>{catageory.name}</h2>
                <p id={catageory.menId2}>{catageory.season}</p>
                <button id={catageory.buttonId}>SHOP NOW</button>
            </div>
            <img src={catageory.image} alt="" />
            <div className="blue-cover" id={catageory.id}></div>
        </div>
    )
}

export default CatageoryCard;
