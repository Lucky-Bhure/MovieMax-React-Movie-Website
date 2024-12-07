const getMovieDetails = async({params}) => {

    const { movieId } = params;

    try {
      const response = await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${import.meta.env.VITE_API_KEY}`);
      
      const data = response.json();
  
      return data;
    } catch (err) {
      console.log(err);
    }
  
  }
  
  export default getMovieDetails
  