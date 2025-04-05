import { processBanner } from '@/assets';
import { processData } from '@/constants';
import { motion } from 'motion/react';
import * as variant from '../lib/motionVariants';

const Process = () => {
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
            {processData.sectionSubtitle}
          </motion.p>
          <motion.h2
            variants={variant.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {processData.sectionTitle}
          </motion.h2>
          <motion.p
            variants={variant.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text'
          >
            {processData.sectionText}
          </motion.p>
        </div>
        <div className='grid gap-14 lg:grid-cols-2 lg: items-center'>
          <div className='grid gap-7 lg:gap-10'>
            {processData.list.map(({ icon, text, title }, index) => (
              <motion.div
                className='flex flex-col gap-4 md:flex-row lg:gap-7'
                key={index}
                variants={variant.staggerContainer}
                initial='start'
                whileInView='end'
                viewport={{ once: true }}
              >
                <motion.div
                  variants={variant.fadeInScale}
                  className='w-16 h-16 grid place-items-center rounded-full border border-foreground/5 shrink-0'
                >
                  {icon}
                </motion.div>
                <div className='grid gap-2 md:gap-3'>
                  <motion.h3
                    variants={variant.fadeInLeft}
                    className='text-xl lg:text-2xl'
                  >
                    {title}
                  </motion.h3>
                  <motion.p
                    variants={variant.fadeInLeft}
                    className='text-sm text-muted-foreground md:text-base'
                  >
                    {text}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className='max-lg:-order-1'>
            <motion.figure
              variants={variant.fadeInUp}
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
              className='mx-auto bg-green-500 rounded-3xl overflow-hidden p-8 !pb-0 lg:pb-12 max-w-[580px]'
            >
              <img
                src={processBanner}
                alt='Process Banner'
                width={500}
                height={528}
                className='w-full h-full object-contain object-bottom'
              />
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
