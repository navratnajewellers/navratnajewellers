import { Divider } from 'rsuite';
import NewFooter from '../../components/NewFooter';
import NewHeader from '../../components/NewHeader';
import '../../styles/gemsStyles/rubyGem.css';
import { motion } from 'motion/react';

const PearlGem = () => {
  return (
    <div>
      <header>
        <NewHeader />
      </header>
      <div className="gem-main-container">
        <div className="gem-intro-container">
          <motion.div
            initial={{ translateY: 45 }}
            animate={{ translateY: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.div
              className="dis-flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="r-g-image-container">
                <img
                  src="/images/home-page-assests/gems/Pearl-gems.jpg"
                  alt="Pearl (Moti)"
                  className="r-g-image"
                />
              </div>
              {/* <div className="imageWrapper">
                <img
                  src="/images/home-page-assests/gems/red-ruby-stone.webp"
                  alt="Ruby Gems"
                />
              </div> */}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              Pearl (Moti) - The Gem of Purity and Elegance
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              Pearl, known as &quot;Moti&quot; in Hindi, is a unique gemstone
              formed inside the shells of mollusks. Unlike other gemstones that
              are mined from the Earth, pearls are organic in nature and are
              prized for their lustrous beauty and elegance. They symbolize
              purity, wisdom, and serenity and have been used in jewelry and
              spiritual practices for centuries.
            </motion.p>
          </motion.div>
        </div>

        <Divider></Divider>

        <div className="r-g-section2-container">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="special-text"
          >
            Origins and Sources
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Pearls are found in both freshwater and saltwater environments. The
            major sources of pearls include:
          </motion.p>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <strong>Japan:</strong> Famous for Akoya pearls, known for their
              round shape and high luster.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              <strong>China:</strong> Leading producer of freshwater pearls with
              a variety of colors and shapes.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              <strong>Australia:</strong> Known for South Sea pearls, which are
              larger and have a rich, satiny luster.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <strong>Tahiti:</strong> Produces rare black pearls, also called
              Tahitian pearls.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 1 }}
            >
              <strong>India and Sri Lanka:</strong> Have historical significance
              in pearl harvesting, particularly in the Gulf of Mannar.
            </motion.li>
          </ul>
        </div>

        <div className="r-g-section2-container r-g-white-container ">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="special-text"
          >
            Characteristics of Pearls
          </motion.h3>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <strong>Color: </strong> Common colors include white, cream, pink,
              silver, gold, and black.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <strong>Luster:</strong> Exhibits a soft, glowing sheen that
              enhances its beauty.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              <strong>Shape:</strong> Pearls come in round, oval, baroque, and
              teardrop shapes.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              <strong>Hardness:</strong> 2.5-4.5 on the Mohs scale, making them
              softer than most gemstones.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <strong>Size:</strong> Varies from small seed pearls to large
              South Sea pearls exceeding 15mm.
            </motion.li>
          </ul>
        </div>

        <div className="r-g-section2-container">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="special-text"
          >
            Astrological Significance
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            In Vedic astrology, pearl (Moti) is associated with the Moon and is
            believed to bring emotional balance, peace, and prosperity. It is
            recommended for individuals who have a weak Moon in their horoscope
            and is known to enhance mental clarity, calmness, and intuition. It
            is often worn as a ring or pendant in silver for maximum benefits.
          </motion.p>
        </div>

        <div className="r-g-section2-container r-g-white-container ">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="special-text"
          >
            Benefits of Wearing Pearl (Moti)
          </motion.h3>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              Promotes mental peace and emotional stability.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              Enhances creativity, wisdom, and self-confidence.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              Improves relationships by fostering love and harmony.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              Strengthens the immune system and aids in digestive health.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Protects from negative energies and stress.
            </motion.li>
          </ul>
        </div>

        <div className="r-g-section2-container">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="special-text"
          >
            How to Wear Pearl (Moti)
          </motion.h3>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <strong>Best Metal:</strong> Silver is the most recommended metal
              for setting the pearl.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <strong>Finger:</strong> Typically worn on the little finger of
              the right hand.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              <strong>Day and Time:</strong> Should be worn on a Monday morning
              during the Shukla Paksha.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              <strong>Weight:</strong> A minimum of 5-7 carats is ideal for
              astrological benefits.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <strong>Energization:</strong> Before wearing, the pearl should be
              purified in raw milk and energized by chanting the Moon mantra.
            </motion.li>
          </ul>
        </div>

        <div className="r-g-section2-container r-g-white-container ">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="special-text"
          >
            Certification and Authentication
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            To ensure the authenticity of a pearl, it is essential to check for
            certification from reputed gemological labs. Natural pearls are rare
            and often imitated using cultured or synthetic methods. Some
            well-known certification authorities include
          </motion.p>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <strong>GIA (Gemological Institute of America)</strong>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <strong>IGI (International Gemological Institute)</strong>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              <strong>Gubelin Gem Lab</strong>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              <strong>GII (Gemological Institute of India)</strong>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <strong>AGL (American Gemological Laboratories)</strong>
            </motion.li>
          </ul>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Always verify the certification of a pearl before purchasing to
            ensure its quality, luster, and origin.
          </motion.p>
        </div>

        <div className="r-g-section3-container">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="special-text"
          >
            Pearl in Jewelry
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Pearls are a timeless choice for jewelry, including necklaces,
            earrings, rings, and bracelets. They are favored for their elegance
            and sophistication, often used in wedding and royal jewelry. Pearl
            strands and solitaire pearl rings are particularly popular for their
            classic appeal.
          </motion.p>
        </div>

        <div className="r-g-conclusion-container">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Conclusion
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Pearl (Moti) is a gemstone of grace and tranquility, offering both
            aesthetic and astrological benefits. Whether worn for its calming
            influence or as a statement piece in jewelry, pearls continue to be
            a symbol of elegance and purity across cultures and traditions.
          </motion.p>
        </div>
      </div>

      <NewFooter />
    </div>
  );
};

export default PearlGem;
