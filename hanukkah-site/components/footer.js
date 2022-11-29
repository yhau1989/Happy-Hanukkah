import Link from "next/link"
export default function Footer() {
  return (
    <div
      id="footer"
      width="275"
      height="25"
      className="mt-10 mb-3 text-center text-white flex"
    >
      CJEEI - made with{" "}
      <svg
        width="24"
        height="24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        className="text-red-600 mx-2"
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
      <Link
        className="mx-3"
        href="https://twitter.com/samuelpilay"
        legacyBehavior
      >
        <a
          className="text-indigo-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          @SamuelPilay
        </a>
      </Link>
    </div>
  )
}
