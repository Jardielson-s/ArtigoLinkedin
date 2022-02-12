import express from 'express';

const server = express();





const port = 4000;
server.listen(process.env.PORT_REPOSITORY || port, () => {
    console.log(`Server of Error runing in Port ${process.env.PORT_REPOSITORY || port}`);
});