import React from 'react';

const timeSave = {
  horas:"36",
  dias:"Sabados",
  horario:"9am-3pm"
};

export const FixterAccordion = ({onClick, open, titulo, cuerpo, syllabusLink, date, time=timeSave, detailLink}) => {
        return(
            <div onClick={()=>onClick(titulo)}>
                {open ?
                <div className="accordion-open">
                    <span>{titulo}</span>
                    <i>-</i>
                    <div>
                        <p>
                            {cuerpo}
                        </p>
                        <div className="time">
                            <p>{time.horas} horas</p>
                            <p>{time.dias}</p>
                            <p>{time.horario}</p>
                            <br/>
                            <p>Proximo inicio: {date}</p>
                        </div>
                    </div>
                </div>
                    :
                    <div
                        className="accordion-closed"
                    >
                        <span>{titulo}</span>
                        <i>+</i>

                    </div>
                }
            </div>
        );

};