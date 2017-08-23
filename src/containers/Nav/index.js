import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


const Nav = props => (
  <div className='ul-nav'>
    <li className = 'li-nav-item' onClick={(p) => props.changePage('/')}>Home</li>
    <li  className = 'li-nav-item'onClick={(p) => props.changePage('/about-us')}>About</li>
    <li className = 'li-nav-item'onClick={(p) => props.changePage('/chr')}>Chr</li>
    <li className = 'li-nav-item'onClick={(p) => props.changePage()}>***</li>
    <li className = 'li-nav-item'onClick={(p) => props.changePage()}>***</li>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: (p) => push(p)
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Nav)