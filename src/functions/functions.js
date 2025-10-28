const generatePaginationData = (currentPage = 1, totalPages = 10) => {
  const data = [];

  data.push({ id: 1, page: 1, isCurrent: currentPage === 1 });

  if (currentPage <= 4) {
    for (let i = 2; i <= 4; i++) {
      data.push({ id: i, page: i, isCurrent: currentPage === i });
    }
    data.push({ id: 5, page: '...' });
  } else if (currentPage >= totalPages - 3) {
    data.push({ id: 2, page: '...' });
    for (let i = totalPages - 3; i < totalPages; i++) {
      data.push({ id: i, page: i, isCurrent: currentPage === i });
    }
  } else {
    data.push({ id: 2, page: '...' });
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      data.push({ id: i, page: i, isCurrent: currentPage === i });
    }
    data.push({ id: currentPage + 2, page: '...' });
  }

  data.push({ id: totalPages, page: totalPages, isCurrent: currentPage === totalPages });

  return data;
};

export {generatePaginationData};
