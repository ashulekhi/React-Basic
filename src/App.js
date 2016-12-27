/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'
import A from './HelloWorld'
import Greet from './Header'
import User from './users'
import Basic from './BasicPage'
import UserPage from './UserPage'


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

  render() {
    return (
     /* <Greet isLoggedIn = {true} />,
      <User> </User>*/
      //<Basic></Basic>
      <UserPage></UserPage>
    )
  }

}




