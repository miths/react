import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { DISHES } from 'D:/ATOM docs/REACT/confusion/src/shared/dishes';

function renderDish(dish){
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
            {renderComments(dish)}
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

function renderComments(dish){
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

const DishDetail= (props)=> {
  return(
  <div className='container'>
      {renderDish(props.dish)}
  </div>
);
}


export default DishDetail;
