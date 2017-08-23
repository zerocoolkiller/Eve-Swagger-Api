import React from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import * as chrrdActions from '../../Redux/Chrrd'
import * as ViewChrActions from '../../Redux/ViewChr'

class Chr extends React.Component {
    componentWillMount() {
        this.props.callingApi();
        this.props.updatePf('failed');
        this.props.updateSkL('failed');
        this.props.updateId('');
        this.props.updateCid('');
        this.props.updateAt('');
        this.props.updateRt('');
        this.props.updateSk('');
    }

    Charview(a1, a2, a3, a4) {
        this.props.updateId(a1);
        this.props.updateCid(a2);
        this.props.updateAt(a3);
        this.props.updateRt(a4);
        this.props.callingApiPre();
        this.props.changePage();
    };

    render() {
        if (this.props.ChrList.Loading === 'false') {
            const apis = this.props.ChrList.list.map((item, i) => {
                return <tr key={item._id}><td className="ellipsis">{item._id}</td>
                    <td>{item.Character_Name}</td>
                    <td className="ellipsis">{item.Character_ID}</td>
                    <td className="ellipsis">{item.Access_Token}</td>
                    <td className="ellipsis">{item.Refresh_Token}</td>
                    <td>
                        <button onClick={() => this.Charview(item._id, item.Character_ID, item.Access_Token, item.Refresh_Token)} className="button_t"  >View</button>
                    </td>
                </tr>

            });

            return <div  >
                <table className='table'>
                    <tbody>
                        <tr>
                            <th> Id </th>
                            <th> Character Name </th>
                            <th> Character ID</th>
                            <th> Access Token </th>
                            <th> Refresh Token</th>
                            <th> Actions</th>
                        </tr>
                        {apis}
                    </tbody>
                </table>
            </div>
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