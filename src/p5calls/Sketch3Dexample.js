export function sketch3Dcube(p5) {

    p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);

    p5.draw = () => {
        p5.background(250);
        p5.normalMaterial();
        p5.push();
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.box(70, 70, 70);
        p5.pop();

      };

}

export function sketch3Dcylinder(p5) {

    p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);

    p5.draw = () => {
        p5.background(250);
        p5.normalMaterial();
        p5.push();
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.cylinder(70, 70);
        p5.pop();

      };

}

export function sketch3Dcone(p5) {

    p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);
    
    p5.draw = () => {
        p5.background(250);
        p5.normalMaterial();
        p5.push();
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.cone(70, 70);
        p5.pop();
      };
}


export function sketch3Dtorus(p5) {
    p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);
    
    p5.draw = () => {
        p5.background(250);
        p5.normalMaterial();
        p5.push();
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.torus(70, 20);
        p5.pop();
      };
}


export function sketch3Dsphere(p5) {
    p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);
    
    p5.draw = () => {
        p5.background(250);
        p5.normalMaterial();
        p5.push();
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.sphere(70);
        p5.pop();
      };
}