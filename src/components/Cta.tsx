import { ctaBanner } from '@/assets';
import { ctaData } from '@/constants';
import { motion } from 'motion/react';
import * as variant from '../lib/motionVariants';
import { Button } from './ui/button';
const Cta = () => {
  return (
    <section className='section'>
      <div className='container'>
        <motion.div
          variants={variant.fadeIn}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='bg-green-700 rounded-xl overflow-hidden border-t border-green-500/30 grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] lg:items-center'
        >
          <div className='p-8 md:p-16 xl:p-20'>
            <motion.h2
              variants={variant.fadeIn}
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
              className='text-[26px] leading-tight font-semibold mb-6 capitalize sm:text-[34px] md:text-[40px] lg:text-[46px] lg:mb-10'
            >
              {ctaData.text}
            </motion.h2>
            <motion.div
              variants={variant.fadeIn}
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
              className='flex items-center gap-3 lg:gap-4'
            >
              <Button className='bg-foreground text-background hover:bg-foreground/95'>
                Free Trial
              </Button>
              {/* <Button
                variant='outline'
                className='!bg-transparent border-current'
              >
                Pricing and Plans
              </Button> */}
            </motion.div>
          </div>
          <motion.figure
            variants={variant.fadeInLeft}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='-order-1 pt-14 ps-8 sm:ps-12 md:ps-14 lg:order-none lg:p-0'
          >
            <img
              src={ctaBanner}
              alt=''
              className='w-[700px] h-[420px] rounded-2xl object-contain object-right'
            />
          </motion.figure>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
