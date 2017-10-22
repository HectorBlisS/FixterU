import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FixterAccordion} from './FixterAccordion';

class AccordionsContainer extends Component{

    state = {
      courses:[],
      active:null
    };

    clickAccordion = (title) => {
        if(this.state.active === title) return this.setState({active:null});
        this.setState({active:title})
    };

    componentWillReceiveProps(nP){
        this.setState({courses:nP.courses});
    }

    render(){
        const {courses, active} = this.state;
        return(
            <div>
                {courses.map((c, index)=>{
                    return (
                        <FixterAccordion
                            key={index}
                            {...c}
                            open={active===c.titulo}
                            onClick={this.clickAccordion}
                        />
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.ofertaAcademica
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(AccordionsContainer);