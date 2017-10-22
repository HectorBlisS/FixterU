/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import puffs from '../../assets/puffs.png';

export const EnviromentSection = ({props}) => {
    return (
        <div className="enviroment-main">
            <div className="enviroment">
                <div className="enviroment-cover"></div>
                <h2>Nuestro Ecosistema de Aprendizaje</h2>
            </div>
            <div className="enviroment-info">
                <h3>
                    Todos los cursos de FixterGeek
                    se realizan en un area diseñada
                    especificamente para facilitar
                    el aprendizaje.
                </h3>
                <div className="enviroment-flex">
                    <p>
                        Nuestros salones son amplios,
                        contamos con espacios de estudio
                        comodos y espaciosos. Nuestras oficinas
                        son las mas geniales de Pachuca localizados
                        convenientemente en el Parque
                        Cientifico y Tecnológico del Estado de
                        Hidalgo, el cual es el centro de
                        desarrollo tecnológico del estado.
                        Nuestros espacios fueron diseñados de tal manera
                        que abrazaran nuestra vision de una escuela
                        no convencional en donde el aprendizaje
                        se disfrutara y nuestros alumnos vivan una experiencia
                        única. Nos encantan nuestras oficinas y sabemos que
                        tu tambien las amarás.
                    </p>
                    <div>
                        <img src={puffs} alt="fixter puffs"/>
                        <span>Play video</span>
                    </div>

                </div>
                <span>Saber más sobre nosotros</span>
            </div>
        </div>
    );
};

//EnviromentSection.propTypes = {};



