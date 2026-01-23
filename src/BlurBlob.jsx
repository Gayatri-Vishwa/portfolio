import React from "react";
import PropTypes from 'prop-types'

function BlurBlob({position,size}) {
    const{top,left}=position
    const{width,height}=size


    
  return (
    
    <div
      className="absolute "
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: "translate(-50%,-50%)",
      }}
    >
            <div className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob">

            </div>



    </div>
  );
}

//define props type   (so in whole website when we pass value for top left etc it should be string type otherwise it generates error)
BlurBlob.PropTypes={
    position:PropTypes.shape({
        top:PropTypes.string,
        left:PropTypes.string
    }),
    size:PropTypes.shape({
        width:PropTypes.string,
        height:PropTypes.string
    })
}


export default BlurBlob;
