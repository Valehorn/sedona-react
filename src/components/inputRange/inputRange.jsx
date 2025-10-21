import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './input-range.scss';

function InputRange({
  className,
  min = 0,
  max = 10000,
  value = [0, 10000],
  onChange = () => { }
}) {
  const handleChange = (newRange) => {
    onChange(newRange);
  };

  return (
    <Slider
      className={className}
      classNames={{
        rail: `${className}-rail`,
        track: `${className}-track`,
        handle: `${className}-handle`
      }}
      range
      min={min}
      max={max}
      step={1}
      value={value}
      onChange={handleChange}
      allowCross={false}
    />
  );
}

export default InputRange;
