/**
 * A custom to detect the direction of scrolling events
 *
 * @author Richard Nguyen <richard.0ng616@gmail.com>
 */
import { useState, useEffect } from "react";

const SCROLL_UP = "up";
const SCROLL_DOWN = "down";

type Direction = "up" | "down";

interface Config {
  initialDirection: Direction;
  thresholdPixel?: number;
}

const useScrollDirection = ({
  initialDirection,
  thresholdPixel,
}: Config): Direction => {
  const [direction, setDirection] = useState(initialDirection);

  useEffect(() => {
    const threshold = thresholdPixel || 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      setDirection(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [direction, thresholdPixel]);

  return direction;
};

export default useScrollDirection;
