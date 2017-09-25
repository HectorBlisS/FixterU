/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';

export const FixterButton = ({className, text, style, color, bgColor}) => {
    return (
        <a
            style={style ? style:
                {
                    padding: '15px;',
                    cursor:'pointer',
                    color:!color?"white":color,
                    backgroundColor:!bgColor?"black":bgColor,
                    minWidth:'80px'

                }
            }
            className={className}>
            {text}
        </a>
    );
};

//FixterButton.propTypes = {};


