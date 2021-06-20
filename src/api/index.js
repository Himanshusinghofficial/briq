import axios from 'axios';

const url = 'https://type.fit/api/quotes';

export const fetchdata = () => axios.get(url); 