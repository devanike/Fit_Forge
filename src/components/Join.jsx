import Button from './Button'
import styles from '../style'
import { gym } from '../assets'

const Join = () => {
  return (
    <section className={`relative ${styles.flexCenter} px-6 py-12`} id='join'>
       {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={gym}
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      <div className="md:w-1/2 space-y-6 md:text-left z-10">
        <h2 className="md:text-[40px] text-[30px] font-bold text dark:text-white text-center">
          Be Part of Our Journey!
        </h2>
        <p className="text dark:text-white text-center">
          Join us to explore exciting opportunities and make a difference.
          Sign up to stay connected and informed about our latest updates!
        </p>
        <form className="w-full space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:text"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:text"
          />
          <Button name={'Join Us'} styles='text dark:text-white'/>
        </form>
      </div>
    </section>
  )
}

export default Join