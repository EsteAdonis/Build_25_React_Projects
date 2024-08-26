// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Accordion from './components/1_Accordion';
// import RandomColor from './components/2_Random-Color/Random.Color';
// import StarRating from './components/3_Star-Rating/Star.Rating';
import ImageSlider from './components/4_Image-Slider/Image.Slider';

export default function App() {

  return (
    <ImageSlider
      url={"https://picsum.photos/v2/list"}
      page={"1"}
      limit={"10"} />
  )
}


