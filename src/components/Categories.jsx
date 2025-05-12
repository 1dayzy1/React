import React, { Component } from 'react'

export class Categories extends Component {

    constructor(props){
        super(props)
        this.state={
            categories:[
                {
                    key:'hot',
                    name:'Горячие'
                },

                {
                    key:'cool',
                    name:'Холодные'
                },

                {
                    key:'all',
                    name:'Все'
                }
            ]
        }
    }

  render() {
    return (
      <div>
        {this.state.categories.map(el => (
            <div onClick={() => this.props.changeCategories(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories
