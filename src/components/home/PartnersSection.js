/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import retoz from '../../assets/retoz.png';
import citnova from '../../assets/citnova.png';
import googlegdg from '../../assets/googlegdg.png';


export const PartnersSection = ({props}) => {
    return (
        <div style={styles.main}>
            <h2>Algunos de nuestros partners</h2>
            <div style={styles.container}>
                <div style={styles.partner}>
                    <img style={styles.img} src={retoz} alt="partner"/>
                </div>
                <div style={styles.partner}>
                    <img style={styles.img} src={citnova} alt="partner"/>
                </div>
                <div style={styles.partner}>
                    <img style={styles.img} src={googlegdg} alt="partner"/>
                </div>
            </div>
        </div>
    );
};

//PartnersSection.propTypes = {};

const styles = {
    main:{
        paddingBottom:"100px",
        paddingTop:"100px",
        backgroundColor:"#efefed"
    },
    container: {
        display:"flex",
        flexWrap:"wrap",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"


    },
    partner:{
        width:"125px",
        marginRight:"25px",
        padding:"6px 0px"
    },
    img:{
        maxWidth:"100%"
    }
};

