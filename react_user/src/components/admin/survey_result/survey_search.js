import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SurveySearch(props) {
    const years = [];

    for (let i = 2019; i < (new Date().getFullYear() + 5); i++) {
        years.push(
            <option key={i}>{i}</option>
        );      
    }

    return (
        <Form>
            <Row>
                <Form.Group as={Col}>
                    <Form.Label>Survey Type:</Form.Label>
                    <Form.Control 
                        as="select"
                        custom name="type"
                        required
                        defaultValue= 'Senior' 
                        onChange={props.onChangeHandle}>
                        <option>Senior</option>
                        <option>Alumni</option>
                        <option>Iab</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Year:</Form.Label>
                    <Form.Control 
                        as="select"
                        custom name="year"
                        required
                        defaultValue= {new Date().getFullYear()} 
                        onChange={props.onChangeHandle}>
                        {years}
                    </Form.Control>
                </Form.Group>
                {/* <Form.Group as={Col}>
                    <Button onClick={() => window.printPreview() }> Print </Button>
                </Form.Group> */}
            </Row>
        </Form>
    );
}

export default SurveySearch;