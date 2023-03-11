export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0cb117725emshc885ab7f2a7265ap1b697djsn956cfe69679e',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0cb117725emshc885ab7f2a7265ap1b697djsn956cfe69679e',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};