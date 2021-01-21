import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes}) => {
    return(
        <div className='center ma pa2'>
            <div style={{position: "relative"}}>
                <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'/>
                {
                    boxes.map((box,i) => {
                        const { topRow, rightCol, bottomRow, leftCol} = box;
                        return(<div key={i} id="face" className='bounding-box' style={{top: topRow, bottom: bottomRow, right: rightCol, left: leftCol }}></div>)
                    })
                }
            </div>
        </div>
    );
}

export default FaceRecognition;