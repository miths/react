import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { DISHES } from 'D:/ATOM docs/REACT/confusion/src/shared/dishes';
import { Link } from 'react-router-dom';
import { CommentForm } from './CommentFormComponent';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';


const RenderDish=({dish})=>{
  console.log(dish)
    if (dish != null){
      console.log('yesss')
      return(
        // <div className='row'>
        // <div className='col-12 col-md-5 m-1'>
        <FadeTransform 
          in transformProps={{
            exitTransform: 'scale(.5) translateY(-50%)'
          }}>
            <Card>
              <CardImg top src={baseUrl + dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </FadeTransform>
          
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

function RenderComments({commArr, postComment, dishId}){
  console.log('yes')
  if (commArr!=null){
    console.log('yes')

    const displayComment = commArr.map((com)=>{
      return(
        <Stagger in>
        <div>
            <ul className='list-unstyled' key={com.id}>
              <Fade in>
                <li>{com.comment}</li>
                <li>--{com.author}, {new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit'
                }).format(new Date(com.date))}</li>
              </Fade>
                <br />
              
            </ul>
        </div>
        </Stagger>
      );
    })

    return(
      <div>
      <h4>Comments</h4>
      {displayComment}
      <CommentForm dishId= {dishId} postComment={postComment} />
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
  if (props.isLoading){
    return (
      <div className='container'>
        <div className='row'>
          <Loading/>
        </div>
      </div>
    )
  }

  else if (props.errMess){
    return (
      <div className='container'>
        <div className='row'>
          <h4>{props.errMess}</h4>
        </div>
      </div>
    )
  }

  else if (props.dish!=null){
    console.log(props.dish)
    return (
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
              postComment={props.postComment}
              dishId={props.dish.id} />
          </div>
        </div>
      </div>
    );
  }
  }
  


export default DishDetail;
