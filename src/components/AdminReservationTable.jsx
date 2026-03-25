function AdminReservationTable({
  reservations,
  onChangeStatus,
  onDeleteReservation,
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Bronlar ro‘yxati</h2>
        <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold text-slate-700">
          {reservations.length} ta
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="text-left text-sm text-slate-500">
              <th className="px-4">Kitob</th>
              <th className="px-4">F.I.SH</th>
              <th className="px-4">Telefon</th>
              <th className="px-4">Student ID</th>
              <th className="px-4">Status</th>
              <th className="px-4">Amallar</th>
            </tr>
          </thead>

          <tbody>
            {reservations.map((item) => (
              <tr key={item._id} className="rounded-2xl bg-slate-50">
                <td className="rounded-l-2xl px-4 py-4 font-semibold text-slate-900">
                  {item.bookTitle}
                </td>
                <td className="px-4 py-4 text-slate-700">{item.fullName}</td>
                <td className="px-4 py-4 text-slate-700">{item.phone}</td>
                <td className="px-4 py-4 text-slate-700">{item.studentId}</td>
                <td className="px-4 py-4">
                  <select
                    value={item.status}
                    onChange={(e) => onChangeStatus(item._id, e.target.value)}
                    className="rounded-xl border border-slate-200 px-3 py-2 outline-none"
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="returned">Returned</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="rounded-r-2xl px-4 py-4">
                  <button
                    onClick={() => onDeleteReservation(item._id)}
                    className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                  >
                    O‘chirish
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {reservations.length === 0 && (
          <div className="py-10 text-center text-slate-500">
            Hozircha bronlar mavjud emas.
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminReservationTable;