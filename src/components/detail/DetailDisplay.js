/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {FixterButton} from "../common/FixterButton";
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

const timeSave = {
    horas:"36",
    dias:"Sabados",
    horario:"9am-3pm"
};

const learn=[
    {name:"HTML5", img:"http://hackeryou.com/wp-content/themes/hackeryou/assets/images/svg/html5.svg"},
    {name:"CSS3", img:"http://hackeryou.com/wp-content/themes/hackeryou/assets/images/svg/css3.svg"},
    {name:"Responsive Design", img:"http://hackeryou.com/wp-content/themes/hackeryou/assets/images/svg/rwd.svg"},
    {name:"VanillaScript", img:"http://hackeryou.com/wp-content/themes/hackeryou/assets/images/svg/javascript.svg"},
    {name:"jQuery", img:"http://hackeryou.com/wp-content/themes/hackeryou/assets/images/svg/jquery.svg"},
    {name:"ES6", img:"http://nodexperts.com/wp-content/uploads/2017/01/babel-logo-grey.png"},
    {name:"ReactJs", img:"http://hackeryou.com/wp-content/themes/hackeryou/assets/images/svg/wp.svg"}
];

export const DetailDisplay = ({
                                  titulo="FixterCamp Backend Path",
                                  cuerpo="Lo único que te separa de una carrera prominente en el desarrollo web, son 8 semanas con nosotros.",
                                  time=timeSave,
                                  toLearn=learn,
                                  date="Octubre 21 - Diciembre 16, 2017",
                                  graduacion="Diciembre 17"
                              }) => {
    return (
        <div>
            <div className="detail-info">
                <div className="detail-text">
                    <h2>{titulo}</h2>
                    <p>{cuerpo}</p>
                    <FixterButton
                        text="Descargar Temario"
                        bgColor="orangered"
                    />
                    <span>
                        <Link to="/">
                        ¿Porqué este Bootcamp?
                        </Link>
                    </span>
                </div>
                <div className="detail-learn">
                    <div className="detail-learn-cover">
                            <div>
                                <FontAwesome
                                    className='super-crazy-colors'
                                    name='clock-o'
                                    size='2x'
                                    spin={false}
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                />
                                <h4>¿Cuando?</h4>
                                <p>{time.horario}</p>
                            </div>
                            <div>
                                <FontAwesome
                                    className='super-crazy-colors'
                                    name='map-marker'
                                    size='2x'
                                    spin={false}
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                />
                                <h4>¿Donde?</h4>
                                <p>En FixterGeek en <br/>Pachuca, Hidalgo</p>
                            </div>
                            <div>
                                <FontAwesome
                                    className='super-crazy-colors'
                                    name='money'
                                    size='2x'
                                    spin={false}
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                />
                                <h4>¿Inversión?</h4>
                                <p>$ 12,000.00 MXN</p>
                            </div>
                    </div>

                </div>
            </div>

            <div className="detail-aprenderas">
                <h2>¿Qué parenderás?</h2>
                <div className="aprenderas-icons">


                {toLearn.map((i, index)=>{
                    return(
                        <div key={index}>
                            <p>
                                {i.name}
                            </p>
                            <br/>
                            <img width="200px" height="200px" src={i.img} alt="tech img"/>
                        </div>

                    );
                })}

                </div>

                <Link to="/">
                    Ver todos los topicos del curso
                </Link>
            </div>

            <div className="proximo-inicio">
                <h2>Próximos Inicios</h2>
                <section>
                    <div>
                        <div className="proximo-divider"/>
                        <h3>Curso actual</h3>
                        <p>{date}</p>
                        <Link to="/">Graduacion: {graduacion}</Link>
                        <div className="proximo-divider"/>
                    </div>
                    <div>
                        <h3>Curso siguiente</h3>
                        <p>{date}</p>
                        <Link to="/">
                            Graduacion: {graduacion}
                        </Link>
                        <div className="proximo-divider"/>
                        <FixterButton
                            text="Aplicar"
                            bgColor="orangered"
                        />
                    </div>
                </section>



            </div>

        </div>
    );
};

//DetailDisplay.propTypes = {};
