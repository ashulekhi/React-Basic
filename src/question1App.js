/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'
import A from './HelloWorld'
import Greet from './Header'
import User from './users'
import Prop from './PropTypes'
import Water from './Day2/question1'
import UserDetail from './Day2/question3'
import ShoppingCart from './Day2/question5'
import StopWatch from './Day2/question6'
import {Link} from 'react-router'

class Student {

  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }

  display(){
    console.log(this.name);
    console.log(this.rollNo)
  }

}

let student1 = new Student('Ashu' , 1);
let student2 = new Student('xyz' ,2);

student1.display();
student2.display();


export default class App extends React.Component {
  constructor() {
    super()
  }

  goToContact(){

  }

  render() {
    const user1 = [
      {name: 'John', age: 25, avatar: 'https://randomuser.me/api/portraits/men/15.jpg'},
      {name: 'Joe', age: 35, avatar: 'https://randomuser.me/api/portraits/men/13.jpg'},
      {name: 'Andrei', age: 45, avatar: 'https://randomuser.me/api/portraits/men/10.jpg'},
      {name: 'Ted', age: 29, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
      {name: 'Ben', age: 30, avatar:'https://randomuser.me/api/portraits/men/2.jpg' }
    ];


    return (
      /*<Greet isLoggedIn = {true} />,
      <User> </User>*/
      //<Prop></Prop>
      //<Water />
      //<UserDetail user = {user1} />
      //<ShoppingCart />
      //  <StopWatch> </StopWatch>
      <div>
        This is Routing
        <li>Home</li>
        <li> <Link to="/aboutus">Aboutus</Link></li>
        <li><Link to="/contactus">Contactus</Link></li>
        <li><Link to="/users">users</Link></li>
        <button onClick={this.goToContact}>Go to contact</button>
        {this.props.children}
      </div>

    )}

}




