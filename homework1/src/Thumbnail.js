import React, { Component } from 'react';

import Badge from './Badge.js';

class Thumbnail extends Component {
	constructor(props){
		super(props);
	}
	
	render() {		
		return (
			<div className="col-sm-6 col-md-4 panel-body" >
				<div className="thumbnail ">
					<img src={this.props.imageUrl} alt="..."></img>
					<div className="caption">
						<h3>{this.props.header}</h3>
						<p>{this.props.description}</p>
						<p>
							<Badge title={this.props.title} number={this.props.number} />
						</p>
					  </div>    
				</div>
		  </div>
			
		);
	  }  
}

export default Thumbnail;