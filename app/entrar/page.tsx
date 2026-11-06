
import Link from "next/link";

export default function Entrar() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="block text-center text-3xl font-extrabold text-[#202b3c] mb-8"
        >
          עברית<span className="text-[#d97745]">+</span>
        </Link>

        <section className="bg-white rounded-2xl border border-[#ece9e3] p-8 shadow-sm">
          <div className="text-center mb-8">
            <p className="text-xs font-bold tracking-widest text-[#c66b3d]">
              ÁREA DO ALUNO
            </p>

            <h1 className="text-3xl font-bold text-[#202b3c] mt-3">
              Bem-vindo de volta
            </h1>

            <p className="text-[#687181] mt-3 text-sm">
              Entre para continuar aprendendo hebraico.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[#202b3c] mb-2"
              >
                E-mail
              </label>

              <input
                id="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#c66b3d]"
              />
            </div>

            <div>
              <label
                htmlFor="senha"
                className="block text-sm font-semibold text-[#202b3c] mb-2"
              >
                Senha
              </label>

              <input
                id="senha"
                type="password"
                placeholder="Digite sua senha"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#c66b3d]"
              />
            </div>

            <button
              type="button"
              className="w-full bg-[#26364d] text-white font-bold rounded-lg py-3 hover:bg-[#344966] transition"
            >
              Entrar
            </button>
          </form>

          <p className="text-center text-sm text-[#687181] mt-7">
            Ainda não tem acesso?{" "}
            <Link
              href="/"
              className="text-[#c66b3d] font-bold"
            >
              Conheça o curso
            </Link>
          </p>
        </section>

        <p className="text-center text-xs text-[#687181] mt-6">
          Hebraico conectado à vida.
        </p>
      </div>
    </main>
  );
}
