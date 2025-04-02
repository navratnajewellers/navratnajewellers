import { Divider } from 'rsuite';
import NewFooter from '../../components/NewFooter';
import NewHeader from '../../components/NewHeader';
import '../../styles/gemsStyles/rubyGem.css';
import { motion } from 'motion/react';

const EmeraldGem = () => {
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
                  src="/images/home-page-assests/gems/emerald-loose.jpg"
                  alt="Emerald (Panna)"
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
              Emerald (Panna) - The Gem of Wisdom and Prosperity
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              Emerald, known as &quot;Panna&quot; in Hindi, is a precious
              gemstone belonging to the beryl family. It is revered for its
              stunning green hue and is often associated with intelligence,
              creativity, and financial prosperity. Emerald is linked to the
              planet Mercury (Budh) in Vedic astrology and is believed to
              enhance communication skills and mental clarity.
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
            Emeralds are primarily mined in various parts of the world, with the
            most famous sources including:
          </motion.p>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <strong>Colombia:</strong> Produces some of the finest and most
              valuable emeralds with deep green hues.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              <strong>Zambia:</strong> Known for high-quality emeralds with a
              bluish-green tint.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              <strong>Brazil:</strong> Produces emeralds in a wide range of
              shades, from light to deep green.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <strong>Russia:</strong> Famous for rare and unique emerald
              varieties.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 1 }}
            >
              <strong>India:</strong> Historically significant for emerald
              trading, though modern sources are limited.
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
            Characteristics of Emerald
          </motion.h3>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <strong>Color:</strong> Ranges from light green to deep green,
              with rich green being the most valuable.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <strong>Hardness:</strong> 7.5-8 on the Mohs scale, making it
              durable but prone to internal fractures.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              <strong>Luster:</strong> Exhibits a vitreous (glass-like) shine.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              <strong>Clarity:</strong> Often contains natural inclusions known
              as &quot;jardin&quot; (garden), which add to its uniqueness.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <strong>Cut and Shape:</strong> Commonly cut in oval, emerald-cut,
              cushion, and round shapes to maximize brilliance.
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
            Emerald (Panna) is associated with Mercury (Budh), the planet of
            intellect, communication, and business. Wearing an emerald is
            believed to enhance analytical thinking, decision-making, and verbal
            expression. It is particularly recommended for students,
            professionals, and businesspersons who seek mental clarity and
            success in negotiations.
          </motion.p>
        </div>

        <div className="r-g-section2-container r-g-white-container ">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="special-text"
          >
            Benefits of Wearing Emerald (Panna)
          </motion.h3>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              Enhances intelligence, creativity, and memory.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              Improves communication skills and public speaking abilities.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              Brings financial growth and success in business ventures.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              Strengthens relationships and fosters harmony in marriage.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Helps overcome anxiety, nervousness, and indecisiveness.
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
            How to Wear Emerald (Panna)
          </motion.h3>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <strong>Best Metal:</strong> Gold or silver is preferred for
              setting the emerald gemstone.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <strong>Finger:</strong> Worn on the little finger of the right
              hand.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              <strong>Day and Time:</strong> Should be worn on a Wednesday
              morning during the Shukla Paksha.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              <strong>Weight:</strong> A minimum of 5-7 carats is recommended
              for astrological benefits.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <strong>Energization:</strong> Before wearing, the emerald should
              be purified in Gangajal and energized by chanting the Budh mantra.
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
            Due to the high demand for emeralds, synthetic and treated versions
            are widely available in the market. To ensure authenticity, always
            check for proper certification from reputed gemological labs. Some
            well-known certification authorities include:
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
            Verifying certification helps confirm the emerald’s natural origin,
            clarity, and treatment details.
          </motion.p>
        </div>

        <div className="r-g-section3-container">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="special-text"
          >
            Emerald in Jewelry
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Emeralds are highly valued in jewelry, including rings, earrings,
            pendants, and bracelets. Their deep green color makes them a
            favorite among collectors and royalty. Emerald engagement rings are
            also popular due to their luxurious and timeless appeal.
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
            Emerald (Panna) is a gemstone of intellect, prosperity, and harmony.
            Whether worn for astrological benefits or as a fashion statement, it
            remains one of the most sought-after gemstones, symbolizing wisdom,
            elegance, and success.
          </motion.p>
        </div>
      </div>

      <NewFooter />
    </div>
  );
};

export default EmeraldGem;
