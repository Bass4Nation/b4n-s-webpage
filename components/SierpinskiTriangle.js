import React from "react";

const SierpinskiTriangle = () => {



    const create = (x1,y1, x2, y2, x3, y3, h) => {
        var c = document.getElementById("myCanvas");
        var context = c.getContext("2d");

        
        let height = h * Math.cos(Math.PI / 6);

        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(x3, y3 - height);
        context.closePath();
        context.stroke(); 
    }
    React.useEffect(() => {
        var c = document.getElementById("myCanvas");
        var context = c.getContext("2d");

        const x1 = 100;
        const x2 = 300;
        const x3 = 200;
        const y1 = 300;
        const y2 = 300;
        const y3 = 300;
        const height = 200;

        
        // let height = 200 * Math.cos(Math.PI / 6);

        // context.beginPath();
        // context.moveTo(100, 300);
        // context.lineTo(300, 300);
        // context.lineTo(200, 300 - height);
        // context.closePath();
        // context.stroke();
        create(x1,y1,x2,y2,x3,y3,height);
        for(let i = 1; i <= 3; i++){
            create(x1,y1,x2 -=50,y2,x3,y3,height);
        }
      }, []);
    

    return(
        <>
        <h3>Trying to make SierpinskiTriangle</h3>
        <canvas id="myCanvas" width={300} height={300}></canvas>
        </>
    )
}

export default SierpinskiTriangle