import styles from '../style'
const Footer = () => {
  return (
    <footer className="background dark:background px-6 py-10">
      <div className="flex flex-1 flex-col items-center mb-6">
        <div className="text-2xl font-bold text-white mb-4">
        <span className={`font-gugi text dark:text text-[26px]`}>FitForge</span>
        </div>
        <p className="text-sm text text-center md:text-left">
        Please feel free to send us an e-mail at fitforge@gmail.com for any additional inquiries
        </p>
      </div>

      <div className={`${styles.flexCenter} flex-col md:flex-row m-auto text-center gap-8`}>
        <div className={`${styles.flexCenter} flex-col flex-1`}>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text">Working Hours</h3>
          </div>
          <ul className="text-sm space-y-2 text">
            <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
            <li>Saturday: 9:00 AM - 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        <div className={`${styles.flexCenter} flex-col flex-1`}>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text">Location</h3>
          </div>
          <address className="text-sm not-italic space-y-2 text">
            <p>123 Gym Street</p>
            <p>Fitness District</p>
            <p>New York, NY 10001</p>
            <p>United States</p>
          </address>
        </div>

        <div className={`${styles.flexCenter} flex-col flex-1`}>
          <h3 className="text-lg font-semibold text mb-4">Connect With Us</h3>
          <div className="flex gap-4 text">
            <a 
              href="#" 
              aria-label="Visit our Facebook page"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a 
              href="#" 
              aria-label="Visit our Instagram page"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
              </svg>
            </a>
            <a 
              href="#" 
              aria-label="Visit our Twitter page"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
          </div>
          <div className="mt-6 text-sm text">
            <p>Follow us for latest updates</p>
            <p>and fitness tips!</p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-800">
        <p className="text-center text-sm text">
          © {new Date().getFullYear()} FitForge. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;