//Axios -- Fetch

// Version 1
function main() {
  fetch("URL")
    .then(async (response) => {
      const json = await response.json();
      console.log(json.todos);
    })
    .catch((error) => console.error(error));
}

//OR

// Version 2
async function main() {
  try {
    const response = await fetch("URL");
    const json = await response.json();
    console.log(json.todos);
  } catch (error) {
    console.error(error);
  }
}

//OR
//axios is much cleaner, for async for others we need to know if the data we are getting is in text or json but for axios it does it automatically
const axios = require("axios");
async function main() {
  try {
    const response = await axios.get("URL");
    console.log(response.data.todos);
  } catch (error) {
    console.error(error);
  }
}

// Post request using Axios and async

const axios = require("axios");
async function main() {
  try {
    //replace post with put, delete etc whatever
    const response = await axios.post("URL", {
      username: "content",
    });
    console.log(response.data.todos);
  } catch (error) {
    console.error(error);
  }
}

// async
async function main() {
  try {
    const response = await fetch("URL", {
      method: "POST",
    });
    const json = await response.json();
    console.log(json.todos);
  } catch (error) {
    console.error(error);
  }
}

//Headers

//Axios
const axios = require("axios");
async function main() {
  try {
    //replace post with put, delete etc whatever
    const response = await axios.post("URL", null, {
      headers: {
        Authorization: "Bearer 123",
      },
    });
    console.log(response.data.todos);
  } catch (error) {
    console.error(error);
  }
}

// async
async function main() {
  try {
    const response = await fetch("URL", {
      method: "POST",
      headers: {
        Authorization: "Bearer 123",
      },
    });
    const json = await response.json();
    console.log(json.todos);
  } catch (error) {
    console.error(error);
  }
}
