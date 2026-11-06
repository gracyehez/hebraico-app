
import Link from "next/link";

export default function Cadastro() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-[#26364d]">
            Hebraico App
          </Link>

          <h1 className="text-3xl font-bold text-[#26364d] mt-8">
            Crie sua conta
          </h1>

          <p className="text-gray-600 mt-3">
            Comece sua jornada de aprendizagem do hebraico.
          </p>
        </div>

        <form className="bg-white rounded-2xl shadow-sm border border-gray-200 p-7 space-y-5">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium mb-2">
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              placeholder="Seu nome"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#c66b3d]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#c66b3d]"
            />
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium mb-2">
              Senha
            </label>
            <input
              id="senha"
              name="senha"
              type="password"
              placeholder="Crie uma senha"
              required
              minLength={8}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#c66b3d]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#26364d] text-white font-semibold py-3 hover:bg-[#354a66] transition"
          >
            Criar minha conta
          </button>

          <p className="text-center text-sm text-gray-600">
            Já tem uma conta?{" "}
            <Link href="/entrar" className="font-semibold text-[#c66b3d]">
              Entrar
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
