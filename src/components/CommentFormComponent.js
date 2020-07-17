import React, { Component } from 'react';
import { ModalHeader, FormGroup, Modal, Button, Row, ModalBody, Label } from 'reactstrap';
import { LocalForm, Control, Col, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => val && val.length<=len;
const minLength = len => val => !(val) || val.length>=len; 

export class CommentForm extends Component {
    constructor(props){
        super(props);

        this.state={
            isModalOpen: false,
        }
        
        this.toggleModal= this.toggleModal.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment)
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }

    render(){

        return(
            <div>
                <button outline onClick= {this.toggleModal}>
                    <span>
                        <i className='fa fa-pencil'></i> Submit Comment
                    </span>
                </button>
            

                <div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        {console.log(this.state.isModalOpen)}
                        <ModalHeader>
                            Submit Comment
                        </ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                                <Row className="form-group col-sm-10 offset-1">
                                        <Label htmlFor='rating'>
                                            Rating
                                        </Label>
                                        <Control.select model=".rating" name="rating"
                                            className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </Control.select>
                                </Row>

                                <Row className='form-group col-sm-10 offset-1'>
                                        <Label htmlFor='author'>
                                            Username
                                        </Label>
                                        <Control.text model='.author'
                                            id='author'
                                            name='author'
                                            placeholder='Your Name'
                                            className='form-control'
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }} />
                                        <Errors
                                            className='text-danger'
                                            model= '.username'
                                            show= 'touched'
                                            messages= {{
                                                required: 'Required ',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'

                                            }}
                                        />
                                        
                                </Row>

                                <Row className='form-group col-sm-10 offset-1'>
                                    <Label htmlFor='comment'>
                                        Comment
                                    </Label>
                                    <Control.textarea model='.comment'
                                    id='comment'
                                    name='comment'
                                    className='form-control'
                                    rows='6' />
                                </Row>

                                <Row className='form-group offset-1 col-sm-10' >
                                    <Button type='submit' color='primary'>
                                        Submit
                                    </Button>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>

            </div>

        )
    }
}
