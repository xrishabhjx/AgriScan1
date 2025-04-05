import Logo from '@/assets/logo.svg';
import { footerData } from '@/constants';

const Footer = () => {
  return (
    <footer className='section'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-x-2 gap-y-10 lg:grid-cols-4'>
          <div className='lg:col-span-1 p-1'>
            <img
              src={Logo}
              alt='AgriScan'
            />
          </div>
          <div className='grid grid-cols-2 gap-x-2 gap-y-8 text-sm sm:grid-cols-4 lg:col-span-3'>
            {footerData.links.map(({ title, items }, index) => (
              <ul key={index}>
                <p className='mb-4'>{title}</p>
                {items.map(({ label, href }, index) => (
                  <li
                    key={index}
                    className='text-muted-foreground transition-colors hover:text-green-500'
                  >
                    <a
                      className='inline-block py-1'
                      href={href}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className='text-center mt-12 flex flex-col sm:flex-row justify-between items-center border-t'>
          <a
            href=''
            className='text-muted-foreground'
          >
            {footerData.copyright}
          </a>
          <div className='social-wrapper flex justify-center items-center'>
            <ul className='flex gap-5 mt-3'>
              {footerData.socialLinks.map(({ href, icon }, index) => (
                <li key={index}>
                  <a href={href}>{icon}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
