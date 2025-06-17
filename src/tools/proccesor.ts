import { useEffect, useState } from "react";

export const useScrollEffect = ( number: number = 100 ) => {
  const [hideArrow, setHideArrow] = useState(false);
  const [blurCard, setBlurCard] = useState(false);
  const [blurSoc, setBlurSoc] = useState(false);
  const [containerShow, setContainerShow] = useState(false)
  const [circle, setCircle] = useState(false)
  const [menuX, setMenuX] = useState(false)
  const [scrollY, setScrollY] = useState(0);
  const [skill, setSkill] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldBlur = scrollY > number;
      setScrollY(scrollY);

      setHideArrow(shouldBlur);
      setBlurCard(shouldBlur);
      setBlurSoc(shouldBlur);
      setContainerShow(shouldBlur)
      setCircle(shouldBlur)
      setMenuX(shouldBlur)
      setSkill(shouldBlur)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { hideArrow, blurCard, blurSoc, containerShow, circle, menuX, scrollY, skill };
};