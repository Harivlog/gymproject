export const exerciseOptions  = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8c5bcf9bb5msh452ff56ea8216a0p181e1bjsna7d6d09a779c',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
export const fetchData = async (url,options)=>{
    const response = await fetch(url ,options);
    const data = await response.json()
    
    return data;
} 