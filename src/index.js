const express = require('express');
const { request, response } = require('express');
 
const app = express();









app.get('/projects', (request, response)=>{
    
   const {title, owner } = request.query;
   console.log(title);
   console.log(owner);
   
   return response.json([
        'project 1',
        'project 2',
        'project 3',
    ]);
});
app.post('/projects', (request, response)=>{
    return response.json([
        'project 1',
        'project 2',
        'project 3',
        'project 5',
    ]);
});

app.put('/projects/:id', (request, response)=>{
    return response.json([
        'project 6',
        'project 2',
        'project 3',
        'project 5',
    ]);
});
app.delete('/projects/:id', (request, response)=>{
    return response.json([
        
        'project 2',
        'project 3',
        'project 5',
    ]);
});



app.listen(3333, ()=> {
    console.log('Back-end loading...™\nBack-end Live!✔');
});
