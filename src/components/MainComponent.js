import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  componentDidMount(){
    console.log('MainComponent mount')
  }
  componentDidUpdate(){
    console.log(this.state.selectedDish)
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }


  render() {
    return (
      <div>
        <Header/>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer/>
      </div>
    );
  }
}

export default Main;
