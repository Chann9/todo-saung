import Navbar from '../components/Navbar';

export default function UserStatisticsPage() {
  // Sample user statistics data (not connected to API)
  const stats = [
    { label: 'Total Todos', value: 24 },
    { label: 'Completed', value: 15 },
    { label: 'Pending', value: 9 },
    { label: 'Streak (hari)', value: 4 },
  ];

  const topUsers = [
    { name: 'User A', completed: 18 },
    { name: 'User B', completed: 12 },
    { name: 'User C', completed: 9 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-teal-300 to-yellow-200">
      <Navbar />

      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-8 mb-8 border border-white/30">
            <h1 className="text-4xl font-bold text-teal-700 mb-2">User Statistics</h1>
            <p className="text-teal-600">Lihat ringkasan statistik pengguna (contoh data)</p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((item) => (
              <div
                key={item.label}
                className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-6 border border-white/30 text-center"
              >
                <div className="text-teal-700 font-semibold">{item.label}</div>
                <div className="text-4xl font-bold text-teal-600 mt-2">{item.value}</div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-white/30">
            <h2 className="text-2xl font-bold text-teal-700 mb-2">Top Users</h2>
            <p className="text-teal-600 mb-6">Contoh peringkat berdasarkan todo yang selesai</p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left bg-teal-50">
                    <th className="px-4 py-3 text-teal-700 font-semibold rounded-l-xl">Nama</th>
                    <th className="px-4 py-3 text-teal-700 font-semibold rounded-r-xl">Completed</th>
                  </tr>
                </thead>
                <tbody>
                  {topUsers.map((u) => (
                    <tr key={u.name} className="border-b border-teal-100">
                      <td className="px-4 py-3 text-gray-700">{u.name}</td>
                      <td className="px-4 py-3 text-gray-700">{u.completed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-sm text-teal-600 mt-6">
              Catatan: ini masih data contoh. Kalau sudah ada API, tinggal ganti datanya dari backend.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}