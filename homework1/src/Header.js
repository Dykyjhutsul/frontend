import React, { Component } from 'react';


class Header extends Component {
	constructor(props){
		super(props);
	}
	
	renderLink(number,index){
		return (
			<li className="nav-item" key={index}>
				<a className="nav-link" href="#">
					{number}
				</a>
			</li>
		);
	}
  render() {
    return (
		<div className="panel-header">
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">WebSite</a>
					</div>
					<ul className="nav navbar-nav">
						{this.props.options.map((a,b) => this.renderLink(a,b))}
					</ul>
				</div>
			</nav>
		</div>
    );
  }
}

export default Header;