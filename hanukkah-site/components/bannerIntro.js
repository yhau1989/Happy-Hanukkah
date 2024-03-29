import Link from "next/link"
//import Image from 'next/image'
import useDeviceDetect from "../utils/useDeviceDetect"

export default function BannerIntro(params) {
  const { lenguage } = params
  const { isModerWeb } = useDeviceDetect()

  const bannerImgEn = () => {
    let imgUrl = isModerWeb
      ? "https://res.cloudinary.com/software-monkey-ecuador/image/upload/q_auto:best/v1606799084/happy-hanukkah/maxresdefault_wboyia.webp"
      : "https://res.cloudinary.com/software-monkey-ecuador/image/upload/v1606799084/happy-hanukkah/maxresdefault_wboyia.jpg"
    return imgUrl
  }

  const bannerImgEs = () => {
    let imgUrl2 = isModerWeb
      ? "https://res.cloudinary.com/software-monkey-ecuador/image/upload/q_auto:best/v1606213496/happy-hanukkah/maxresdefault_ogbxpu.webp"
      : "https://res.cloudinary.com/software-monkey-ecuador/image/upload/v1606213496/happy-hanukkah/maxresdefault_ogbxpu.jpg"
    return imgUrl2
  }

  // const bannerImgEn = () => {
  //   let img = (isModerWeb)
  //   ? 'https://res.cloudinary.com/software-monkey-ecuador/image/upload/q_auto:best/v1606799084/happy-hanukkah/maxresdefault_wboyia.webp'
  //   : 'https://res.cloudinary.com/software-monkey-ecuador/image/upload/v1606799084/happy-hanukkah/maxresdefault_wboyia.jpg'
  //   return <Image src={img} alt="What is Hanukkah?" height={700} width={1200} />
  // }

  // const bannerImgEs = () => {
  //   let img2 = (isModerWeb)
  //   ? 'https://res.cloudinary.com/software-monkey-ecuador/image/upload/q_auto:best/v1606213496/happy-hanukkah/maxresdefault_ogbxpu.webp'
  //   : 'https://res.cloudinary.com/software-monkey-ecuador/image/upload/v1606213496/happy-hanukkah/maxresdefault_ogbxpu.jpg'
  //   return <Image src={img2} alt="Que es Januca" height={700} width={1200} />
  // }

  if (lenguage == "en") {
    return (
      <div className="py-3 flex flex-col justify-center sm:py-12">
        <Link href="https://youtu.be/ztZTi-5uFkw" legacyBehavior>
          <a
            className="relative p-3 sm:max-w-4xl sm:mx-auto text-indigo-300 hover:text-indigo-600"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="What is Hanukkah?"
          >
            {/* {bannerImgEn()} */}

            <img src={bannerImgEn()} alt="What is Hanukkah?" loading="lazy" />

            <div className="absolute inset-14 sm:rounded-3xl flex flex-col justify-center">
              <svg
                className="relative mx-auto w-16 h-16 md:w-32 md:h-32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                  fill="currentColor"
                />
                <path
                  d="M16 12L10 16.3301V7.66987L16 12Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </a>
        </Link>
      </div>
    )
  } else {
    return (
      <div className="py-3 flex flex-col justify-center sm:py-12">
        <Link href="https://youtu.be/ztZTi-5uFkw" legacyBehavior>
          <a
            className="relative p-3 sm:max-w-4xl sm:mx-auto text-indigo-300 hover:text-indigo-600"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Que es Januca?"
          >
            {/* {bannerImgEs()} */}
            <img src={bannerImgEs()} alt="Que es Januca?" loading="lazy" />
            <div className="absolute inset-14 sm:rounded-3xl flex flex-col justify-center">
              <svg
                className="relative mx-auto w-16 h-16 md:w-32 md:h-32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                  fill="currentColor"
                />
                <path
                  d="M16 12L10 16.3301V7.66987L16 12Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </a>
        </Link>
      </div>
    )
  }
}
