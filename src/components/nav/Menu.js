/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import FontAwesome from 'react-fontawesome'



const Menu = ({children, visible, toggleVisibility}) => {
    return (
        <div className={visible?"animated fadeIn":"animated fadeOut"}>
            {visible ? <div className="menu-container">
                    <div> {/*contenedor*/}
                        <div className="menu-opacity"></div>
                        <FontAwesome
                            name="times"
                            size="4x"
                            style={{color:'white'}}
                            className="nav-close"
                            onClick={toggleVisibility}
                        />
                        {children}
                    </div> {/*contenedor*/}
            </div>
                :
            null}

        </div>

    );
};

//Menu.propTypes = {};

//const styles = {
  //  name: {}
//};

export default Menu;