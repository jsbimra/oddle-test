import React from 'react';
import ReactDOMServer from 'react-dom/server';


//import our main app component
import App from '../../src/components/app';

const path = require('path');
const fs = require('fs');

export default (req, res, next) => {

    //get the html file build from CRA build too
    const filePath = path.resolve(__dirname,'..', '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
      if(err) {
          console.log('Error from rendering file ', err);
          return res.status(404).end()
      }

      //or else render the app as string value
      const html = ReactDOMServer.renderToString(<App />);

      //inject the rendered app into our html and send it 

      return res.send(
          htmlData.replace('<div id="root></div>', `<div id="root>${html}</div>`);
      );

    })
};