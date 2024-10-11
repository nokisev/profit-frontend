import React, { useEffect, useState, Component } from 'react'
import axios from 'axios'
import './Header.css'
import Login from './Login'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

export default class Header extends Component {

  render() {
    return (
      <div className='header'>
        <div>Profit</div>
        <div>Logo</div>
        <ul>
            <li>
                <button>
                    <Router>
                        <Routes>
                            <Route path='/login' element={<Login/>} />
                        </Routes>
                    </Router>
                </button>
                
            </li>
        </ul>
      </div>
    )
  }
}
