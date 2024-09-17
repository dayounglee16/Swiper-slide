import movie1 from "./assets/begin-again.jpg";
import movie2 from "./assets/bread.jpg";
import movie3 from "./assets/lookback.jpg";
import movie4 from "./assets/Veteran.jpg";
import movie5 from "./assets/pilot.jpg";
import movie6 from "./assets/victory.jpg";

export const movieImages = (movieId) => {
  switch (movieId) {
    case 1:
      return movie1;
    case 2:
      return movie2;
    case 3:
      return movie3;
    case 4:
      return movie4;
    case 5:
      return movie5;
    case 6:
      return movie6;
    default:
      return null;
  }
};
