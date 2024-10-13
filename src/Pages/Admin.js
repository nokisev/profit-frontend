import React, { Component } from 'react'
import Button from '../Components/Button'
import './Admin.css'

export default function Admin() {
    return (
      <div className='container-admin'>
        <div className='inner-container-admin'>
          <div className='functions'>
            <Button>Create</Button>
            <Button>Delete</Button>
          </div>
        </div> 
      </div>
    )
}
