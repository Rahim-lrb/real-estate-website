import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://bayut.p.rapidapi.com/properties/list',
    params: {
        locationExternalIDs: '5002,6020',
        purpose: 'for-rent',
        hitsPerPage: '25',
        page: '0',
        lang: 'en',
        sort: 'city-level-score',
        rentFrequency: 'monthly',
        categoryExternalID: '4'
    },
    headers: {
        'X-RapidAPI-Key': 'a67a8e1ee8msh5604b5419645e06p14cfd3jsn6f9497feaf45',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
};

export const fetchApi = async () => {
    try {
        const response = await axios.request(options);
        const data = response.data.hits
        return data;

    } catch (error) {
        return error
    }
}
