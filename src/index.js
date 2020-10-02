const express = require('express');


const { uuid } = require('uuidv4');
const { request, response } = require('express');
 
const app = express();
app.use(express.json());







const projects = [];

function logRequests(request, response, next){
    const { method, url } = request;

    const logLabel = '[${method.toUpperCase()}] ${url}';
    console.log(logLabel);

}

app.use(logRequests);

app.get('/projects', (request, response)=>{
    
   //const {title, owner } = request.query;
   //console.log(title);
   //console.log(owner);
   
   return response.json(projects);
});
app.post('/projects', (request, response)=>{
    const { title, owner } = request.body;
    const project = { id: uuid(), title, owner };
    projects.push(project);

    return response.json(project);
});

app.put('/projects/:id', (request, response)=>{
    const params = request.params;
    console.log(params);
    
    return response.json([
        'project 4',
        'project 2',
        'project 3',
        
    ]);
});
app.delete('/projects/:id', (request, response)=>{
    return response.json([
        
        'project 2',
        'project 3',
       
    ]);
});



app.listen(3333, ()=> {
    console.log('Back-end loading...™\nBack-end Live!✔');
});
