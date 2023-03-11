export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '28a9cbde06msh24cac9b2488673dp187feajsn4c4c2739a087',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '28a9cbde06msh24cac9b2488673dp187feajsn4c4c2739a087',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};