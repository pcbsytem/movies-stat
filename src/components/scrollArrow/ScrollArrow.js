import { useEffect, useState } from "react";
import { Icon, IconButton } from "rsuite";
import "./ScrollArrow.css";

function ScrollArrow() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleCheckScrollTop);
  }, []);

  function handleCheckScrollTop() {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  }

  function handleScrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <IconButton
      classPrefix={`scrollArrow ${showScroll ? "show" : ""}`}
      icon={<Icon icon="chevron-up" />}
      color="blue"
      size="lg"
      onClick={handleScrollTop}
    />
  );
}

export default ScrollArrow;
