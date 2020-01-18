let URL = "here is your api base url";

let API_URL = process.env.REACT_APP_API_URL || URL;
module.exports = { apiBasePath: API_URL };
