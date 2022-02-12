import express from 'express';

const server = express();





const port = 5000;
server.listen(process.env.PORT_ERROR || port, () => {
    console.log(`Server of Error runing in Port ${process.env.PORT_ERROR || port}`);
});