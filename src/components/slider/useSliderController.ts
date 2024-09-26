import { useState, useRef, useEffect } from 'react';
import { CustomSliderProps } from './types';

type SliderControllerHookProps = Omit<CustomSliderProps, "width">;

export const useSliderController = ({ max, min, value, onChange }: SliderControllerHookProps) => {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [currentValue, setCurrentValue] = useState(value);
    const [isDragging, setIsDragging] = useState(false);
  
    const calculateValueFromPosition = (clientX: number) => {
      if (!sliderRef.current) return currentValue;
  
      const rect = sliderRef.current.getBoundingClientRect();
      const relativePosition = clientX - rect.left;
      const percentage = relativePosition / rect.width;
      return  Math.min(Math.max(min + percentage * (max - min), min), max);
    };
  
    const mouseMoveHandler = (e: MouseEvent) => {
      if (!isDragging) return;
  
      const newValue = calculateValueFromPosition(e.clientX);
      setCurrentValue(newValue);
      onChange(newValue); 
    };
  
    const handleMouseDown = () => {
      setIsDragging(true);
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    useEffect(() => {
      if (isDragging) {
        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseup', handleMouseUp);
      } else {
        window.removeEventListener('mousemove', mouseMoveHandler);
        window.removeEventListener('mouseup', handleMouseUp);
      }
  
      return () => {
        window.removeEventListener('mousemove', mouseMoveHandler);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }, [isDragging]);
  
    useEffect(() => {
      setCurrentValue(value);
    }, [value]);
  
    const percentage = ((currentValue - min) / (max - min)) * 100;

    return {
        sliderRef,
        percentage,
        handleMouseDown
    }
}