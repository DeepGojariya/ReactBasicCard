import React from 'react' ;
import './Avatarlist.css' ; 
const Avatarlist = (props) => {
	return (
		<div className = "avatarstyle ma4 bg-blue dib pa3 grow shadow-40" >
			<img src={`https://joeschmoe.io/api/v1/${props.photu}`} alt="Avatar"  />
				<h1 className=""> {props.name} </h1>
				<p> {props.work} </p>
		</div>
	)

} 

export default Avatarlist; 