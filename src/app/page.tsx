import Link from "next/link"


const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Link href="/documents"> Clique aqui </Link>
    </div>
  )
}

export default Home