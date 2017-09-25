/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';


const HomeBody = ({props}) => {
    return (
        <div style={styles.name}>
            BlisS
        </div>
    );
};

//HomeBody.propTypes = {};

const styles = {
    name: {
        backgroundColor:' #efefed',
        position:'relative',
        zIndex:2,
        top:'100vh',
        height:2000

    }
};

export default HomeBody;