/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import logo from '../../assets/logo_geek.png';
import FontAwesome from 'react-fontawesome';

const SideBar = ({props}) => {
    return (
        <div className="home-side-bar">
            <div className="home-apply">
                <img src={logo} alt=""/>
                <br/>
                <a
                    style={styles.boton}
                    className="home-button">
                    Inscribete
                </a>
            </div>

            <FontAwesome
                name="bars"
                size="2x"
                style={{color:'grey'}}
            />


        </div>
    );
};

//SideBar.propTypes = {};

const styles = {
    boton: {
        color:'white'
    }
};

export default SideBar;