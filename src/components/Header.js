import React, { useState } from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import OrderItem from './OrderItem';

function Header(props) {

  let[modalBlock, setModalBlock] = useState(false);

  return (
    <header>
    <div>
      <span className='logo'>Суши мания</span>
      <FaShoppingBasket className='shop-icon-btn' onClick={() => setModalBlock(modalBlock = !modalBlock)} />
      

      {
        modalBlock && (
          <div className='modal-block'>
            
            {props.order.map(el => (
              <OrderItem item={el} onDelete={props.onDelete}/>
            ))}
             </div>
          
        )
      }
      
      
      <ul className='nav'>
        <li className='nav-item'>Главная</li>
        <li  className='nav-item'>О нас</li>
        <li  className='nav-item'>Контакты</li>
      </ul>
      <div className='presentation'></div>
    </div>

    </header>  )
}

export default Header
