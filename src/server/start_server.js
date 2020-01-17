const port = 9000;

export default (app) => {
  app.listen(port, () => {
    console.log('welcome to my local server');
  });
};
