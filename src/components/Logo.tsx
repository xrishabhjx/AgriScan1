import { favicon, logo } from '@/assets';

type LogoType = {
  variant?: 'default' | 'icon';
};

const Logo = ({ variant = 'default' }: LogoType) => {
  return (
    <a
      href=''
      className=''
    >
      {variant === 'default' && (
        <img
          src={logo}
          alt='AnalytiX logo'
          width={150}
          height={31}
        />
      )}
      {variant === 'icon' && (
        <img
          src={favicon}
          alt='AnalytiX logo'
          width={32}
          height={32}
        />
      )}
    </a>
  );
};

export default Logo;
