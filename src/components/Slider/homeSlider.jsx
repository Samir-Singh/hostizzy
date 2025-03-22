import React,{useEffect,useRef} from 'react'
import "./slider.scss"
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
const Slider = () => {
        const slideRef = useRef(null);
        useEffect(() => {
            const handleNextClick = () => {
                const slide = slideRef.current;
                const firstItem = slide.querySelector('.item');
                slide.appendChild(firstItem);
            };
    
            const handlePrevClick = () => {
                const slide = slideRef.current;
                const items = slide.querySelectorAll('.item');
                const lastItem = items[items.length - 1];
                slide.prepend(lastItem);
            };
    
            const autoSlideInterval = setInterval(handleNextClick, 2000);
    
            const nextButton = document.getElementById('next');
            const prevButton = document.getElementById('prev');
    
            nextButton.addEventListener('click', () => {
                clearInterval(autoSlideInterval);
                handleNextClick();
            });
    
            prevButton.addEventListener('click', () => {
                clearInterval(autoSlideInterval);
                handlePrevClick();
            });
    
            return () => {
                clearInterval(autoSlideInterval);
                nextButton.removeEventListener('click', handleNextClick);
                prevButton.removeEventListener('click', handlePrevClick);
            };
        }, []);

  return (
    <div className='home__container'>
    <div className="container" >
            <div id="slide" ref={slideRef} >
                <div className="item" style={{ backgroundImage: 'url("https://a0.muscache.com/im/pictures/miso/Hosting-52717816/original/66c37612-fc35-4ba1-945f-18f1563ff879.jpeg?im_w=1440")' }}>
                    <div className="content">
                        <div className="name">Sunahari Bagh Farmhouse</div>
                        <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: 'url("https://a0.muscache.com/im/pictures/miso/Hosting-780786876631355897/original/d27bf7f1-6245-4141-a2ef-c18c7dc18f03.jpeg?im_w=1440")' }}>
                    <div className="content">
                        <div className="name">Kesari Bagh farm</div>
                        <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: 'url("https://a0.muscache.com/im/pictures/miso/Hosting-45942402/original/e899abe4-9503-4527-be74-f31aced46e8a.jpeg?im_w=1200")',backgroundPosition:"cover" }}>
                    <div className="content">
                        <div className="name">The Orchard Farm</div>
                        <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: 'url("https://a0.muscache.com/im/pictures/miso/Hosting-54008169/original/cb5f832e-453a-4101-9aea-e6e63929a640.jpeg?im_w=1200")' }}>
                    <div className="content">
                        <div className="name">Mannat Farm</div>
                        <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: 'url("https://a0.muscache.com/im/pictures/7038119b-91a3-4c7d-b6ce-44ac2ba6a2d9.jpg?im_w=1440")' }}>
                    <div className="content">
                        <div className="name">RajNikas Farm</div>
                        <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: 'url("https://a0.muscache.com/im/pictures/miso/Hosting-52717816/original/66c37612-fc35-4ba1-945f-18f1563ff879.jpeg?im_w=1440")' }}>
                    <div className="content">
                        <div className="name">RajNikas Farm</div>
                        <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div>
                {/* <div className="item" style={{ backgroundImage: 'url("https://a0.muscache.com/im/pictures/576b0e22-a367-4252-a7d9-2c60309971d0.jpg?im_w=1200")' }}>
                    <div className="content">
                        <div className="name">We Woods Farm</div>
                        <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div> */}
            </div>
            <div className="buttons">
            <button id="prev"><FaArrowLeft /></button>
            <button id="next"><FaArrowRight /></button>
            </div>
    </div>
    </div>
  )
}

export default Slider;
