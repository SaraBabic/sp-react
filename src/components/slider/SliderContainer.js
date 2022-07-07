import React, { useEffect } from 'react';
import './SliderContainer.css';
import SliderImages from "./SliderImages";
import NavigationAuto from "./NavigationAuto";
import NavigationManual from "./NavigationManual";
import RadioInput from "./RadioInput";

function SliderContainer(props) {
    useEffect(() => {
        let counter = 1;
        setInterval(function(){
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if(counter > 5){
                counter = 1;
            }
        }, 5000);
    });

    return (
        <div className="slider">
            <div className="about">
                <h1 className="heiko">Heiko Brath Metzgermeister</h1>
                <p className="text">Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam Aperol Spritz probatus pertinax.</p>
            </div>

            <div className="slides">
                <RadioInput/>

                <SliderImages/>

                <NavigationAuto/>
            </div>

            <NavigationManual/>
        </div>
    );
}

export default SliderContainer;