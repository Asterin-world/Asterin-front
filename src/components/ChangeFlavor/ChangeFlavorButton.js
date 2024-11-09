import React from "react";
import "./ChangeFlavorButton.css"; // CSS for styling
import { useDispatch, useSelector } from 'react-redux'; // Hook to dispatch actions
import { toggleFlavor } from '../../reducers/flavorSlice'; // Path to your flavor slice

const ClickToChange = () => {
  const dispatch = useDispatch(); // Initialize the dispatch hook
  const flavor = useSelector((state) => state.flavor.flavor); // Access flavor state

  const handleClick = () => {
    dispatch(toggleFlavor()); 
  };


  // Tooltip message based on the current flavor state
  const tooltipMessage = flavor === 'mojito' ? "Hi! I am classic" : "Hi! I am mojito";

  return (
    <div className="click-to-change tooltip-wrapper">
      <div className="semi-circle-text" style={{ zIndex: 1111 }} onClick={handleClick} >
        <div className="tooltip">{tooltipMessage}</div>
        <svg viewBox="0 0 100 50" className="circle-svg">
          <path
            id="circle"
            d="M 50,50 m -35,0 a 35,35 0 1,1 70,0"
            fill="none"
          />
          <text>
            <textPath href="#circle" startOffset="3%">
              • CLICK TO CHANGE •
            </textPath>
          </text>
        </svg>

        {/* Can SVG inside the semi-circle */}
        <div className="can-inside-circle">
          <svg
            width="37"
            height="67"
            viewBox="0 0 37 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.184 31.667L17.1839 32.3856L15.3628 40.6689L22.8511 31.1842L19.8333 30.5577L21.5533 22.2744L14.184 31.667Z"
              fill="#0A0A0A"
            />
            <path
              d="M14.615 39.8L14.9204 38.4079C12.4122 37.11 10.6989 34.4896 10.6989 31.472C10.6989 27.154 14.1995 23.6531 18.5178 23.6531C18.7715 23.6531 19.023 23.6643 19.2767 23.6868L20.2602 22.4338C19.6899 22.3328 19.1105 22.2744 18.5178 22.2744C13.4364 22.2744 9.3205 26.3903 9.3205 31.4717C9.3205 35.1565 11.4871 38.3296 14.615 39.8Z"
              fill="#0A0A0A"
            />
            <path
              d="M26.3364 31.4718C26.3364 35.7898 22.8358 39.2906 18.5176 39.2906C18.2302 39.2906 17.9428 39.2727 17.6621 39.2457L16.6786 40.4875C17.2759 40.6065 17.8911 40.6694 18.5176 40.6694C23.599 40.6694 27.7149 36.5535 27.7149 31.4721C27.7149 27.7536 25.5009 24.5448 22.3236 23.0968L22.0362 24.489C24.5825 25.7756 26.3364 28.4205 26.3364 31.4718Z"
              fill="#0A0A0A"
            />
            <path
              d="M3.96358 9.25414C3.96358 9.18372 3.98525 9.10786 4.00421 9.04556C4.01233 9.03202 4.01233 9.01848 4.01775 8.99681C4.02588 8.98868 4.02588 8.97513 4.02588 8.96972L6.43135 4.16425C5.78665 3.80939 5.34241 3.12946 5.34241 2.34662C5.34241 1.20352 6.27969 0.266235 7.42279 0.266235H29.6135C30.7566 0.266235 31.6939 1.20352 31.6939 2.34662C31.6939 3.12946 31.2497 3.8094 30.605 4.16425L33.0104 8.96972C33.0186 8.97784 33.0186 8.99139 33.0186 8.99681C33.0267 9.01035 33.0267 9.02389 33.0321 9.04556C33.0592 9.11599 33.0727 9.18372 33.0727 9.25414C33.0727 9.26227 33.0809 9.27582 33.0809 9.28123V48.115C33.0809 50.8672 31.2849 53.2131 28.8009 54.0365C28.7738 54.0772 28.7467 54.1205 28.7115 54.1557L25.9377 56.9296C25.8131 57.0542 25.6397 57.13 25.4528 57.13H11.5836C11.3967 57.13 11.2233 57.0542 11.0906 56.9296L8.31673 54.1557C8.28152 54.1205 8.25442 54.0799 8.22733 54.0365C5.75147 53.2131 3.95548 50.8672 3.95548 48.115V9.28123C3.95548 9.27311 3.96358 9.25956 3.96358 9.25414ZM29.6133 1.65312H7.42256C7.04061 1.65312 6.7291 1.96464 6.7291 2.34659C6.7291 2.72853 7.04061 3.04005 7.42256 3.04005H29.6133C29.9952 3.04005 30.3067 2.72853 30.3067 2.34659C30.3067 1.96464 29.9952 1.65312 29.6133 1.65312ZM29.1826 4.42697H7.85036L5.76998 8.58773H31.263L29.1826 4.42697ZM11.8676 55.743H25.1681L26.5551 54.3561H10.4862L11.8676 55.743ZM5.34197 48.115C5.34197 50.7913 7.51986 52.9692 10.1962 52.9692H26.8392C29.5156 52.9692 31.6935 50.7913 31.6935 48.115V9.97465H5.34197V48.115Z"
              fill="#0A0A0A"
            />
            <path
              d="M31.1705 59.7467C39.0096 61.6786 36.3967 65.2663 17.8162 65.2663C-1.92561 65.2663 -1.05459 60.8506 7.07397 59.7467"
              stroke="#0A0A0A"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M29.9854 58.7047L29.9854 58.7048C29.7638 58.7625 29.6207 58.9821 29.6725 59.209L29.6724 59.2088L29.8187 59.1756L29.6725 59.209L29.9854 58.7047ZM29.9854 58.7047L29.9898 58.7037L32.6139 58.104L32.6138 58.1039L32.6183 58.103C32.843 58.0588 33.0673 58.1944 33.1192 58.4213C33.1711 58.6482 33.0279 58.8678 32.8063 58.9255L32.8063 58.9256L32.8019 58.9266L30.5847 59.4334L29.9854 58.7047Z"
              fill="#0A0A0A"
              stroke="#0A0A0A"
              strokeWidth="0.3"
            />
            <path
              d="M7.84788 58.7047L7.84786 58.7048C8.06943 58.7625 8.2126 58.9821 8.16078 59.209L8.16082 59.2088L8.01454 59.1756L8.16077 59.209L7.84788 58.7047ZM7.84788 58.7047L7.84345 58.7037L5.21939 58.104L5.21941 58.1039L5.21495 58.103C4.99027 58.0588 4.76591 58.1944 4.71405 58.4213C4.66219 58.6482 4.80537 58.8678 5.02696 58.9255L5.02694 58.9256L5.03137 58.9266L7.24859 59.4334L7.84788 58.7047Z"
              fill="#0A0A0A"
              stroke="#0A0A0A"
              strokeWidth="0.3"
            />
          </svg>
        </div>

      </div>
    </div>
  );
};

export default ClickToChange;
