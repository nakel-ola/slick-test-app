const fetchData = async (searchValue: string) => {
  const api_key = process.env.API_KEY;
  const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=${api_key}&m=genre`;
  const res = await fetch(url);
  const resJson = await res.json();

  if (resJson.Search) {
    return resJson;
  }
};

export default fetchData;
