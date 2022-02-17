# Backend Challenge

#### [Deploy Link](https://backend-challenge-estoes.herokuapp.com)

#### [Swagger Documentation](https://backend-challenge-estoes.herokuapp.com/api/docs)

## Environment setup

1) Create database
 
2) Copy .env.example to .env and fill with database credentials.
 
3) Install dependencies
``` bash
npm install
```

4) Migrations and Seeders 
``` bash
npm run db
```

## Start local server
``` bash
npm start
```

## Seeders info

#### Projects
| id | name | description | managerId | statusId | users (map table) |
| -- | -------- | -------- | -------- | -------- | -------- |
| 1  | Landing Page  | Landing page for ONG | 1 (Agustin Perez) | 1 (Enabled) | [2, 3] (Fabricio Chavez, Pedro Garcia) |
| 2  | E-Commerce Shop | Online store for foreign client | 1 (Agustin Perez) | 1 (Enabled) |  |
| 3  | CRM Linkroom | `null` | 1 (Agustin Perez) | 2 (Disabled) | [2] (Fabricio Chavez) |
---------------------------------------------------------------------------------------

#### Users
| id | name | 
| -- | --------------- | 
| 1  | Agustin Perez  | 
| 2  | Fabricio Chavez  | 
| 3  | Pedro Garcia  | 
-----------------------------

#### Projects Status
| id | name | 
| -- | -------- | 
| 1  | Enabled  | 
| 2  | Disabled | 
-----------------------------
