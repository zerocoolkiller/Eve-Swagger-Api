import React from 'react'
import * as chrrdActions from '../../Redux/Chrrd'
import * as ViewChrActions from '../../Redux/ViewChr'
import { connect } from 'react-redux'
class Pic extends React.Component {


    render() {
  
            return <div>
                <img src={'https://image.eveonline.com//Character/' + this.props.ViewChr.Cid + '_256.jpg'} alt={this.props.ViewChr.Cid} />
            </div>

    }
}

export default connect(state => ({
    ChrList: state.ChrList,
    ViewChr: state.ViewChr
}),
    {
        ...chrrdActions,
        ...ViewChrActions,

    }
)(Pic)