import Slider from 'react-slick';
import { Button, Divider, Panel } from 'rsuite';
import { GiJewelCrown } from '@react-icons/all-files/gi/GiJewelCrown';

const gemsData = [
  {
    id: 1,
    name: 'Ruby (Manik)',
    image: '/images/home-page-assests/gems/red-ruby-stone.webp',
    link: '/astrological-gems/ruby-manik',
  },
  {
    id: 2,
    name: 'Pearl (Moti)',
    image: '/images/home-page-assests/gems/Pearl-gems.jpg',
    link: '/astrological-gems/pearl-moti',
  },
  {
    id: 3,
    name: 'Red Coral (Moonga)',
    image: '/images/home-page-assests/gems/red-coral-2-500x500.jpg',
    link: '/astrological-gems/red-coral-moonga',
  },
  {
    id: 4,
    name: 'Emerald (Panna)',
    image: '/images/home-page-assests/gems/emerald-loose.jpg',
    link: '/astrological-gems/emerald-panna',
  },
  {
    id: 5,
    name: 'Yellow Sapphire (Pokhraj)',
    image: '/images/home-page-assests/gems/Yellow-Sapphire.jpeg',
    link: '/astrological-gems/yellow-sapphire-pokhraj',
  },

  {
    id: 6,
    name: 'Blue Sapphire (Neelam)',
    image: '/images/home-page-assests/gems/polished-sapphire.png',
    link: '/astrological-gems/blue-sapphire-neelam',
  },
  {
    id: 7,
    name: 'Hessonite Garnet (Gomed)',
    image: '/images/home-page-assests/gems/Hessonite-Garnet-stone.jpg',
    link: '/astrological-gems/hessonite-garnet-gomed',
  },
  {
    id: 8,
    name: 'Cat’s Eye (Lehsunia)',
    image: '/images/home-page-assests/gems/Cat-Eye.jpeg',
    link: '/astrological-gems/cat-eye-lehsunia',
  },
];

const AstroGem = () => {
  const gemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {/* Astrological Gems Section */}
      <section className="astrological-gems">
        <h2>Astrological Gems</h2>
        <p>
          Discover the power of gemstones aligned with your zodiac sign and
          bring prosperity and positivity into your life.
        </p>
        <Divider>
          <GiJewelCrown />
        </Divider>
        <Slider {...gemSettings} className="gems-slider">
          {gemsData.map(data => (
            <div key={data.id} className="gem-slide">
              <Panel shaded bordered bodyFill className="gem-card">
                <div className="imageWrapper">
                  <img src={data.image} alt={data.name} className="gem-image" />
                </div>
                <h3>{data.name}</h3>
                <Button
                  appearance="ghost"
                  color="yellow"
                  onClick={() => {
                    window.location.href = data.link;
                  }}
                >
                  Explore
                </Button>
              </Panel>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default AstroGem;
