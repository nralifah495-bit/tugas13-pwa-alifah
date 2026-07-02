const API_URL =
'http://127.0.0.1:5002/api/articles';

export async function getArticles(){

    const response =
    await fetch(API_URL);

    const result =
    await response.json();

    return result.data;
}