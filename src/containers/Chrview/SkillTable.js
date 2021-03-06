import React from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import * as chrrdActions from '../../Redux/Chrrd'
import * as ViewChrActions from '../../Redux/ViewChr'
import numeral from 'numeral';


class Chr extends React.Component {
 
        render() {
        if (this.props.ViewChr.SkillUpdate === 'true') {
            const SkillList = this.props.ViewChr.Skill.map((item, i) => {
                return <tr key={item.skill_id}>
                  <td>{item.skill_id}</td>
                    <td className="ellipsis">{item.current_skill_level}</td>
                    <td>{numeral(item.skillpoints_in_skill).format('0,0')}</td>

                </tr>

            });

            return <dev >
                <table className='table' style={{ 'height': '300px','width':'375px', 'overflow': 'scroll', 'display': 'block' }}>
                    <tbody>
                        <tr>
                            <th> Skill </th>
                            <th> Level </th>
                            <th> Skill Points</th>
                        </tr>
                        {SkillList}
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
)(Chr)
