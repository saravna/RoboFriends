import React, {Component} from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError:true})
    }

    render(){
        // eslint-disable-next-line
            if(this.state.hasError){
                return (<h1>OOOOOOOPPPPPPSSSSSSS NO FRIENDS FOUND IN THIS NAME........!!!!!!</h1>);
            }
            return this.props.children;
    }
}

export default ErrorBoundary;