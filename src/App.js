
import React from "react";
import Header from "./components/Header";
import TextBlock from "./components/TextBlock";
import Catalog from "./components/Catalog";
import Categories from "./components/Categories";



class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      orders:[],
      items:[
        {
          id:1,
          title:'Ролл-Калифорния',
          subtitle:'Какое-то описание',
          price:500,
          categories:'cool',
          img:"california.png"
        },

        {
          id:2,
          title:'Ролл-Филадельфия',
          subtitle:'Какое-то описание',
          price:600,
          categories:'cool',
          img:"filadelfia.jpg"
        },

        {
          id:3,
          title:'Ролл-запеченый',
          subtitle:'Какое-то описание',
          price:700,
          categories:'hot',
          img:"hot-rol.jpg"
        }

    ],

    curentItems:[]
    
    }

    this.addToOrder = this.addToOrder.bind(this);
    this.DeleteOrder = this.DeleteOrder.bind(this);
    this.changeCategories = this.changeCategories.bind(this);
  }
  render(){
    return (
      <div className="App">
        <div className="wrapper">
          <Header order={this.state.orders} onDelete={this.DeleteOrder}/>
          <TextBlock/>
          <Categories changeCategories={this.changeCategories}/>
          <Catalog items={this.state. curentItems} onAdd={this.addToOrder} />
          
        </div> 
      </div>
    );
  }

  addToOrder(e){

    let isInArray = false;

    this.state.orders.forEach(el => {
      if(el.id === e.id)
        isInArray = true
    })

    if(!isInArray)
    this.setState({orders:[...this.state.orders, e]});
    console.log(this.state.orders);
  }


  DeleteOrder(id){

    this.setState({orders:this.state.orders.filter(el => el.id !== id)})
  }



  changeCategories(key){

    if(key === "all"){
      this.setState({curentItems:this.state.items});
      return
    }else{
        this.setState({curentItems:this.state.items.filter(el => el.categories === key)});
    }

    

    

  }
 
}

export default App;