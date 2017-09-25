import React from 'react';

export const FixterAlert = ({className, children, text, style, bgColor, color}) => (
    <div
        className={className}
        style={style ? style : {
            padding:"25px 0 25px 0",
            backgroundColor:bgColor?bgColor:"#efefed",
            color:color?color:"red",
            width:'100%',
            borderRadius:'5px',
            textAlign:'center'
        }}
    >
        {children}
        {text}
    </div>
);

