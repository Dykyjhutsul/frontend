import React, { Component } from 'react';

import './App.css';
import Header from './Header.js';
import ThumbnailList from './ThumbnailList.js';
import Footer from './Footer.js';


class App extends Component {
	constructor(props){
		super(props);
	}
	
  render() {
    return (
		<div className="panel panel-default">
			<Header options={this.props.options.headerData}/>
			<ThumbnailList options={this.props.options.thumbnailData}/>
			<Footer options={this.props.options.footerData}/>
		</div>
    );
  }
}

export default App;
