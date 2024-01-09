const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname,'./views/home.html'));
})

app.listen(port,() => console.log(`http://localhost:${port}`));

