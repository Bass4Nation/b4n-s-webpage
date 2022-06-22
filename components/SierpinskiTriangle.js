import React from "react";

const SierpinskiTriangle = () => {



    const create = (x1, y1, x2, y2, x3, y3) => {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");


        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath();
        
        // ctx.fill();
        ctx.stroke();
    }
    React.useEffect(() => {

        const x1 = 0, y1 = 150; 
        const x2 = 150, y2 = 0;
        const x3 = 300, y3 = 150;



        create(x1, y1, x2, y2, x3, y3);
        for (let i = 1; i <= 3; i++) {
            create(x1, y1 -=50, x2 -=50 , y2, x3 -=100, y3 -=50);
        }
    }, []);


    return (
        <>
            <h3>Trying to make Sierpinski Triangle (in progress)</h3>
            <canvas id="myCanvas" width={300} height={300}></canvas>
        </>
    )
}

export default SierpinskiTriangle