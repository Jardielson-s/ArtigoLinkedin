import app from './app';

const server = app;
const port = 3000;

server.listen(process.env.PORT || port, () => {
    console.log(`Server running in Port ${process.env.PORT || port}`);
})