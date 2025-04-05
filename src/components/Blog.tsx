import { blogData } from '@/constants';
import { motion } from 'motion/react';
import * as variant from '../lib/motionVariants';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

const Blog = () => {
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
            {blogData.sectionSubtitle}
          </motion.p>
          <motion.h2
            variants={variant.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {blogData.sectionTitle}
          </motion.h2>
          <motion.p
            variants={variant.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text'
          >
            {blogData.sectionText}
          </motion.p>
        </div>
        <motion.div
          variants={variant.staggerContainer}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'
        >
          {blogData.blogs.map(
            (
              {
                imgSrc,
                title,
                badge,
                link,
                author: { avatarSrc, authorName, publishDate, readingTime },
              },
              index
            ) => (
              <motion.div
                variants={variant.fadeInUp}
                key={index}
              >
                <Card className='group'>
                  <CardHeader>
                    <figure className='rounded overflow-hidden'>
                      <img
                        src={imgSrc}
                        alt={title}
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                      />
                    </figure>
                  </CardHeader>

                  <CardContent>
                    <Badge className='bg-green-500 text-white'>{badge}</Badge>
                    <CardTitle className='mt-5'>
                      <a
                        className='text-lg md:text-xl hover:text-green-500 transition-colors duration-200'
                        href={link} target='_blank'
                      >
                        {title}
                      </a>
                    </CardTitle>
                  </CardContent>

                  <CardFooter className='gap-3'>
                    <Avatar>
                      <AvatarImage src={avatarSrc} />
                      <AvatarFallback>{authorName}</AvatarFallback>
                    </Avatar>

                    <div>
                      <p className='text-sm'>{authorName}</p>
                      <div className='flex items-center gap-1.5'>
                        <time
                          dateTime={publishDate}
                          className='text-xs text-muted-foreground'
                        >
                          {publishDate}
                        </time>
                        <span className='w-1 h-1 bg-muted-foreground/50 rounded-full'></span>
                        <p className='text-xs text-muted-foreground'>
                          {readingTime}
                        </p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
