import applyCaseMiddleware from 'axios-case-converter'
import axios from 'axios'
import Cookies from 'js-cookie';


const client = applyCaseMiddleware(
  axios.create({
    baseURL: 'http://localhost:3000',
  }),
);

client.defaults.headers.common['access-token'] = Cookies.get("_access_token")
client.defaults.headers.common['client'] = Cookies.get("_client")
client.defaults.headers.common['uid'] = Cookies.get("_uid")

export default client;