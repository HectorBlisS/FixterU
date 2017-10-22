/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {FixterButton} from "../../components";
import {Link} from 'react-router-dom';

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
                    <p>
                        contacto@fixter.org
                        <br/>
                        Parque Cientifico y tecnológico del estado de Hidalgo,
                        <br/>
                        edificio tecnología, piso 1
                        <br/>
                        Pachuca, Hidalgo; México.
                    </p>
                    <p>
                        <Link to="/students/login">
                            Login de estudiantes
                        </Link>
                            <br/>
                        fb.com/fixterme <br/>
                        @fixter_
                    </p>
                </div>
                <div className="nav-lista">
                    <ul>
                        <li>
                            <Link to="/">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            Cursos Online
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Sobre Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            FixterCamp
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            Cursos de Medio Tiempo
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            Talleres
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            Empleos
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

//MenuContent.propTypes = {};

//const styles = {
  //  name: {}
//};

export default MenuContent;