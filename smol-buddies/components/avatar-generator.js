import { useState } from 'react';
import { IoColorPaletteSharp, IoImageSharp, IoShirtSharp } from 'react-icons/io5';
import { GiTopHat, GiUnderwearShorts } from 'react-icons/gi';

import pixelBackground1 from '../public/pixel_background_1.png';
import pixelBackground2 from '../public/pixel_background_2.png';
import pixelHat1 from '../public/pixel_hat_1.png';
import pixelHat2 from '../public/pixel_hat_2.png';

const backgrounds = [pixelBackground1, pixelBackground2];
const hats = [pixelHat1, pixelHat2];

export default function AvatarGenerator() {
    // const [option, setOption] = new useState("color");
    const [listOfOptions, setListOfOptions] = new useState(backgrounds);
    
    const setSelection = (e, choice) => {
        const isSelected = e.currentTarget.className === 'selected';
        if (!isSelected) {
            // setOption(choice);
            const divs = document.getElementsByClassName('selected');
            for (let i = 0; i < divs.length; i++) {
                divs[i].classList.remove('selected');
            }
            e.currentTarget.className = 'selected';
            if (choice === 'background') {
                setListOfOptions(backgrounds);
            } else if (choice === 'hat') {
                setListOfOptions(hats);
            }
        }
    }
    return (
        <div className="generator-container">
            <div className="avatar"></div>
            <div className="avatar-options-select">
                <div className='selected' onClick={e => setSelection(e, "color")}>
                    <IoColorPaletteSharp size={24}></IoColorPaletteSharp>
                </div>
                <div onClick={e => setSelection(e, "background")}>
                    <IoImageSharp size={24}></IoImageSharp>
                </div>
                <div onClick={e => setSelection(e, "hat")}>
                    <GiTopHat size={24}></GiTopHat>
                </div>
                <div onClick={e => setSelection(e, "shirt")}>
                    <IoShirtSharp size={24}></IoShirtSharp>
                </div>
                <div onClick={e => setSelection(e, "pants")}>
                    <GiUnderwearShorts size={24}></GiUnderwearShorts>
                </div>
            </div>
            <div className="avatar-options">
                <h3>ABOUT</h3>
                <div className='options'>
                    {listOfOptions.map(photo => {
                        return <div key={photo.src} className='option-div' style={{
                            backgroundImage: `url(${photo.src})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                            }}
                            
                        >

                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}