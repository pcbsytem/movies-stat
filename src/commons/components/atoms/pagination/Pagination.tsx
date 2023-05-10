import { useEffect, useState } from 'react'
import { Pagination as PaginationRsuite } from 'rsuite'

interface PaginationProps {
  currentPage: number
  handlePagination: (page: number) => void
  maxButtons: number
  totalCount: number
}

export function Pagination({
  currentPage = 1,
  handlePagination,
  maxButtons,
  totalCount = 10
}: PaginationProps) {
  const [activePage, setActivePage] = useState(currentPage)
  const [totalPage, setTotalPage] = useState(totalCount)

  useEffect(() => {
    setTotalPage(totalCount)
  }, [totalCount])

  function handleSelect(eventKey) {
    handlePagination(eventKey)
    setActivePage(eventKey)
  }

  return (
    <PaginationRsuite
      prev
      last
      next
      first
      size="lg"
      maxButtons={maxButtons}
      pages={totalPage}
      activePage={activePage}
      onSelect={handleSelect}
      style={{ margin: '16px 0' }}
      total={0}
    />
  )
}
