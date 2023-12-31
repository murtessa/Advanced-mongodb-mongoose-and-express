// Define the data function for creating a user
function createUser(id, title, content, author) {
    return {
      id: id,
      title: title,
      content: content,
      author: author,
    };
  }
  
  
  // Define the data array for the users
  const users = [
    createUser(1, 'John Doe', 'This is John\'s profile', 'john_doe@example.com'),
    createUser(2, 'Jane Smith', 'This is Jane\'s profile', 'jane_smith@example.com'),
    createUser(3, 'Bob Johnson', 'This is Bob\'s profile', 'bob_johnson@example.com'),
  ];
  
  
  
  
  // USER OPERATION 
  
  // Create a route and a handler for GET /users
  exports.getAllUsers = (req, res) => {
    // Send the users array as a JSON response
    res.status(200).json(users);
  };
  // Create a route and a handler for GET /users/:id
  exports.getUser = (req, res) => {
    // Get the id parameter from the request
    const id = req.params.id;
  
    // Find the user with the given id in the users array
    const user = users.find((u) => u.id == id);
  
    // If the user exists, send it as a JSON response
    if (user) {
      res.json(user);
    } else {
      // If the user does not exist, send a 404 status code and a message
      res.status(404).send('User not found');
    }
  };
  
  // Create a route and a handler for POST /users
  exports.postUser = (req, res) => {
    // Get the data from the request body
    const data = req.body;
  
    // Validate the data
    if (data.title && data.content && data.author) {
      // If the data is valid, create a new user object with a new id
      const newId = users.length + 1;
      const newUser = createUser(newId, data.title, data.content, data.author);
  
      // Add the new user to the users array
      users.push(newUser);
  
      // Send a 201 status code and the new user as a JSON response
      res.status(201).json(newUser);
    } else {
      // If the data is invalid, send a 400 status code and a message
      res.status(400).send('Invalid data');
    }
  };
  
  // Create a route and a handler for PUT /users/:id
  exports.putUser = (req, res) => {
    // Get the id parameter from the request
    const id = req.params.id;
  
    // Get the data from the request body
    const data = req.body;
  
    // Validate the data
    if (data.title && data.content && data.author) {
      // If the data is valid, find the user with the given id in the users array
      const user = users.find((u) => u.id == id);
  
      // If the user exists, update its properties with the data
      if (user) {
        user.title = data.title;
        user.content = data.content;
        user.author = data.author;
  
        // Send a 200 status code and the updated user as a JSON response
        res.status(200).json(user);
      } else {
        // If the user does not exist, send a 404 status code and a message
        res.status(404).send('User not found');
      }
    } else {
      res.status(400).send('Invalid data');
    }
  };
  
  // Create a route and a handler for DELETE /users
  exports.deleteAllUsers = (req, res) => {
    // Clear all users
    users.length = 0;
    res.status(204).send();
  };
  
  // Create a route and a handler for DELETE /users/:id
  exports.deleteUser = (req, res) => {
    // Get the id parameter from the request
    const id = req.params.id;
  
    // Find the index of the user with the given id in the users array
    const index = users.findIndex((u) => u.id == id);
  
    // If the user exists, remove it from the array
    if (index !== -1) {
      users.splice(index, 1);
      res.status(204).send();
    } else {
      // If the user does not exist, send a 404 status code and a message
      res.status(404).send('User not found');
    }
  };