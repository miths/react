import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Fade } from 'reactstrap'
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

function RenderItem({item, isLoading, errMess}){
  if (isLoading){
    console.log(item, isLoading, errMess)
    return(
      <Loading/>
    )

  }
  else if (errMess){
    console.log(item, isLoading, errMess)
    return(
      <h4> {errMess} </h4>
    )
  }
  else {
    console.log('else', item, isLoading, errMess)
    return (
      <FadeTransform
        in transformProps={{
          exitTransform: 'scale(.5) translateY(-50%)'
        }}>
        <Card>
          <CardImg src={baseUrl + item.image} alt={item.name} />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
        </FadeTransform>
      
    )
  }
  
}

function Home(props){
  return (
    <div className='container'>
      <div className='row align-items-start'>
        <div className='col-12 col-md m-1'>
          {console.log(props)}
          <RenderItem item={props.dish}
           isLoading={props.dishesLoading}
            errMess={props.dishesErrMess}/>
        </div>
        <div className='col-12 col-md m-1'>
        <RenderItem item={props.promotion}
            isLoading={props.promosLoading} 
            errMess={props.promosErrMess}/>
        </div>
        <div className='col-12 col-md m-1'>
        <RenderItem item={props.leader}
          isLoading= {props.leadersLoading}
          errMess= {props.leadersErrMess} />
        </div>
      </div>
    </div>
  )
}

export default Home;
