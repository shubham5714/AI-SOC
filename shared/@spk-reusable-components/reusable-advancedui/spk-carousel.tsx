import React from "react";
import { Carousel } from "react-bootstrap";

interface SpkCarouselComponentProps {
  bsPrefix?: string;
  as?: React.ElementType;
  slide?: boolean;
  fade?: boolean;
  controls?: boolean;
  indicators?: boolean;
  indicatorLabels?: string[];
  activeIndex?: number;
  onSelect?: (selectedIndex: number, e: Record<string, unknown> | null) => void;
  onSlide?: (event: number, direction: 'start' | 'end') => void;
  onSlid?: (event: number, direction: 'start' | 'end') => void;
  interval?: number | null;
  interval1?: number;
  keyboard?: boolean;
  pause?: "hover" | false;
  wrap?: boolean;
  touch?: boolean;
  prevIcon?: React.ReactNode;
  prevLabel?: string;
  nextIcon?: React.ReactNode;
  nextLabel?: string;
  variant?: string;
  defaultActiveIndex?: number;
  mainClass?: string;
  items?: React.ReactNode[];
}

const SpkCarouselComponent: React.FC<SpkCarouselComponentProps> = ({
  bsPrefix,
  as,
  slide = true,
  fade = false,
  controls = true,
  indicators = false,
  indicatorLabels,
  activeIndex,
  onSelect,
  onSlide,
  onSlid,
  interval,
  interval1,
  keyboard = false,
  pause = "hover",
  wrap = false,
  touch = false,
  prevIcon,
  prevLabel = "Previous",
  nextIcon,
  nextLabel = "Next",
  variant,
  defaultActiveIndex = 0,
  mainClass,
  items,
  ...props
}) => {
  return (
    <Carousel
      bsPrefix={bsPrefix}
      as={as}
      slide={slide}
      fade={fade}
      controls={controls}
      indicators={indicators}
      activeIndex={activeIndex}
      onSelect={onSelect}
      onSlide={onSlide}
      onSlid={onSlid}
      interval={interval}
      keyboard={keyboard}
      pause={pause}
      wrap={wrap}
      touch={touch}
      prevIcon={prevIcon}
      prevLabel={prevLabel}
      nextIcon={nextIcon}
      nextLabel={nextLabel}
      variant={variant}
      defaultActiveIndex={defaultActiveIndex}
      className={mainClass}
      {...props}
    >
      {items.map((Item: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
        <Carousel.Item key={index} interval={interval1} >
          {Item}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SpkCarouselComponent;
