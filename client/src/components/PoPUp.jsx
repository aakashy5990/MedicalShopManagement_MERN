import React from 'react'

const Popup = ({ title = 'Details', columns = [], rows = [], onClose }) => {
  return (
    <>
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
            <div className="relative bg-white rounded-2xl shadow-2xl w-[92%] sm:w-4/5 lg:w-3/4 max-w-5xl max-h-[80vh] overflow-hidden">
                {/* Header: left title, right close icon */
                }
                <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{title}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100 active:scale-95 transition"
                        aria-label="Close"
                    >
                        <svg className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                    <div className="overflow-x-auto rounded-xl border border-gray-200">
                        <table className="min-w-full text-left">
                            <thead className="bg-gray-50 text-gray-700 text-sm">
                                <tr>
                                    {columns.map(col => (
                                        <th key={col.key} className="px-4 py-3 font-medium">{col.label}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm text-gray-800">
                                {rows.map((row, index) => (
                                    <tr className="hover:bg-gray-50" key={row._id || row.id || index}>
                                        {columns.map(col => (
                                            <td key={col.key} className="px-4 py-3">{row[col.key]}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Popup