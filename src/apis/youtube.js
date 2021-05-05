import axios from 'axios'

const KEY = "AIzaSyAiR9PKwtq3xeYFtubYlkue3qNKICBAPVA";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})
 
