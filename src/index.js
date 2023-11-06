const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routers/index');  

// const UserService = require('./services/user-service');
 
const db = require('./models/index');


const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on Port: ${PORT}`);

        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true});

        }

 


        // const service = new UserService();
        // const newToken = service.createToken({email: 'sanket@admin.com', id: 1});
        // console.log("new token is", newToken);
        // const token =  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmtldEBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNjk5MDA2NzIxLCJleHAiOjE2OTkwOTMxMjF9.KB-ShyKyZ4eoCZWLKTsFbxYxgDG-BB0PEqfCquNB_LA
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmtldEBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNjk5MDA2ODkzLCJleHAiOjE2OTkwOTMyOTN9.OR6UYW8L66ZZS5lh351D8pbgKwJfLwhW6eHFCcF1M3M';

        // const response = service.verifyToken(token);
        // console.log(response);
        
    });
}   

prepareAndStartServer();





