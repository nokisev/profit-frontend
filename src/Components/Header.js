import React, { useEffect, useState, Component } from 'react'
import axios from 'axios'
import './Header.css'
import Login from './Login'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Button from './Button'
import logo from '../logo.jpg'

export default class Header extends Component {

  render() {
    return (
      <div className='header'>
        <div className='logo'><img src={logo} /></div>
        <div>Profit</div>
        <ul>
            <Button>Войти</Button>
        </ul>
      </div>
    )
  }
}
