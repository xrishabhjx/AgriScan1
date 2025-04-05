import { featureData } from '@/constants';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import * as variant from '../lib/motionVariants';
import FeatureCard from './FeatureCard';
import { Button } from './ui/button';

const Feature = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-head'>
          <motion.p
            variants={variant.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-subtitle'
          >
            {featureData.sectionSubtitle}
          </motion.p>
          <motion.h2
            variants={variant.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {featureData.sectionTitle}
          </motion.h2>
          <motion.p
            variants={variant.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text'
          >
            {featureData.sectionText}
          </motion.p>
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6'>
          {featureData.features.map(
            ({ icon, title, desc, iconBoxColor, imgSrc }, index) => (
              <FeatureCard
                key={index}
                classes={
                  index < 2 ? 'md:col-span-2 lg:col-span-3' : 'lg:col-span-2'
                }
              >
                <>
                  <div className='p-8'>
                    <motion.div
                      variants={variant.fadeInUp}
                      className={`w-16 h-16 grid place-items-center rounded-full flex-shrink-0 ${iconBoxColor}`}
                    >
                      {icon}
                    </motion.div>
                    <motion.h3
                      variants={variant.fadeInUp}
                      className='text-foreground text-xl font-medium mt-4 mb-3'
                    >
                      {title}
                    </motion.h3>
                    <motion.p
                      variants={variant.fadeInUp}
                      className='text-muted-foreground line-clamp-2'
                    >
                      {desc}
                    </motion.p>
                    <motion.div variants={variant.fadeInUp}>
                      <Button
                        variant='link'
                        className='!p-0 h-auto mt-3'
                      >
                        Learn More <ArrowRight />
                      </Button>
                    </motion.div>
                  </div>
                  {imgSrc && (
                    <motion.figure
                      variants={variant.fadeInUp}
                      className='p-6 pt-0'
                    >
                      <img
                        src={imgSrc}
                        alt={title}
                      />
                    </motion.figure>
                  )}
                </>
              </FeatureCard>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Feature;
