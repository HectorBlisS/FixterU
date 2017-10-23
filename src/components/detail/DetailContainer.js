import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {DetailDisplay} from './DetailDisplay';

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

export const DetailContainer = connect(mapStateToProps, mapDispatchToProps)(DetailDisplay);