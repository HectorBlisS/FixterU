/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import mapa from '../../assets/mapa.png';
import office from '../../assets/office.png';

export const MapSection = ({props}) => {
    return (
        <div className="main-map">
            <div className="map-container">
                <img className="map-imagen"  src={office} alt="fixter office"/>
                <img className="map-imagen" src={mapa} alt="fixter mapa"/>
            </div>
            <div className="map-dir">
                <h2>
                    Todos nuestros cursos se imparten
                    en nuestras officinas en Pachuca
                    dentro del Parque cientifico.
                </h2>
                <h3>¡Pasa a saludarnos!</h3>
                <p>¿Tienes preguntas?</p>
                <p>
                    Envíanos un email a <a href="mailto:contacto@fixter.org">
                        contacto@fixter.org
                    </a> o twiteanos <a href="http://twitter.com/fixter_">
                        @fixter_
                    </a>
                </p>
            </div>

        </div>

    );
};

//MapSection.propTypes = {};

const styles = {

};

