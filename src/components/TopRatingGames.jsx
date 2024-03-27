import React from "react";
import Slider from "react-slick";

function TopRatingGames({ gameList }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-[30px] mb-3">Top Rating Games</h2>
      {/* <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                gameList.map((item, index) => index < 4 && (
                    <div key={index} className='bg-slate-800 rounded-lg group hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer'>
                        <img src={item.background_image} alt="" className='h-[300px] object-cover rounded-t-lg'/>
                        <h2 className='text-[20px] font-bold p-2 text-center'>{item.name}</h2>
                    </div>
                ))
            }
        </div> */}
      <Slider {...settings}>
        {gameList.map(
          (item, index) =>
            item.rating >= 4.4 && (
              <div
                key={index}
                className="bg-slate-800 rounded-lg group hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
              >
                <img
                  src={item.background_image}
                  alt=""
                  className="h-[300px] object-cover rounded-t-lg"
                />
                <h2 className="text-[16px] font-bold p-2 text-center">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </Slider>
    </div>
  );
}

export default TopRatingGames;
