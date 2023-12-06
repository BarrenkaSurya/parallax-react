import { Parallax } from 'react-parallax';
import SpaceStation from "../img/nasa-yZygONrUBe8-unsplash (1).jpg";

const ImageThree = () => (
    <Parallax className='image' bgImage={SpaceStation}  strength={800}>
        <div className='content'>
           <span className='img-text'>
              A trip to Space...
           </span>
        </div>
    </Parallax>
);
export default ImageThree;