import React, { Component } from 'react'
import Item from './Item'
export class Catalog extends Component {
  render() {
    return (
      <div>
        <div>
            <h1>Каталог</h1>
            <div className='container-main'>

              {this.props.items.map(el=>(

                    <Item item={el} onAdd={this.props.onAdd}/>
              ))}
            </div>
         </div>
      </div>
    )
  }
}

export default Catalog
