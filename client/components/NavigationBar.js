import React from 'react'
import { Link } from 'react-router'

export default ()=> {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/flexbox">Levi Flexbox</Link></li>
      <li><Link to="/hutko">Hutko</Link></li>
      <li><Link to="/hutko/jedan">Hutko jedan</Link></li>
      <li><Link to="/hutko/dva">Hutko dva</Link></li>
    </ul>
  )
}
