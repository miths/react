import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { DISHES } from 'D:/ATOM docs/REACT/confusion/src/shared/dishes';
import { Link } from 'react-router-dom';
import { CommentForm } from './CommentFormComponent';

const RenderDish=({dish})=>{
  console.log(dish)
    if (dish != null){
      console.log('yesss')
      return(
        // <div className='row'>
        // <div className='col-12 col-md-5 m-1'>
          <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
          </Card>
        // </div>
        // </div>
      );
    }
    else {
      console.log('else')
      return(
            <div></div>
        );
      }
}

function RenderComments({commArr, addComment, dishId}){
  console.log('yes')
  if (commArr!=null){
    console.log('yes')

    const displayComment = commArr.map((com)=>{
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
      <div>
      <h4>Comments</h4>
      {displayComment}
      <CommentForm dishId= {dishId} addComment={addComment} />
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
  console.log(props.dish)
  return(
    <div className="container">
  <div className="row">
      <Breadcrumb>

          <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
      </Breadcrumb>
      <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
      </div>
  </div>
  <div className="row">
      <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
      </div>
      <div className="col-12 col-md-5 m-1">
          <RenderComments commArr={props.comments} 
                          addComment={props.addComment}
                          dishId = {props.dish.id} />
      </div>
  </div>
  </div>
);
}


export default DishDetail;
