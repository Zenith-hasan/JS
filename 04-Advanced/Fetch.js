// Async/await is a powerful feature in JavaScript that provides a cleaner,more readable way to work with asynchrounous operation.

// It's build on top of Promises and makes asynchronous code look and behave more like synchronous code.


//when you declare a function as async, it automatically returns a Promises 

async function example(){
  return 'Hello World';
}

function example2(){
  return Promise.resolve("Hello World")
}

example().then(result => console.log(result))




// Example 

async function fetchUserData() {
    try {
        const userResponse = await fetch('/api/user');
        const user = await userResponse.json();
        
        const postsResponse = await fetch(`/api/posts/${user.id}`);
        const posts = await postsResponse.json();
        
        return { user, posts };
    } catch (error) {
        console.error('Error:', error);
    }
}




fetch("https://randomuser.me/api/")
  .then((rawdata) => {
    return rawdata.json();
  })
  .then((data) => {
    console.log(data.results[0].name.first);
  })
  .catch((err) => {
    console.log(err);
  });
