import { useEffect, useState } from 'react';
import { Pagination as PaginationRsuite } from 'rsuite';
import { PaginationProps } from '../atoms.types';

export function Pagination({
  currentPage = 1,
  handlePagination,
  maxButtons,
  totalCount = 10
}: PaginationProps) {
  const [activePage, setActivePage] = useState<number | undefined>(currentPage);
  const [totalPage, setTotalPage] = useState(totalCount);

  useEffect(() => {
    setTotalPage(totalCount);
  }, [totalCount]);

  const handleSelect = (eventKey: string | number) => {
    const activeKey = Number(eventKey);
    handlePagination(activeKey);
    setActivePage(activeKey);
  };

  return (
    <PaginationRsuite
      prev
      last
      next
      first
      size='lg'
      maxButtons={maxButtons}
      pages={totalPage}
      activePage={activePage}
      onSelect={handleSelect}
      style={{ margin: '1rem 0' }}
      total={0}
    />
  );
}
