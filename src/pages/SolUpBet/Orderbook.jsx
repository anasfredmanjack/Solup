import React, { useState } from 'react';

const Orderbook = () => {
  const data = [
    { id: 1, col1: '200,000.93', col2: '30', col3: '200,500.10', col4: '40' },
    { id: 2, col1: '300,000.50', col2: '35', col3: '400,500.99', col4: '45' },
    { id: 3, col1: '150,000.25', col2: '40', col3: '250,500.30', col4: '50' },
    { id: 4, col1: '100,000.75', col2: '20', col3: '150,600.20', col4: '60' },
    { id: 5, col1: '500,000.85', col2: '50', col3: '600,500.80', col4: '70' },
    { id: 6, col1: '350,000.60', col2: '55', col3: '400,300.99', col4: '65' },
    { id: 7, col1: '250,000.40', col2: '60', col3: '300,200.70', col4: '35' },
    { id: 8, col1: '200,000.99', col2: '25', col3: '250,600.90', col4: '55' },
    { id: 9, col1: '200,000.93', col2: '30', col3: '200,500.10', col4: '40' },
    { id: 10, col1: '300,000.50', col2: '35', col3: '400,500.99', col4: '45' },
    { id: 11, col1: '150,000.25', col2: '40', col3: '250,500.30', col4: '50' },
    { id: 12, col1: '100,000.75', col2: '20', col3: '150,600.20', col4: '60' },
    { id: 13, col1: '500,000.85', col2: '50', col3: '600,500.80', col4: '70' },
    { id: 14, col1: '350,000.60', col2: '55', col3: '400,300.99', col4: '65' },
    { id: 15, col1: '250,000.40', col2: '60', col3: '300,200.70', col4: '35' },
    { id: 16, col1: '200,000.99', col2: '25', col3: '250,600.90', col4: '55' },
  ];

  const rowsPerPage = 13;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const currentTableData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <table className="min-w-full text-sm text-gray-600 border-collapse">
        <thead>
          <tr>
            <th className="p-2 border-b">Price (USDC)</th>
            <th className="p-2 border-b">Quantity (shares)</th>
            <th className="p-2 border-b">Price (USDC)</th>
            <th className="p-2 border-b">Quantity (shares)</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((row) => (
            <tr key={row.id} className="border-b">
              <td className="p-2">{row.col1}</td>
              <td className="p-2 border-r-2 border-purple-600">{row.col2}</td>
              <td className="p-2">{row.col3}</td>
              <td className="p-2">{row.col4}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center text-sm mt-4">
        <button
          onClick={handlePrevious}
          className={`px-2 mr-2 rounded border-purple-600 border-2 ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
          disabled={currentPage === 1}
        >
          <i className="fa-solid text-purple-600 fa-angle-left"></i>
        </button>

        <div className="flex space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-2 rounded border-purple-600 border-2 ${currentPage === index + 1 ? 'bg-purple-600 text-white' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className={`px-2 ml-2 rounded border-purple-600 border-2 ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
          disabled={currentPage === totalPages}
        >
          <i className="fa-solid fa-angle-right text-purple-600"></i>
        </button>
      </div>
    </div>
  );
};

export default Orderbook;