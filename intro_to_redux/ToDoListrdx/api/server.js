const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');
const { nanoid } = require('nanoid');

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());

let todos = [
  {
    id: nanoid(),
    title: 'todo 1',
    completed: true,
  },
  {
    id: nanoid(),
    title: 'todo 2',
    completed: false,
  },
  {
    id: nanoid(),
    title: 'todo 3',
    completed: false,
  },
  {
    id: nanoid(),
    title: 'todo 4',
    completed: false,
  },
  {
    id: nanoid(),
    title: 'todo 5',
    completed: false,
  },
];

app.get('/todos', (req, res) => res.send(todos));

app.post('/todos', (req, res) => {
  const todo = { title: req.body.title, id: nanoid(), completed: false };
  todos.push(todo);
  return res.send(todo);
});

//Asagıdaki kod  Kod, "/todos/:id" adresinde bir isteğe cevap verir ve isteğin yapıldığı ID'yi alır. Sonra, "todos" dizisinde, ID'ye eşit olan bir öğenin indexini bulur. İstekte gelen "completed" alanı Boolean değerine dönüştürülür ve eğer bulunan index pozitif bir değer ise, todos dizisi içindeki bulunan indexteki öğenin "completed" alanını günceller. En sonunda, güncellenen todo öğesi döndürülür.
app.patch('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  const completed = Boolean(req.body.completed);
  if (index > -1) {
    todos[index].completed = completed;
  }
  return res.send(todos[index]);
});

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  if (index > -1) {
    todos.splice(index, 1);
  }

  res.send(todos);
});

const PORT = 4000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));