import React, {useState, useEffect} from 'react';

const ImageRandomizer = ({position}) => {

    const images = require.context('../images/sprites', true);

    const [diff, setDiff] = useState(Math.random() * 1000);
    const [randomSrc, setRandomSrc] = useState(getRandomSrcName(false));

    function getRandomSrcName(defaultImage = false) {
        if (!defaultImage) {
            const randomNumber = Math.ceil(Math.random() * 11);
            return images(`./cycle_${randomNumber}.png`).default;
        }
        return images(`./final_${position}.png`).default;
    }

    useEffect(() => {
        if (diff < 1000) {
            setTimeout(() => {
                setRandomSrc(getRandomSrcName(false));
                setDiff(diff => diff * 1.1);
            }, diff)
        } else {
            setRandomSrc(getRandomSrcName(true));
        }
    }, [diff])

    return <img 
            src={randomSrc}
            style={{width: '25%'}}
            onMouseEnter={() => setRandomSrc(getRandomSrcName(false))}
            onMouseLeave={() => setRandomSrc(getRandomSrcName(true))}
            />;
}

export default ImageRandomizer;