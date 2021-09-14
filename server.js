const express = require('express');
const app = express();
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');

app.use(express.static('public'));
const PORT = process.env.PORT || 4001;

// app.use('/endpoint', (req,res,next)=>{
//     console.log('This is an example of custom middleware.');
//     next();
// })

app.use(bodyParser.json());
app.use(morgan('dev'));

//Registering routers needs to come after middleware
app.use('/endpoint', router);

router.get('/', (req, res, next) => { 
    res.status(200).send('Ok Response...');
})

router.post('/', async (req, res, next) => {
const response = await req.body;
res.send(response.name);
});

//   app.use((err, req, res, next) => {
//     res.status(500).send(err);
//   });
app.use(errorhandler())
// Place server at bottom

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
 
  /*
  curl -X POST -d "userId=5&title=stuff&body=stuff" http://localhost:4001/endpoint
  curl -X POST -H "Content-Type: application/json" -d '{ "item": { "number": 3, "numberId" 2, "name": "dan" } }' http://localhost:4001/endpoint
  */