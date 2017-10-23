import React, {Component} from 'react';
import {DetailContainer} from "./DetailContainer";
import './detail.css';

class DetailPage extends Component{
    render(){
        return(
            <div className="detail-page">
               <DetailContainer/>
            </div>
        );
    }
}



export default DetailPage;