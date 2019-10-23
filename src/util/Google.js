const apiKey = "AIzaSyC455u9Z-koM7HLLXX8GNkg82DXE3clo7w";
const google = {
  searchGoogle(query) {
    return fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&locationbias=ipbias&language=en&type=restaurant&maxprice=2&key=${apiKey}`)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        return jsonResponse.results.map(business => {
          console.log(business); /* !!!!!!  */
          return {
            id: business.id,                        /* CHECK */
            imageSrc: business.photos,
            name: business.name,                     /* CHECK */
            adress: business.formatted_address,     /* CHECK */
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zipCode,
            category: business.types[0],               /* CHECK */
            rating: business.rating,                    /* CHECK */
            reviewCount: business.user_ratings_total   /* CHECK */
          }
        });
      });
  }
};
/* TEST */