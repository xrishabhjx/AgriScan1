import { reviewData } from '@/constants';
import { Quote } from 'lucide-react';
import { motion } from 'motion/react';
import * as variant from '../lib/motionVariants';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

const Review = () => {
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
            {reviewData.sectionSubtitle}
          </motion.p>
          <motion.h2
            variants={variant.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {reviewData.sectionTitle}
          </motion.h2>
        </div>
        <motion.div
          variants={variant.staggerContainer}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
        >
          {reviewData.reviewCard.map(
            ({ title, text, reviewAuthor, date }, index) => (
              <motion.div
                variants={variant.fadeInUp}
                key={index}
              >
                <Card className='relative'>
                  <CardHeader>
                    <CardTitle className='text-xl'>{title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className='text-sm text-muted-foreground line-clamp-3'>
                      {text}
                    </p>
                  </CardContent>

                  <CardFooter className='block'>
                    <p className=''>{reviewAuthor}</p>
                    <p className='text-xs text-muted-foreground'>{date}</p>
                  </CardFooter>
                  <div className='absolute bottom-0 right-3 opacity-[0.02]'>
                    <Quote size={80} />
                  </div>
                </Card>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Review;
