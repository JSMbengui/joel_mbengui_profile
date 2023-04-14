import Link from "next/link"

const NotFound = () => {
  return (
    <div className="container">
      <div className="mt-5 mb-5 sm:mb-12 sm:mt-4">
        <h1 className="text-white font-bold mb-2 sm:mb-4 sm:text-5xl text-5xl">
          Pagina não encontrada
        </h1>
        <Link href={"/"} className="text-md sm:text-xl text-neutral-400">Voltar a pagina principal</Link>
      </div>
    </div>
  )
}

export default NotFound