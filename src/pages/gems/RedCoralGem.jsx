import { Divider } from 'rsuite';
import NewFooter from '../../components/NewFooter';
import NewHeader from '../../components/NewHeader';
import '../../styles/gemsStyles/rubyGem.css';
import { motion } from 'motion/react';

const RedCoralGem = () => {
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
                  src="/images/home-page-assests/gems/red-coral-2-500x500.jpg"
                  alt="Red Coral (Moonga)"
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
              Red Coral (Moonga) - The Stone of Strength and Vitality
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              Red Coral, known as &quot;Moonga&quot; in Hindi, is an organic
              gemstone formed from the skeletons of marine coral polyps. It is
              renowned for its striking red to orange-red hues and is considered
              a powerful gemstone in Vedic astrology. Associated with Mars
              (Mangal), Red Coral is believed to provide strength, courage, and
              protection from negative energies.
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
            Red Coral is primarily harvested from coral reefs in warm oceanic
            regions. The major sources include:
          </motion.p>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <strong>Italy (Mediterranean Sea):</strong> Known for high-quality
              deep red corals.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              <strong>Japan:</strong> Produces precious red and pink corals.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              <strong>Taiwan:</strong> Home to some of the finest coral
              varieties.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <strong>Australia:</strong> Known for harvesting sustainable coral
              gemstones.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 1 }}
            >
              <strong>India (Coastal Regions):</strong> Harvesting is regulated
              to preserve coral reefs.
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
            Characteristics of Red Coral
          </motion.h3>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <strong>Color:</strong> Ranges from deep red to light orange-red,
              with uniform color being the most valuable.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <strong>Hardness:</strong> 3.5-4 on the Mohs scale, making it
              softer than many gemstones.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              <strong>Luster:</strong> Exhibits a waxy to vitreous sheen.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              <strong>Shape:</strong> Commonly found in cabochon, oval, and
              cylindrical cuts.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <strong>Origin:</strong> Naturally occurring in warm saltwater
              environments.
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
            In Vedic astrology, Red Coral is associated with the planet Mars,
            which symbolizes energy, passion, and determination. It is
            recommended for individuals with a weak or afflicted Mars in their
            horoscope. Wearing Red Coral is believed to enhance vitality,
            leadership, and protection from enemies and adversities.
          </motion.p>
        </div>

        <div className="r-g-section2-container r-g-white-container ">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="special-text"
          >
            Benefits of Wearing Red Coral (Moonga)
          </motion.h3>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              Boosts confidence, courage, and determination.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              Helps overcome fear, laziness, and procrastination.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              Protects against negative energies, black magic, and evil spirits.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              Promotes physical strength, stamina, and vitality.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Aids in blood circulation and improves overall health.
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
            How to Wear Red Coral (Moonga)
          </motion.h3>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <strong>Best Metal:</strong> Gold or copper is preferred for
              setting the Red Coral stone.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <strong>Finger:</strong> Usually worn on the ring finger of the
              right hand.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              <strong>Day and Time:</strong> Should be worn on a Tuesday morning
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
              <strong>Energization:</strong> Before wearing, the coral should be
              purified in honey and Gangajal and energized by chanting the Mars
              mantra.
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
            Due to the increasing demand for Red Coral, synthetic and dyed
            versions are often sold in the market. To ensure authenticity,
            always check for proper certification from reputed gemological labs.
            Some well-known certification authorities include:
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
            Always verify the certification details before purchasing to ensure
            the coral&apos;s natural origin and quality.
          </motion.p>
        </div>

        <div className="r-g-section3-container">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="special-text"
          >
            Red Coral in Jewelry
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Red Coral is widely used in rings, bracelets, necklaces, and
            pendants. Due to its bold red color, it is often combined with gold
            or silver settings. It is a favored gemstone for both astrological
            purposes and fashion accessories, symbolizing energy and protection.
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
            Red Coral (Moonga) is a powerful gemstone that provides courage,
            protection, and vitality. Whether worn for its astrological benefits
            or as an elegant piece of jewelry, it remains a treasured gemstone
            with deep-rooted cultural and spiritual significance.
          </motion.p>
        </div>
      </div>

      <NewFooter />
    </div>
  );
};

export default RedCoralGem;
