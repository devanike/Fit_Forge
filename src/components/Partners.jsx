import { partnersImages } from "../constants"

const Partners = () => {
  return (
    <div className="relative overflow-hidden w-full mx-auto bg-primary dark:bg-stone-950 pt-10 pb-10 mb-10" id="partners">

      <div
        className="flex scroll-animation gap-0"
        style={{ width: `calc(250px * ${partnersImages.length * 2})` }}
      >
        {[...partnersImages, ...partnersImages].map((partner, index) => (
          <div key={index} className="w-[200px] h-[200px] flex flex-col flex-1 items-center justify-center group ml-5">
            <img 
              src={partner.src} 
              alt={`Slide ${index}`} 
              className="h-full w-full object-contain" 
            />
            <h3 className="mt-5 text-sm text-white dark:text-gray-200 font-semibold -ml-20">
              {partner.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partners