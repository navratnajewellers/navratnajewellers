import { Divider } from 'rsuite';
import NewFooter from '../../components/NewFooter';
import NewHeader from '../../components/NewHeader';
import '../../styles/gemsStyles/rubyGem.css';
import { motion } from 'motion/react';

const RubyGem = () => {
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
                  src="/images/home-page-assests/gems/red-ruby-stone.webp"
                  alt="Rotating"
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
              Ruby Gem (Manik) - The Precious Red Stone
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              Ruby, also known as &quot;Manik&quot; in Hindi, is a precious
              gemstone that belongs to the corundum family. It is renowned for
              its deep red color and exceptional hardness, making it one of the
              most sought-after gemstones in the world. The name
              &quot;Ruby&quot; comes from the Latin word &quot;ruber,&quot;
              meaning red. This gemstone holds great significance in astrology,
              jewelry, and various cultural traditions.
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
            Rubies are found in several parts of the world, with the most famous
            sources being:
          </motion.p>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <strong>Burma (Myanmar):</strong> Known for producing the finest
              rubies with a deep, pigeon-blood red hue.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              <strong>Sri Lanka:</strong> Produces rubies in various shades,
              from light pink to deep red.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              <strong>Thailand:</strong> Home to darker rubies with a slight
              brownish tint.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <strong>India:</strong> Known for producing high-quality rubies,
              especially in Karnataka and Odisha.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 1 }}
            >
              <strong>Madagascar, Mozambique, and Vietnam:</strong> Emerging as
              new sources of fine rubies.
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
            Characteristics of Ruby
          </motion.h3>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <strong>Color: </strong> Ranges from pinkish-red to deep red, with
              pigeon-blood red being the most valuable.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <strong>Hardness:</strong> 9 on the Mohs scale, making it the
              second hardest natural stone after diamonds.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              <strong>Luster:</strong> Exhibits a vitreous to adamantine shine.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              <strong>Transparency:</strong>Can range from transparent to
              translucent.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <strong>Cut and Shape:</strong> Commonly cut in oval, round,
              cushion, and cabochon shapes to enhance its brilliance.
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
            In Vedic astrology, ruby (Manik) is associated with the Sun and is
            believed to bring power, confidence, and good health to the wearer.
            It is recommended for individuals with a weak Sun in their horoscope
            and is said to enhance leadership qualities, authority, and
            prosperity. It is often worn in gold rings or pendants to maximize
            its benefits.
          </motion.p>
        </div>

        <div className="r-g-section2-container r-g-white-container ">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="special-text"
          >
            Benefits of Wearing Ruby (Manik)
          </motion.h3>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              Enhances self-confidence and leadership skills.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              Improves focus, motivation, and determination.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              Strengthens relationships and promotes emotional stability.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              Protects against negativity and evil energies.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Promotes good health and vitality.
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
            How to Wear Ruby (Manik)
          </motion.h3>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <strong>Best Metal:</strong> Gold or copper is preferred for
              setting the ruby stone.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <strong>Finger:</strong> It is usually worn on the ring finger of
              the right hand.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              <strong>Day and Time:</strong> Should be worn on a Sunday morning
              during the Shukla Paksha.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              <strong>Weight:</strong> A minimum of 3-5 carats is recommended
              for best results.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <strong>Energization:</strong> Before wearing, the ruby should be
              purified and energized by chanting the Surya mantra.
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
            To ensure the authenticity of a ruby gemstone, it is important to
            check for proper certification. Certified gemstones come with a
            laboratory report that verifies their quality, origin, and any
            treatments they may have undergone. Some well-known certification
            authorities include:
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
            Before purchasing a ruby, always verify its certification and ensure
            it is from a reputed gem lab. The certificate should provide details
            about the stone&apos;s weight, color, clarity, cut, and any
            treatments applied.
          </motion.p>
        </div>

        <div className="r-g-section3-container">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="special-text"
          >
            Ruby in Jewelry
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Apart from its astrological benefits, rubies are extensively used in
            jewelry, including rings, necklaces, bracelets, and earrings. Their
            rich color and durability make them a favorite among jewelers and
            collectors worldwide.
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
            Ruby (Manik) is not just a beautiful gemstone; it holds immense
            significance in astrology, culture, and fashion. Whether worn for
            its metaphysical benefits or as an exquisite piece of jewelry, it
            remains one of the most prized gemstones in the world.
          </motion.p>
        </div>
      </div>

      <NewFooter />
    </div>
  );
};

export default RubyGem;
