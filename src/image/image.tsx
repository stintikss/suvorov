import { useEffect, useState } from "react";
import test from './test.jpg'

type ImageTestProps = {
  src: string
}

const ImageTest = ({ src }: ImageTestProps) => {
    const [showDefault, setShowDefault] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowDefault(true);
        }, 5000);
    
        return () => clearTimeout(timer);
      }, []);

    useEffect(() => {
        if (showDefault) {
            console.log('API Image successfully', src);
        }
    }, [showDefault])

    return (
      <div className='w-[120px] h-[120px] border-[4px] border-[#313131] rounded-full overflow-hidden'> 
        {showDefault ? (
          <img 
            src={src}
            alt="Avatar"
            className="object-cover w-full h-full select-none pointer-events-none rounded-full"
            draggable={false}
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
        ) : (
            <img 
                src={test}
                alt="Avatar"
                className="object-cover w-full h-full select-none pointer-events-none rounded-full"
                draggable={false}
                loading="eager"
                decoding="sync"
                fetchPriority="high"
            />
        )}
      </div>
    );
  };
  
  export default ImageTest;
  