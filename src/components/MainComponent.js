import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Contact from './ContactComponent';

import AboutUs from './AboutComponent';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return{
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {

  constructor(props) {
    super(props);
  }

 

  componentDidMount(){
    console.log('MainComponent mount')
  }
  componentDidUpdate(){
    console.log(this.props.selectedDish)
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }




  render() {

    const DishWithId= ({match})=>{
      console.log(match.params.dishId)
      console.log(this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10)))
      return(
        <DishDetail
        dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        />
      )
    }

    const HomePage =() => {
      return (
        <Home
        dish={this.props.dishes.filter((dish)=> dish.featured)[0]}
        promotion={this.props.promotions.filter((promo)=> promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      )
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route exact path='/menu' component={()=> <Menu dishes={this.props.dishes}/>}/>
          <Route exact path='/contactus' component={Contact}/>
          <Route path='/menu/:dishId' component={DishWithId}/>
          <Route path='/aboutus' component={()=> <AboutUs leaders={this.props.leaders}/>}/>
          <Redirect to='/home'/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
