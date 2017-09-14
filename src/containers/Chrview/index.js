import React from 'react'
import Skills from './SkillTable'
import Picture from './Pic'
import Wallet from './Wallet'
import Corp from './Corp'

export default () => (
  <dev>
    <dev className="top">
      <Picture />
      <Wallet />
    </dev>
    <dev className="top">
      <Skills />
      <Corp />
    </dev>
  </dev>
)