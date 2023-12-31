
// Define the data function for creating a blog post
function createPost(id, title, content, author) {
    return {
      id: id,
      title: title,
      content: content,
      author: author,
    };
  }
  
  // Define the data array for the blog posts
  const posts = [
    createPost(1, 'Hello World', 'This is my first blog post', 'Laalisa'),
    createPost(2, 'Express JS', 'This is a blog post about Express JS', 'Galata'),
    createPost(3, 'RESTful API', 'This is a blog post about RESTful API', 'Firaol'),
  ];

  // Create a route and a handler for GET /posts
exports.getAllposts = (req, res) => {
    // Send the posts array as a JSON response
    res.status(200).json(posts);
  };
  
  // Create a route and a handler for GET /posts/:id
  exports.getPosts = (req, res) => {
    // Get the id parameter from the request
    const id = req.params.id;
  
    // Find the post with the given id in the posts array
    const post = posts.find((p) => p.id == id);
  
    // If the post exists, send it as a JSON response
    if (post) {
      res.json(post);
    } else {
      // If the post does not exist, send a 404 status code and a message
      res.status(404).send('Post not found');
    }
  };
  
  // Create a route and a handler for POST /posts
  exports.postPosts = (req, res) => {
    // Get the data from the request body
    const data = req.body;
  
    // Validate the data
    if (data.title && data.content && data.author) {
      // If the data is valid, create a new post object with a new id
      const newId = posts.length + 1;
      const newPost = createPost(newId, data.title, data.content, data.author);
  
      // Add the new post to the posts array
      posts.push(newPost);
  
      // Send a 201 status code and the new post as a JSON response
      res.status(201).json(newPost);
    } else {
      // If the data is invalid, send a 400 status code and a message
      res.status(400).send('Invalid data');
    }
  };
  
  // Create a route and a handler for PUT /posts/:id
  exports.putPosts = (req, res) => {
    // Get the id parameter from the request
    const id = req.params.id;
  
    // Get the data from the request body
    const data = req.body;
  
    // Validate the data
    if (data.title && data.content && data.author) {
      // If the data is valid, find the post with the given id in the posts array
      const post = posts.find((p) => p.id == id);
  
      // If the post exists, update its properties with the data
      if (post) {
        post.title = data.title;
        post.content = data.content;
        post.author = data.author;
  
        // Send a 200 status code and the updated post as a JSON response
        res.status(200).json(post);
      } else {
        // If the post does not exist, send a 404 status code and a message
        res.status(404).send('Post not found');
      }
    } else {
      res.status(400).send('Invalid data');
    }
  };
  
  // Create a route and a handler for DELETE /posts
  exports.deleteAllPost =  (req, res) => {
    // Clear all posts
    posts.length = 0;
    res.status(204).send();
  };
  
  // Create a route and a handler for DELETE /posts/:id
  exports.deletePost = (req, res) => {
    // Get the id parameter from the request
    const id = req.params.id;
  
    // Find the index of the post with the given id in the posts array
    exports.index = posts.findIndex((p) => p.id == id);
  
    // If the post exists, remove it from the array
    if (index !== -1) {
      posts.splice(index, 1);
      res.status(204).send();
    } else {
      // If the post does not exist, send a 404 status code and a message
      res.status(404).send('Post not found');
    }
  };