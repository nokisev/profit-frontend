import React, { Component } from 'react'
import './Button'
import './Catalog.css'

export default class Catalog extends Component {
  render() {
    return (
      <div className='container'>
        <div className='inner-container'>
            <h3>Питание</h3>
            <div className='content'>
                Курс похудения
            </div>
            <div className='content'>
                Дневник питания
            </div>
            <div className='content'>
                Вес и измерения
            </div>
            <div className='content'>
                Общая лента
            </div><div className='content'>
                Рецепты
            </div><div className='content'>
                Статьи
            </div><div className='content'>
                Истории
            </div><div className='content'>
                Калорийность
            </div>
            <hr />
            <div className='content'>
                Обратная связь
            </div>
            <div className='content'>
                made by nokisev
            </div>
        </div>

      </div>
    )
  }
}
