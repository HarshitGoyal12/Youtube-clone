import axios from 'axios';

const KEY='AIzaSyDtu8tl7s2LQWp2NAufIMByOi9GEpCVGfc';

export default axios.create({
baseURL:'https://www.googleapis.com/youtube/v3',
params:{
    part:'snippet',
    maxResults:20,
    key:KEY,
    
}

});