import React from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import * as chrrdActions from '../../Redux/Chrrd'
import * as ViewChrActions from '../../Redux/ViewChr'
import numeral from 'numeral';

class Chr extends React.Component {
    
    render() {
        var string = numeral(this.props.ViewChr.Wallet).format('0,0.00');
        if (this.props.ViewChr.SkillUpdate === 'true') {
            return <h1>{string + ' isk' } </h1>
        } else {
            return <div  >
                <h1>Loading...</h1>
            </div>
        }
    }
}

export default connect(state => ({
    ChrList: state.ChrList,
    ViewChr: state.ViewChr
}),
    {
        ...chrrdActions,
        ...ViewChrActions,
        changePage: () => push('/vchr')
    }
)(Chr)