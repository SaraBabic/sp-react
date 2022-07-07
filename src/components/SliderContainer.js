import React, { useEffect } from 'react';
import './SliderContainer.css';

function SliderContainer(props) {
    useEffect(() => {
        var counter = 1;
        setInterval(function(){
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if(counter > 5){
                counter = 1;
            }
        }, 5000);
    });

    const buttons = [1, 2, 3, 4, 5];
    const sliderImages = [
        {
            path: "./images/image.jpg",
            alt: "first image"
        },
        {
            path: "./images/meso10.jpg",
            alt: "second image"
        },
        {
            path: "./images/meso11.jpg",
            alt: "third image"
        },
        {
            path: "./images/meso12.jpg",
            alt: "fourth image"
        },
        {
            path: "./images/meso13.jpg",
            alt: "fifth image"
        }
        ];

    return (
        <div className="slider">
            <div className="about">
                <h1 className="heiko">Heiko Brath Metzgermeister</h1>
                <p className="text">Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam Aperol Spritz probatus pertinax.</p>
            </div>

            <div className="slides">
                {buttons.map(btnNumber =>{
                    let btnId = "radio" + btnNumber;
                    return <input type="radio" name="radio-btn" id={btnId}/>
                })}

                {sliderImages.map( (image, index) => {
                    let slideClass = "slide";
                    if (index === 0){
                        slideClass += " first";
                    }

                    return (
                        <div className={slideClass}>
                            <img src={image.path} alt={image.alt}/>
                        </div>
                    );
                })}

                <div className="navigation-auto">
                    {buttons.map(btnNumber =>{
                        let btnClass = "auto-btn" + btnNumber;
                        return <div className={btnClass}></div>
                    })}
                </div>
            </div>

            <div className="navigation-manual">
                {buttons.map(btnNumber =>{
                    let forAttr = "radio" + btnNumber;
                    return <label htmlFor={forAttr} className="manual-btn"></label>
                })}
            </div>
        </div>
    );
}

export default SliderContainer;