import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


const Nav = props =>  (
  <div className='ul-nav'>
    <li className = 'li-nav-item' onClick={(p) => props.changePage('') } >Home</li>
    <li  className = 'li-nav-item'onClick={(p) => props.changePage('about-us')} >About</li>
    <li className = 'li-nav-item'onClick={(p) => props.changePage('chr')} >Characters</li>
    <li className = 'li-nav-item'onClick={(p) => props.changePage()}>***</li>
    <li className = 'li-nav-item'onClick={(p) => props.changePage()} >***</li>
  </div>
)




export default connect(state => ({

}),
    {

         changePage: (p) => push(p)
    }
)(Nav)
  