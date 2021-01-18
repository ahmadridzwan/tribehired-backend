const fetch = require('node-fetch');

// Retrieve all comments
module.exports.getAllComments = async (req, res) => {
  const api_url = 'https://jsonplaceholder.typicode.com/comments';
  const response = await fetch(api_url);
  const json = await response.json();
  return json;

};

// Search comments with a query
module.exports.searchComments = async (req, res) => {
  // Extract query from the request
  const query = (req.query.query) ? req.query.query : '' ;
  // Retrieve all comments
  const allComments = await this.getAllComments();
  
  // Proceed if comments retrieved successfully
  if (allComments.length > 0) {
    try {
      // Get the fields (keys) of a comment object
      const commentFields = Object.keys(allComments[0]);
      // Initialise array to put all comments that match query
      const matchingComments = [];
      // Loop the comments and fields, and find if any matches the query
      allComments.map(comment => {
        commentFields.map(field => {
          // If a field matches query, push into matchingComments array
          if (comment[field] === query) {
            matchingComments.push(comment);
          }
        })
      })
      // display the matching comments
      res.send((matchingComments.length > 0) ? matchingComments : 'No matches found!');

    } catch (error) {
      console.error(error);
    }
  }
};