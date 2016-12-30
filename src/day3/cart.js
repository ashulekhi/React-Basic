/**
 * Created by ashu on 29/12/16.
 */

import React from 'react'

export default class Cart extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      Items  : [ {name: 'item1', qty:2, price: 30}, {name: 'item2', qty:5, price: 10}, {name: 'item3', qty:7, price: 120} ]
    }
  }

  render(){

    return(
      <div>
        <InputItem />
        <Item items = {this.state.Items} ></Item>
        <CartTotal items = {this.state.Items} ></CartTotal>

      </div>
    )

  }

}


class Item extends React.Component{
  constructor(props){
    super(props)

    this.increaseQuantity = this.increaseQuantity.bind(this)
    this.decreaseQuantity = this.decreaseQuantity.bind(this)
  }


  increaseQuantity(i){
    let initialState = this.props.items;
    console.log('this is the state' , initialState);
    initialState[i].qty = initialState[i].qty + 1 ;
    this.setState({
      Items: initialState
    })
  }

  decreaseQuantity(i){
    let initialState = this.props.items;
    initialState[i].qty = initialState[i].qty - 1 ;
    this.setState({
      Items: initialState
    })
  }

  render(){

    let itemDetails  = this.props.items;
    const itemList = itemDetails.map((itemDetail,i) => <tr><td>{itemDetail.name}</td><td>{itemDetail.qty}</td><td>{itemDetail.price}</td><td><button onClick={()=>this.increaseQuantity(i)}>+</button></td><td><button onClick={()=>this.decreaseQuantity(i)}>-</button></td><td><button>Remove</button></td></tr> );


    return(
      <table> {itemList} </table>
    )
  }


}

class CartTotal extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    let itemDetails  = this.props.items;
    let  totalValue = itemDetails.reduce((total,itemDetail) =>  total + (itemDetail.qty * itemDetail.price),0)
    return(
      <div>Total Cart value is {totalValue} </div>
    )
  }


}


class InputItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <form>
        <input type="text" ></input>
        <button>Add Item</button>
      </form>



    )
  }


}

