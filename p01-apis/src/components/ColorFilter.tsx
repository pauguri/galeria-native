import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import "./ColorFilter.css";
import { colorFromEBC, getSRMGradient } from "../utils/colorUtils";
import { NumberRange } from "../@types/types";
import { useRef } from "react";

export default function ColorFilter({ onChange }: { onChange: (newRange: NumberRange) => void }) {
  const currentRange = useRef<NumberRange | null>(null);

  const updateThumbColors = (change: ChangeResult) => {
    const root = document.documentElement;
    root.style.setProperty('--color-filter-right-color', colorFromEBC(change.maxValue));
    root.style.setProperty('--color-filter-left-color', colorFromEBC(change.minValue));
  }

  const setCurrentRange = (change: ChangeResult) => {
    currentRange.current = { from: change.minValue, to: change.maxValue };
  }

  const fireCallback = () => {
    if (!currentRange.current) return;
    onChange({ from: currentRange.current.from, to: currentRange.current.to });
  }

  return (
    <section className="color-filter">
      <div className="slider-container">
        <MultiRangeSlider
          min={1}
          minValue={4}
          max={79}
          maxValue={76}
          step={1}
          preventWheel={true}
          ruler={false}
          label={false}
          className="color-filter-slider"
          onInput={updateThumbColors}
          onChange={setCurrentRange}
        >
        </MultiRangeSlider>
        <div className="slider-gradient" style={{ background: getSRMGradient() }}></div>
      </div>
      <button onClick={fireCallback}>Filter</button>
    </section>
  )
}
