/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {FixterButton} from "../../components";

const MenuContent = ({props}) => {
    return (
        <div>
            <div className="nav-flex-container">
                <div className="nav-aplica">
                    <FixterButton
                        text="Aplica"
                        bgColor="red"
                        className="nav-button-apply"
                    />
                </div>
                <div className="nav-lista">
                    <ul>
                        <li>Perro</li>
                        <li>Perro</li>
                        <li>Perro</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

//MenuContent.propTypes = {};

const styles = {
    name: {}
};

export default MenuContent;