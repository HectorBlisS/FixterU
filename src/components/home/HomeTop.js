/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import video from '../../assets/HomeLoop.mp4';
import {FlatFixterButton} from "../../components";
import {FixterAlert} from "../../components";


const HomeTop = ({perro}) => {
    return (
        <div className="home-container">


            <div className="home-item uno">
                <video className="video-loop" autoPlay loop src={video}></video>
            </div>
            <div className="home-item dos">
                <FixterAlert className="no-show-desktop">
                    telefono solo para movil
                </FixterAlert>
                <h2>
                    Aprendizaje basado en la práctica
                </h2>
                <h3>Resultados Comprobados</h3>
                <p>FixterGeek offers Pachuca’s best full- and part-time courses for people who want to learn to code. Whether you’re looking to climb the corporate ladder, upgrade your skills, or start an exciting new career, FixterGeek is for you.</p>
                <div className="action-call">
                    <FlatFixterButton
                        text="Ver los cursos"
                        bgColor="red"
                    />
                    <a>Conocenos más sobre nosotros</a>
                    <div className="home-mailin">
                        <h4>Enterate de todo lo que hacemos</h4>
                        <input
                            placeholder="tuCorreo@electronico.com"
                            type="text"/>
                        <FlatFixterButton
                            text="Subscribete"
                            bgColor="#26a6c9"
                        />
                    </div>
                </div>
            </div>
            <div className="home-item tres">

            </div>
        </div>
    );
};

//const styles = {

//};

//HomeTop.propTypes = {};
export default HomeTop;