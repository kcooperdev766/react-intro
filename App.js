import React from 'react';
import ReactDOM from 'react-dom/client';


const heading = React.createElement('h1', {id: 'parent', xyz: 'xyz'}, 'this is a parent')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)