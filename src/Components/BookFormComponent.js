import React, { Component, useState } from "react";
import {
    Button, Label, Row, Col
} from 'reactstrap';
import { HashRouter, Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const PublishedDate = () => {
    const [date, setDate] = useState(new Date());
    return (
        <DatePicker id="getDate" selected={date} onChange={(date) => setDate(date)} />
    );
};
const required = (val) => val && val.length;
const isNumber = (val) => !isNaN(Number(val));
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

export class BookForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    handleSubmit(values) {
        var getDate = document.getElementById("getDate").value;
        const date = new Date(getDate);
        console.log(getDate)
        console.log(date)
        this.props.addItem(values.title, values.amount, date);


    }

    render() {
        return (
            <div class="book-form ">


                <div className="row row-content justify-content-center">

                    <div className="col-12 col-md-6">
                        <div class="add-book-form">
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)} >
                                <Row>
                                    <Col md={6}>
                                        <Row className="form-group">
                                            <Label htmlFor="title" md={12}>Book title</Label>
                                            <Col md={12}>
                                                <Control.text model=".title" id="title" name="title" placeholder="" className="form-control" validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
                                                <Errors className="text-danger" model=".title" show="touched" messages={{ required: 'Required', minLength: 'Must be greater than 3 characters', maxLength: 'Must be 15 charaters or less' }} />
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col md={6}>
                                        <Row className="form-group">
                                            <Label htmlFor="amount" md={12}>amount</Label>
                                            <Col md={12}>
                                                <Control.text model=".amount" id="amount" name="amount"
                                                    placeholder=""
                                                    className="form-control"
                                                    validators={{
                                                        required, minLength: minLength(0), maxLength: maxLength(10), isNumber
                                                    }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".amount"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required',
                                                        minLength: 'Must be greater than 0 numbers',
                                                        maxLength: 'Must be 10 numbers or less',
                                                        isNumber: 'Must be a number'
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>


                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="amount" md={12}>Published date</Label>
                                    <Col md={6}>

                                        <PublishedDate name="datepic"></PublishedDate>
                                        {/* <Control type="date" /> */}

                                    </Col>
                                </Row>


                                <div className="text-right">
                                    <Button type="" value="" color="primary" className="mr-2">Cancel</Button>
                                    <Button type="submit" value="submit" color="primary">Submit</Button>
                                </div>


                            </LocalForm>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}



export default BookForm


