const apiKey = "AIzaSyC455u9Z-koM7HLLXX8GNkg82DXE3clo7w";
let globalLatitude;
let globalLongitude;
function sortByKey(array, key) {
  return array.sort(function(a, b) {
      let x = a[key]; let y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}
navigator.geolocation.getCurrentPosition(function(position) {
  globalLatitude = position.coords.latitude;
  globalLongitude = position.coords.longitude;
});
const Google = {
  searchGoogle(keyword, type, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${globalLatitude},${globalLongitude}&rankby=distance&type=${type}&keyword=${keyword}&key=${apiKey}`)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        let spotsArray = jsonResponse.results.map(spot => {
          return { 
            id: spot.id,                  
            // imageSrc: fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=${spot.photos.photo_reference}&key=${apiKey}`)
            //           .then(response => {
            //             return response;
            //           }, ()=> {
            //             return '';
            //           }),
            imageSrc: '',
            name: spot.name,
            adress: spot.vicinity,
            category: spot.types[0],
            pricing: spot.price_level,
            rating: spot.rating,
            reviewCount: spot.user_ratings_total
          }
        });
        switch (sortBy) {
          case 'rating' :
            sortByKey(spotsArray,'rating');
            break;
          case 'nearest': break;
          case 'reviews':
            sortByKey(spotsArray,'reviewCount');
            break;
        }
        return spotsArray;
      });
  }
};
export default Google;