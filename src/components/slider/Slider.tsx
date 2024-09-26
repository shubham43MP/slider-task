import { CustomSliderProps } from './types';
import { useSliderController } from './useSliderController';
import './slider.css';

export const Slider = ({ max, min, value, width, onChange }: CustomSliderProps) => {
  const {
    sliderRef,
    percentage,
    handleMouseDown
  } = useSliderController({max, min, value, onChange})

  return (
    <div
      ref={sliderRef}
      className='slider-ref'
      style={{
        width: `${width}px`,
        background: `linear-gradient(to right, rgb(108, 84, 246) ${percentage}%, #b8b3db ${percentage}%)`,
      }}
      onMouseDown={handleMouseDown}
    >
      <div
        className='slider-marker'
        style={{ left: `${percentage}%`}}
      />
    </div>
  );
};

