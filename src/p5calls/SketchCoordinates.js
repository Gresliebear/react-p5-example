export function SketchCoordinatesExample(p5){
    p5.setup = () => p5.createCanvas(720, 400, p5.WEBGL);

    p5.draw = () => {
         // Set the background to black and turn off the fill color
            p5.background(0);
            p5.noFill();
            // The two parameters of the point() method each specify
            // coordinates.
            // The first parameter is the x-coordinate and the second is the Y
            p5.stroke(255);
            p5.point(p5.width * 0.5, p5.height * 0.5);
            p5.point(p5.width * 0.5, p5.height * 0.25);

            // Coordinates are used for drawing all shapes, not just points.
            // Parameters for different functions are used for different
            // purposes. For example, the first two parameters to line()
            // specify the coordinates of the first endpoint and the second
            // two parameters specify the second endpoint
            p5.stroke(0, 153, 255);
            p5.line(0, p5.height * 0.33, p5.width, p5.height * 0.33);

            // By default, the first two parameters to rect() are the
            // coordinates of the upper-left corner and the second pair
            // is the width and height
            p5.stroke(255, 153, 0);
            p5.rect(p5.width * 0.25, p5.height * 0.1, p5.width * 0.5, p5.height * 0.8);
      };

}