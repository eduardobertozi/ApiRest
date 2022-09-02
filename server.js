import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
  console.log(`CRTL + Click http://localhost:${port}`);
});
