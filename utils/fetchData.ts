const fetchData = async (searchValue: string) => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=2a242fde&m=genre`;
  const res = await fetch(url);
  const resJson = await res.json();

  if (resJson.Search) {
    // console.log(resJson);
    return resJson;
  }
};

export default fetchData;
