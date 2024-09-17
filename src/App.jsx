import styled from "styled-components";
import "./App.css";
import SlideList from "./SlideList";
import MovieSlide from "./MovieSlide.jsx";
const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
];

function App() {
  const slideData = data;
  return (
    <SlideWrap>
      <SlideList slideData={slideData} />
      <MovieSlide slideData={slideData} />
    </SlideWrap>
  );
}

export default App;

const SlideWrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;
`;
