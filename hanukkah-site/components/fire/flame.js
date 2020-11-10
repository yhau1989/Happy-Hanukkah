
import Lottie from 'react-lottie';
import animationData from './6593-burning-fire';

export default function Flame() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={100}
          width={100}
        />
      </div>
    );
  }