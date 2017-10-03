import React, { Component } from 'react';

import Thumbnail from './Thumbnail.js';

class ThumbnailList extends Component {
	constructor(props){
		super(props);
	}
  render() {
	var list = this.props.options.map(
		function(item){
			return <Thumbnail {...item} />
		}
	);  
    return (
		<div className="panel-body">		
			{list}
		</div>
		
    );
  }
}

export default ThumbnailList;