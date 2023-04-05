import axios from "axios";

const API_KEY = "33693100-cf65655f5c3565ff7ce8c6002";
async function getImages (query,page){
    const baseURL = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&`
    const response = await axios.get(baseURL);
    return  {
       pictures: response.data.hits,
       total:response.data.totalHits
    };
}




export default getImages;