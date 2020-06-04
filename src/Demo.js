import React,{Component} from 'react';
import ReactDOM from 'react-dom' ; 
import './Demo.css' ;

class Demo extends Component{
	render() { 
		return <div  className="maindiv_style">
				<h1>Hello {this.props.name} </h1>
				<p>Welcome</p>  
				</div>
	}
}  

export default Demo; 


{/*
for functional approach 
		const Demo = (props) => {
		return <div  className="maindiv_style">
				<h1>Hello {props.name} </h1>
				<p>Welcome</p>  
				</div>
	}

props get passed to the Component.
props are immutable (cannot be changed/modify)
props - functional components
this.props - class components.
*/}