import { Divider } from 'rsuite';
import NewFooter from '../../components/NewFooter';
import NewHeader from '../../components/NewHeader';
import '../../styles/gemsStyles/rubyGem.css';
import { motion } from 'motion/react';

const YellowSapphireGem = () => {
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
                  src="/images/home-page-assests/gems/Yellow-Sapphire.jpeg"
                  alt="Yellow Sapphire (Pokhraj)"
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
              Yellow Sapphire (Pokhraj) - The Gem of Wealth and Wisdom
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              Yellow Sapphire, known as &quot;Pokhraj&quot; in Hindi, is a
              highly valuable gemstone belonging to the corundum family. It is
              prized for its radiant yellow hue and is considered one of the
              most auspicious gemstones in Vedic astrology. Associated with the
              planet Jupiter (Guru), Yellow Sapphire is believed to bring
              wisdom, prosperity, and good fortune to its wearer.
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
            Yellow Sapphire is primarily mined in various parts of the world,
            with the most significant sources including:
          </motion.p>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <strong>Sri Lanka (Ceylon):</strong> Produces the finest quality
              Yellow Sapphires with high transparency and bright yellow color.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              <strong>Thailand:</strong> Known for deep yellow and golden-hued
              sapphires.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              <strong>Burma (Myanmar):</strong> Produces rare, high-quality
              sapphires with strong color saturation.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <strong>Madagascar:</strong> A growing source of Yellow Sapphires
              with excellent clarity.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 1 }}
            >
              <strong>India:</strong> Found in some regions, but mostly used for
              cutting and trading rather than mining.
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
            Characteristics of Yellow Sapphire
          </motion.h3>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <strong>Color:</strong> Ranges from pale yellow to deep golden
              yellow, with bright golden hues being the most valuable.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <strong>Hardness:</strong> 9 on the Mohs scale, making it one of
              the hardest gemstones.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              <strong>Luster:</strong> Exhibits a brilliant, vitreous shine.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              <strong>Clarity:</strong> Typically has fewer inclusions, with
              high-quality specimens being eye-clean.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <strong>Cut and Shape:</strong> Commonly cut in oval, cushion, and
              round shapes to enhance brilliance.
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
            Yellow Sapphire (Pokhraj) is associated with Jupiter (Guru), the
            planet of wisdom, wealth, and prosperity. It is recommended for
            individuals seeking success in education, business, and marriage.
            Wearing a Yellow Sapphire is believed to attract financial
            stability, spiritual growth, and positive energy.
          </motion.p>
        </div>

        <div className="r-g-section2-container r-g-white-container ">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="special-text"
          >
            Benefits of Wearing Yellow Sapphire (Pokhraj)
          </motion.h3>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              Enhances financial prosperity and career success.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              Improves wisdom, intelligence, and decision-making abilities.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              Strengthens relationships and brings marital bliss.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              Promotes spiritual growth and inner peace.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Helps in overcoming obstacles and negative energies.
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
            How to Wear Yellow Sapphire (Pokhraj)
          </motion.h3>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <strong>Best Metal:</strong> Gold is the most recommended metal
              for setting the Yellow Sapphire.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <strong>Finger:</strong> Worn on the index finger of the right
              hand.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              <strong>Day and Time:</strong> Should be worn on a Thursday
              morning during the Shukla Paksha.
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
              <strong>Energization:</strong> Before wearing, the gemstone should
              be purified in turmeric water and energized by chanting the
              Jupiter (Guru) mantra.
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
            Due to its high value, synthetic and treated Yellow Sapphires are
            commonly found in the market. To ensure authenticity, always check
            for proper certification from reputed gemological labs. Some
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
            Always verify the certification details before purchasing to ensure
            the sapphire’s natural origin and quality.
          </motion.p>
        </div>

        <div className="r-g-section3-container">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="special-text"
          >
            Yellow Sapphire in Jewelry
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Yellow Sapphires are widely used in rings, earrings, pendants, and
            bracelets. Their bright and cheerful color makes them a favorite
            among jewelers and collectors. They are often set in gold to enhance
            their astrological benefits and aesthetic appeal.
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
            Yellow Sapphire (Pokhraj) is a gemstone of prosperity, wisdom, and
            positivity. Whether worn for its astrological significance or as an
            elegant jewelry piece, it remains a symbol of success, wealth, and
            good fortune. Its radiant beauty and powerful benefits make it one
            of the most sought-after gemstones in the world.
          </motion.p>
        </div>
      </div>

      <NewFooter />
    </div>
  );
};

export default YellowSapphireGem;
