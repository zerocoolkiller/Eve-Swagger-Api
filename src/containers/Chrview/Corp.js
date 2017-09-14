import React from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import * as chrrdActions from '../../Redux/Chrrd'
import * as ViewChrActions from '../../Redux/ViewChr'
import numeral from 'numeral';


class Corp extends React.Component {
 
        render() {
        if (this.props.ViewChr.CorpD === 'true') {
            const CorpList = this.props.ViewChr.Corp.map((item, i) => {
                return <tr key={item.record_id}>
                  <td>{item.start_date}</td>
                    <td>{item.corporation_id}</td>


                </tr>

            });

            return <dev >
                <table className='table' style={{ 'height': '300px','width':'375px', 'overflow': 'scroll', 'display': 'block' }}>
                    <tbody>
                        <tr>
                            <th>Start Date </th>
                            <th>Corp </th>
                           
                        </tr>
                        {CorpList}
                    </tbody>
                </table>
            </dev>
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
)(Corp)