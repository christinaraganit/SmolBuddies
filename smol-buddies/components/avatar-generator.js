import { useState } from 'react';
import { IoColorPaletteSharp, IoImageSharp, IoShirtSharp } from 'react-icons/io5';
import { GiTopHat, GiUnderwearShorts } from 'react-icons/gi';

import pixelBackground1 from '../public/pixel_background_1.png';
import pixelBackground2 from '../public/pixel_background_2.png';
import pixelHat1 from '../public/pixel_hat_1.png';
import pixelHat2 from '../public/pixel_hat_2.png';
import monke from '../public/monke.png';
import muscleBody from '../public/muscle_body.png';
import legs from '../public/legs.png';

const backgrounds = [pixelBackground1, pixelBackground2];
const hats = [pixelHat1, pixelHat2];
const monkes = [monke];
const shirts = [muscleBody];
const pants = [legs];

export default function AvatarGenerator() {
    const [option, setOption] = new useState("COLOR");
    const [listOfOptions, setListOfOptions] = new useState(monkes);
    
    const setSelection = (e, choice) => {
        const isSelected = e.currentTarget.className === 'selected';
        if (!isSelected) {
            setOption(choice);
            const divs = document.getElementsByClassName('selected');
            for (let i = 0; i < divs.length; i++) {
                divs[i].classList.remove('selected');
            }
            e.currentTarget.className = 'selected';
            if (choice === 'COLOR') {
                setListOfOptions(monkes);
            } else if (choice === 'BACKGROUND') {
                setListOfOptions(backgrounds);
            } else if (choice === 'HAT') {
                setListOfOptions(hats);
            } else if (choice === 'SHIRT') {
                setListOfOptions(shirts);
            } else if (choice === 'PANTS') {
                setListOfOptions(pants);
            }
        }
    }

    const changeAvatar = (e) => {
        const selected = e.currentTarget.style.backgroundImage;
        if (option === 'COLOR') {
            const color = document.getElementById("color");
            color.style.backgroundImage = selected;
            color.style.backgroundSize = "contain";
            color.style.backgroundRepeat = "no-repeat";
            color.style.backgroundPosition = "center";
        } else if (option === "BACKGROUND") {
            const avatar = document.getElementById("avatar");
            avatar.style.backgroundImage = selected;
            avatar.style.backgroundSize = "cover";
            avatar.style.backgroundRepeat = "no-repeat";
        } else if (option === "HAT") {
            const hat = document.getElementById("hat");
            hat.style.backgroundImage = selected;
            hat.style.backgroundSize = "contain";
            hat.style.backgroundRepeat = "no-repeat";
            hat.style.backgroundPosition = "center";
        } else if (option === "SHIRT") {
            const shirt = document.getElementById("shirt");
            shirt.style.backgroundImage = selected;
            shirt.style.backgroundSize = "contain";
            shirt.style.backgroundRepeat = "no-repeat";
            shirt.style.backgroundPosition = "center";
        } else if (option === "PANTS") {
            const pants = document.getElementById("pants");
            pants.style.backgroundImage = selected;
            pants.style.backgroundSize = "contain";
            pants.style.backgroundRepeat = "no-repeat";
            pants.style.backgroundPosition = "center";
        }
    }

    return (
        <div className="generator-container">
            <div id="avatar">
                <div id="hat"></div>
                <div id="color"></div>
                <div id="shirt"></div>
                <div id="pants"></div>
            </div>
            <div className="avatar-options-select">
                <div className='selected' onClick={e => setSelection(e, "COLOR")}>
                    <IoColorPaletteSharp size={24}></IoColorPaletteSharp>
                </div>
                <div onClick={e => setSelection(e, "BACKGROUND")}>
                    <IoImageSharp size={24}></IoImageSharp>
                </div>
                <div onClick={e => setSelection(e, "HAT")}>
                    <GiTopHat size={24}></GiTopHat>
                </div>
                <div onClick={e => setSelection(e, "SHIRT")}>
                    <IoShirtSharp size={24}></IoShirtSharp>
                </div>
                <div onClick={e => setSelection(e, "PANTS")}>
                    <GiUnderwearShorts size={24}></GiUnderwearShorts>
                </div>
            </div>
            <div className="avatar-options">
                <h3>{option}</h3>
                <div className='options'>
                    {listOfOptions.map(photo => {
                        return <div key={photo.src} className='option-div' style={{
                            backgroundImage: `url(${photo.src})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                            }}
                            onClick={e => changeAvatar(e)}
                        >

                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}