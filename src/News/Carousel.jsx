import CarouselBS from 'react-bootstrap/Carousel';

import gpudriver1 from '../static/assets/images/Last GPU drivers.svg'
import gpudriver2 from '../static/assets/images/Last GPU drivers 2.svg'
import gpudriver3 from '../static/assets/images/Last GPU drivers 3.svg'


const Carousel = () => {

    return (
        <div className="last-gpu-drivers">
            <div className="last-gpu-text">
                <div className="last-gpu-text-style">Последние GPU-драйвера</div>
            </div>
            <div className="news-bar">
                <CarouselBS indicators={false}>
                    <CarouselBS.Item>
                        <img src={gpudriver1} className="d-block w-100" alt="1" />
                    </CarouselBS.Item>
                    <CarouselBS.Item>
                        <img src={gpudriver2} className="d-block w-100" alt="2" />
                    </CarouselBS.Item>
                    <CarouselBS.Item>
                        <img src={gpudriver3} className="d-block w-100" alt="3" />
                    </CarouselBS.Item>
                </CarouselBS>
            </div>
        </div>
    );
}

export default Carousel