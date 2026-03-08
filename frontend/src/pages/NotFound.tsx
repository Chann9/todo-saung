import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-teal-300 to-yellow-200 px-6">
      <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-full max-w-md border border-white/30 text-center">
        <div className="text-6xl font-bold text-teal-700 mb-2">404</div>
        <h1 className="text-2xl font-bold text-teal-700">Halaman Tidak Ditemukan</h1>
        <p className="text-teal-600 mt-2">
          URL yang kamu akses tidak dikenali. Silakan kembali ke halaman yang tersedia.
        </p>

        <div className="flex gap-3 justify-center mt-8">
          <Link
            to="/app/dashboard"
            className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-5 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Dashboard
          </Link>

          <Link
            to="/app/login"
            className="text-teal-700 hover:text-teal-900 font-semibold px-5 py-2 rounded-xl hover:bg-teal-50 transition-all duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}