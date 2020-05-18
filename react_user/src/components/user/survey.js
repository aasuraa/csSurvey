import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';

class Survey extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.value,
        };
    }

    // when the component mounts, get express query of surveys
    componentWillMount(){
        this.getQuery();
    }

    getQuery(){
        fetch("http://localhost:9000/users/surveys/"+this.state.name)
            .then(res => res.text())
            .then(res => console.log(res));
    }



    render(){
        return(
            <Container className="bg-light">
                {this.state.name}
            </Container>
        );
    }
}

export default Survey;