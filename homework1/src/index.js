import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const options = {
    thumbnailData:  [{
        title: 'Show Courses',
        number: 12,
        header: 'Learn React',
        description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
        imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
    },{
        title: 'Show Courses',
        number: 25,
        header: 'Learn Gulp',
        description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
        imageUrl: 'http://brunch.io/images/others/gulp.png'
    }],
    headerData: [1,2,3,4,5,5,6],
    footerData: {
        email: 'dykyjhutsul@gmail.com',
        link: 'https://github.com/Dykyjhutsul',
    },
};

ReactDOM.render(<App options={options}/>, document.getElementById('root'));
registerServiceWorker();
