import React from 'react';
import './SliderImages.css';

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

 function SliderImages(props) {
     return sliderImages.map( (image, index) => {
         let slideClass = "slide";
         if (index === 0){
             slideClass += " first";
         }

         return (
             <div className={slideClass}>
                 <img src={image.path} alt={image.alt}/>
             </div>
         );
     })
 }

export default SliderImages;