const express = require('express');
const app = express();
const listItem = require('./list');
app.use(express.urlencoded({ extended: true }));
let idItem = 3
function getItem() {
  return listItem.map((item) => {
    return `
      <div>
        <ul>
          <li>id: ${item.id}</li>
          <li>name: ${item.name}</li>
          <li>description: ${item.des}</li>
        </ul>
      </div>
    `;
  });
}

const formHTML = `
  <div>
  <form action="/abc" method="post">
    <label >ID:</label>
    <input type="text" id="id" name="id">

    <label>Name:</label>
    <input type="text" id="name" name="name">

    <label>Description:</label>
    <input type="text" id="des" name="des">

    <input type="submit" value="Submit">
  </form>
  </div>
`;

app.get('/', (req, res) => {
  const items = getItem().join('');
  res.send(formHTML + items);
});

app.post('/abc', (req, res) => {
    const newItem = {
    id: idItem,
    name: req.body.name,
    des: req.body.des
  };
  idItem++

  listItem.push(newItem);

  const items = getItem().join('');
  res.send(formHTML + items);
});

app.listen(5007, () => {
  console.log('Server is running on port 5007');
});