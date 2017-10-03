import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
	constructor(props){
		super(props);
	}
  render() {
    return (
		<div className="panel-footer">
			<div>{this.props.options.email}</div>
			<div>
				<a href={this.props.options.link}>{this.props.options.link}
				</a>
			</div>
		</div>
    );
  }
}

export default Footer;