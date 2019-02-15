import express from 'express';

import serverRender from './middleware/renderer';

const PORT = 3000;
const path = require('path');

//initalize the application and creates the routes
const app = express();
const router = express.Router();

//root (/) should always serve our render page
router.use('*', serverRender);

//other static resources should just be served as they are
rotuer.use(express.static(
    path.resolve(__dirname,'..', 'build'),
    { maxAge: '30d' },
))

//tell the app to use above rule
app.use(router);

//start the app 
app.listen(PORT, (error) => {
    if(error) {
        return console.log('Something wierd happened ', error);
    }

    console.log(`Listening on PORT ${PORT} ...`);

});