/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import logo from '../../assets/logo_geek.png';
import FontAwesome from 'react-fontawesome';
import {FixterButton} from "../../components";
import Menu from './Menu';
import MenuContent from "./MenuContent";

export const NavBar = ({visibleMenu, toggleVisibility}) => {
    return (
        <div className="home-side-bar">
            <div className="home-apply">
                <img src={logo} alt=""/>
                <br/>
                <FixterButton
                    text="Perro!!"
                    color="red"
                    className={"home-button"}
                />
            </div>

            <FontAwesome
                name="bars"
                size="2x"
                style={{color:'white', cursor:'pointer'}}
                onClick={toggleVisibility}
            />

            <Menu
                toggleVisibility={toggleVisibility}
                visible={visibleMenu}
            >
                <MenuContent/>
            </Menu>

        </div>
    );
};

//SideBar.propTypes = {};

const styles = {
    boton: {
        color:'white'
    }
};
