import { heroBanner } from '@/assets';
import { heroData } from '@/constants';
import { CirclePlay } from 'lucide-react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  Variants,
} from 'motion/react';
import { useRef } from 'react';
import ReactPlayer from 'react-player';
import { AspectRatio } from './ui/aspect-ratio';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

// Framer Motion variants
const heroVariant: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const heroChildVariant: Variants = {
  start: {
    y: 30,
    opacity: 0,
    filter: 'blur(5px)',
  },
  end: {
    y: 0,
    opacity: 1,
    filter: 'blur(0)',
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const Hero = () => {
  const heroBannerImg = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroBannerImg,
    offset: ['start 1080px', '50% start'],
  });

  const scrollYTransform = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  const scale = useSpring(scrollYTransform, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className='md:py-16 py-10'>
      <motion.div
        variants={heroVariant}
        initial='start'
        animate='end'
        className='container text-center'
      >
        <div className='max-w-screen-md mx-auto'>
          <motion.p
            variants={heroChildVariant}
            className='bg-secondary/50 border-foreground/10 border-t rounded-full text-secondary-foreground text-sm backdrop-blur-3xl max-w-md mb-6 md:mb-10 mx-auto px-3 py-1 tracking-wider uppercase'
          >
            {heroData.sectionSubtitle}
          </motion.p>
          <motion.h2
            variants={heroChildVariant}
            className='text-4xl !leading-tight font-semibold lg:text-6xl mb-4 md:mb-5 md:text-5xl'
          >
            {heroData.sectionTitle}

            <span className='isolate ms-4 relative'>
              {heroData.decoTitle}

              <span className='bg-foreground/5 border-foreground/20 border-t rounded-full shadow-[inset_0px_0px_30px_0px] shadow-foreground/20 -left-6 -right-4 -z-10 absolute bottom-0.5 lg:bottom-2 lg:top-4 md:bottom-1 md:top-3 mx-3 px-8 top-2'></span>
            </span>
          </motion.h2>
          <motion.p
            variants={heroChildVariant}
            className='text-muted-foreground md:text-lg'
          >
            {heroData.sectionText}
          </motion.p>
          <motion.div
            variants={heroChildVariant}
            className='flex justify-center gap-2 items-center max-md:mt-10 mt-6'
          >
            <Button className='bg-green-900 text-white hover:bg-green-800'>
              Start For Free
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant='ghost'>
                  <CirclePlay /> Watch Demo
                </Button>
              </DialogTrigger>
              <DialogContent className='p-0 max-w-[640px] overflow-hidden xl:max-w-[1000px]'>
                <AspectRatio ratio={16 / 9}>
                  <ReactPlayer
                    url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                    style={{
                      minWidth: ' 100%',
                      maxWidth: ' 100%',
                      minHeight: ' 100%',
                      maxHeight: ' 100%',
                    }}
                  />
                </AspectRatio>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
        <div className='isolate max-w-screen-xl mt-12 mx-auto relative'>
          <motion.figure
            className='bg-background/60 border border-slate-800 rounded-xl shadow-2xl backdrop-blur-3xl overflow-hidden'
            initial={{
              y: 120,
              opacity: 0,
              filter: 'blur(5px)',
            }}
            animate={{
              y: 0,
              opacity: 1,
              filter: 'blur(0px)',
            }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: 'backInOut',
            }}
            ref={heroBannerImg}
            style={{ scale }}
          >
            <img
              src={heroBanner}
              width={1468}
              height={460}
              alt='AnalytiX Dashboard'
            />
          </motion.figure>
          {/* Blurry Effect */}
          <motion.div
            className='bg-green-500 -z-10 absolute blur-[50px] inset-5'
            initial={{
              scale: 0.4,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              delay: 1.5,
              ease: 'backOut',
            }}
          ></motion.div>
          <motion.div
            className='bg-green-500 rounded-full -z-10 absolute blur-[200px] inset-0 scale-x-75 scale-y-75'
            initial={{
              scale: 0.4,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              delay: 1.5,
              ease: 'backOut',
            }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
