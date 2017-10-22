/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
//import {curso} from '../../assets/cursos.jpg';
import {FixterAlert} from '../../components';
import AccordionsContainer from './AccordionsContainer';
import {MapSection} from "./MapSection";
import {PartnersSection} from "./PartnersSection";
import {EnviromentSection} from "./EnviromentSection";
//const Accordion = () => (
  //  <div>lol</div>
//);

const Portada = ({props}) => (
    <div className="home-body-portada">
        <div className="home-body-portada-cover"></div>
        <h2>
            Fixter Camp
        </h2>
    </div>
);

const HomeBody = ({props}) => {
    return (
        <div className="home-body-container" style={styles.name}>
            <FixterAlert
                text="FixterGeek"
                color="grey"
            />
            <Portada/>
            <AccordionsContainer/>
            <MapSection/>
            <PartnersSection/>
            <EnviromentSection/>
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
        height:2000,
        //paddingRight:100

    }
};

export default HomeBody;