# Petful Adoption Service API

## Team members:  
Marlon Agno  
Quasar Wei

## Tech stack:  
Node  
express  
mocha  
chai  

## Endpoints:  

``/api/cat``

| Method      | Usage                 | Returns      |
| ------      | -----                 | -------      |
| GET         | Get all cats from db  | Array of cat objects          | 
| DELETE      | Dequeues from Cats and People queues and adds dequeued person as cat's adopter  | Empty Response            | 

``/api/dog``

| Method      | Usage                 | Returns      |
| ------      | -----                 | -------      |
| GET         | Get all cats from db   | Array of dog objects          | 
| DELETE      | Dequeues from Dogs and People queues and adds dequeued person as dogs's adopter   | Empty Response           | 

``/api/people``

| Method      | Usage                 | Returns      |
| ------      | -----                 | -------      |
| GET         | Get all people in the adopter queue  | Array of people           | 
| POST        | Takes a name and enqueues that person into the adopter queue   | Empty Response          | 