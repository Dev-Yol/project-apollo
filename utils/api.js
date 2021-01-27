import axios from "axios";
import cnf from "./config";



let errors = {
  error: true,
  data: null,
  message: "Something went wrong",
};

const callAPI = async (method, url, data = null, crypt = false) => {
  let headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };


  url = `${cnf.apiUrl}${url}`;


  let config = {
    timeout: 1000 * 120,
    method,
    headers,
    url,
    crossDomain: true,
    data
  };

  if (crypt) {
    if (method === 'get') {
      if (url.indexOf('?') >= 0) {
        let url_pieces = url.split('?')
        url = `${url_pieces[0]}?ciphertext=${Crypt.en(url_pieces[1])}`
        config.url = url;
      }
    }
  }

  if (data) {
    if (crypt) {
      let encrypted = Crypt.en(data);
      if (method.toLowerCase() === 'get') {
        config.url += `?ciphertext=${encrypted}`
      } else {
        config.data = crypt ? JSON.stringify({ ciphertext: Crypt.en(data) }) : JSON.stringify(data)
      }
    }
  }

  try {
    let response = await axios(config);
    let decrypted = response.data;
    if (decrypted.ciphertext) {
      decrypted = Crypt.de(decrypted.ciphertext);
    }
    return decrypted; //response.data.ciphertext ? decrypted : response.data;
  } catch (error) {
    if (error.message) {
      errors.message = error.message
    }
    return errors;
  }
};

export default {
  post: async (url, data = null) => callAPI("post", url, data),
  put: async (url, data = null) => callAPI("put", url, data),

  delete: async (url, data = null) => callAPI("delete", url, data),

  get: async (url) => callAPI("get", url, null),
  //Crypt enabled

  postC: async (url, data = null, crypt = true) => callAPI("post", url, data, crypt),
  putC: async (url, data = null, crypt = true) => callAPI("put", url, data, crypt),

  deleteC: async (url, data = null, crypt = true) => callAPI("delete", url, data, crypt),
  getC: async (url, data = null) => callAPI("get", url, data, true),

};
