/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import SideBar from './SideBar';


const HomeBody = ({props}) => {
    return (
        <div style={styles.name}>
            BlisS
            <SideBar/>
        </div>
    );
};

//HomeBody.propTypes = {};

const styles = {
    name: {
        backgroundColor:'black',
        position:'relative',
        zIndex:2,
        top:'100vh',
        height:2000

    }
};

export default HomeBody;