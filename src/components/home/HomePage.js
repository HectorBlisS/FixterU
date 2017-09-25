import React, {Component} from 'react';
import HomeTop from './HomeTop';
import HomeBody from './HomeBody';

export class HomePage extends Component{
    render(){
        return(
            <div style={{position:'relative'}}>
                <HomeTop/>
                <HomeBody/>
            </div>
        );
    }
}