import { useRouter } from "next/router"

export default function Cargando() {
  const router = useRouter();
  const { locale } = router
    return (
    <span id="loading" className="important text-2xl">{(locale == "en")? "Loading..." : "Cargando..."}</span>
      )

}