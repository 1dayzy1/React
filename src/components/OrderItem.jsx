import React, { Component } from 'react'
import { FiDelete } from "react-icons/fi";

export class OrderItem extends Component {


    constructor(props){
    super(props)

    this.state={
        count:1,
    }
    }




  render() {
    return (
        <div className='order-wrapper'>

            <div className='item-draw'>
                <img src={"./img/"+this.props.item.img} className='img-item' />
                <h2 className='itemTitle'>{this.props.item.title}</h2>
                <h2 className='itemPrice'>{this.props.item.price} Руб.</h2>

        

                <FiDelete size={20} onClick={() => this.props.onDelete(this.props.item.id)} />
        
            </div>


            <div className='container-button'>
                <div>
                    <button onClick={() => this.setState({count:this.state.count+1})}>+</button>
                    <button onClick={() => this.setState({count:this.state.count-1})}>-</button>
                </div>
                <h2>Колличество:{this.state.count}</h2>
            </div>
        </div>
      
    )
  }
}

export default OrderItem
