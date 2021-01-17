const fetch = require('node-fetch');
const { getAllComments } = require('./commentController');

// Retrieve all posts, sorted by top-commented
module.exports.getAllPosts = async (req, res) => {
  const api_url = 'https://jsonplaceholder.typicode.com/posts';
  const response = await fetch(api_url);
  const allPosts = await response.json();

  // Retrieve all comments
  const comments = await getAllComments();
  // Group comments by postId
  const commentGroups = comments.reduce((groups, item) => {
    if (!groups[item.postId]) groups[item.postId] = 0;
    groups[item.postId] += 1;
    return groups;
  }, {});

  // Arrange comments in objects with the counts
  const postComments = Object.keys(commentGroups).map((postId) => {
    return { postId: Number(postId), count: commentGroups[postId] };
  });

  // Sort posts with highest comments in decreasing order
  postComments.sort((a, b) => b.count - a.count);

  // Initialise top posts array
  const topPostsArr = [];
  // Loop through the postComments array
  postComments.map(item => {
    // Check if matching IDs are found
    const postFind = allPosts.find(post => post.id === item.postId);
    // If yes, then set up the object and push into top posts array
    if (postFind) {
      const topPostObj = {
        post_id: item.postId,
        post_title: postFind.title,
        post_body: postFind.body,
        total_number_of_comments: item.count,
      };
      topPostsArr.push(topPostObj);
    }
  });

  return topPostsArr;
};

