import { useEffect, useState } from 'react'
import { IconButton } from 'rsuite'
import { Icon } from '../../index'
import './ScrollArrow.css'

export function ScrollArrow() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    function handleCheckScrollTop() {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false)
      }
    }

    window.addEventListener('scroll', handleCheckScrollTop)
  }, [showScroll])

  function handleScrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <IconButton
      className={`scrollArrow ${showScroll ? 'show' : ''}`}
      icon={<Icon iconName="chevronUp" />}
      appearance="primary"
      onClick={handleScrollTop}
      color="blue"
      size="lg"
    />
  )
}
