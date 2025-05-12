import React, { Component } from 'react'

export class Item extends Component {

  

  render() {
    return (
      <div className='wrapper-item'>
        <div className='item'>


            <img src={"./img/" + this.props.item.img} className='img-item' alt='image-rol'/>
            <h2>{this.props.item.title}</h2>
            <h2>{this.props.item.price}</h2>
            <h2>{this.props.item.subtitle}</h2>
            <h2>{this.props.item.categories}</h2>


            <button className='addToOrders' onClick={() => this.props.onAdd(this.props.item)} >+</button>
            

        </div>
      </div>
    )
  }
}

export default Item;
