import { useState } from 'react';
import { IoColorPaletteSharp, IoImageSharp, IoShirtSharp } from 'react-icons/io5';
import { GiTopHat, GiUnderwearShorts } from 'react-icons/gi';

import pixelBackground1 from '../public/pixel_background_1.png';
import pixelBackground2 from '../public/pixel_background_2.png';
const backgrounds = [pixelBackground1, pixelBackground2];

import { headgear, monkes, torso } from './avatar-images';

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
                setListOfOptions(headgear);
            } else if (choice === 'SHIRT') {
                setListOfOptions(torso);
            } else if (choice === 'PANTS') {
                setListOfOptions(pants);
            }
        }
    }

    const changeAvatar = (e, source) => {
        const selected = source;
        if (option === 'COLOR') {
            const color = document.getElementById("color").firstChild;
            color.src = selected;
        } else if (option === "BACKGROUND") {
            const avatar = document.getElementById("avatar");
            avatar.style.backgroundImage = `url(${selected})`;
            avatar.style.backgroundSize = "cover";
            avatar.style.backgroundRepeat = "no-repeat";
            avatar.style.backgroundPosition = "center";
        } else if (option === "HAT") {
            const hat = document.getElementById("hat").firstChild;
            hat.src = selected;
        } else if (option === "SHIRT") {
            const shirt = document.getElementById("shirt").firstChild;
            shirt.src = selected;
        } else if (option === "PANTS") {
            const pants = document.getElementById("pants").firstChild;
            pants.src = selected;
        }
    }

    return (
        <div className="generator-container">
            <div id="avatar" style={{
                "backgroundImage": `url(${pixelBackground1.src})`,
                "backgroundSize": "cover",
                "backgroundRepeat": "no-repeat",
                "backgroundPosition": "center"
            }}>
                <div id="hat">
                    <img />
                </div>
                <div id="color">
                    <img src={monkes[0].src}/>
                </div>
                <div id="shirt">
                    <img />
                </div>
                <div id="pants">
                    <img />
                </div>
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
                            onClick={e => changeAvatar(e, photo.src)}
                        >

                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}