import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { DISHES } from 'D:/ATOM docs/REACT/confusion/src/shared/dishes';

class DishDetail extends Component {

  constructor(props){
    super(props);

    this.state={
    }
  }

  componentDidMount(){
    console.log('DDComponent mount')
    console.log(this.props.dish)
  }

  componentDidUpdate(){
    console.log(this.props.dish)
  }

  renderComments(dish){
    console.log('yes')
    if (dish!=null & dish.comments!=null){
      console.log('yes')
      const displayComment = dish.comments.map((com)=>{
        return(
          <div>
            <ul className='list-unstyled' key={com.id}>
              <li>{com.comment}</li>
              <li>--{com.author}, {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit'
              }).format(new Date(com.date))}</li>
              <br/>
            </ul>
          </div>
        );
      })

      return(
        <div className='col-12 col-md-5 m-1'>
        <h4>Comments</h4>
        {displayComment}
        </div>
      )
    }
    else{
      return(
        <div></div>
      )
    }
  }




  renderDish(dish) {
    console.log(dish)

      if (dish != null){
        console.log('yesss')
          return(
            <div className='row'>
            <div className='col-12 col-md-5 m-1'>
              <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
              </div>
              {this.renderComments(dish)}
              </div>
          );
        }
      else{
        console.log('else')
          return(
              <div></div>
          );
        }
  }




  render(){



    return (
        <div className='container'>
            {this.renderDish(this.props.dish)}
        </div>
    );
  }

}

export default DishDetail;
