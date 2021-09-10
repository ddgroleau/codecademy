const express = require('express');
const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });

  app.get('/',(req,res,next)=>{
      res.status(200).send('Hello World!');
  });