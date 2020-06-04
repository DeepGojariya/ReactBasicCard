import React,{Component} from 'react' ;
import ReactDOM from 'react-dom' ;  
import './Avatar.css' ; 
import Avatarlist from './Avatarlist' ;
import 'tachyons' ;

	class Avatar extends Component{
		
		constructor(){
			super(); 
			this.state = {
				name : "Welcome to Guru Ghantal Research Centre(GGRC)!"
			}
		}

		namechange(){
			this.setState({
				name : "Welcome to bakchodi World!"
			})
		
		}

		render() {
			const avatarlistarray = [
			{
				id:1,
				name : "Deep Gojariya",
				photu: "jacques" , 
				work : "innocent Admin"
			},
			{
				id:2,
				name : "Tirth Jivani",
				photu : "jodi" , 
				work : "Hard to understand his messages..."
			},	

			{
				id:3,
				name : "Divyraj Vegad",
				photu : "jordan" , 
				work : "Oo.. Bhaibond... Avaj nahi ho.."
			},

			{
				id:4,
				name : "Deep Gohel",
				photu : "jed",
				work : "Mind of presence(Akmal)..."
			}

		]

	const arrayavatarcard = avatarlistarray.map((avatarcard , i)=>{
		return <Avatarlist key={i} id="1" photu={avatarlistarray[i].photu}
								name={avatarlistarray[i].name}
								work = {avatarlistarray[i].work}/> 

	})

		return (
				<div className="mainpage">
					<h1> {this.state.name}</h1>
						{arrayavatarcard}
					<button onClick = {()=> this.namechange()}> Request to join GGRC </button>
				</div>
			)	
		}
	}	

export default Avatar;