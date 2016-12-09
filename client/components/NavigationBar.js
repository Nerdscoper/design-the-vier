import React from 'react'
import { Link } from 'react-router'

export default ()=> {
  return (
    <nav className="navbar">
      <div><Link to="/" activeClassName="home">Home</Link></div>
      <div><Link to="/flexbox" activeClassName="active">Levi Flexbox</Link></div>
      <div><Link to="/hutko" activeClassName="active">Hutko</Link></div>
      <div><Link to="/hutko/jedan" activeClassName="active">Hutko jedan</Link></div>
      <div><Link to="/hutko/dva" activeClassName="active">Hutko dva</Link></div>
    </nav>
  )
}
