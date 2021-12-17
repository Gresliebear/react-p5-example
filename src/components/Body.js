import React from 'react'
import { ReactP5Wrapper } from "react-p5-wrapper";
import { sketch } from '../p5calls/SketchExample'
import { sketch3Dcube, sketch3Dcylinder } from '../p5calls/Sketch3Dexample';
import { SketchCoordinatesExample } from '../p5calls/SketchCoordinates';

const Body = () => {
    return (
        <div className='body'>
            <div>
            <h1> Body Section </h1>

            <ReactP5Wrapper sketch={sketch3Dcube} />

            <br></br>

            <ReactP5Wrapper sketch={SketchCoordinatesExample} />
            

            </div>
        </div>
    )
}

export default Body
