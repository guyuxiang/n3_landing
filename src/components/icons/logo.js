import React from 'react';

const IconLogo = () => (
  // <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
  //   <title>Logo</title>
  //   <g transform="translate(-8.000000, -2.000000)">
  //     <g transform="translate(11.000000, 5.000000)">
  //       <path
  //         d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
  //         fill="currentColor"
  //       />
  //       <polygon
  //         id="Shape"
  //         stroke="currentColor"
  //         strokeWidth="5"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         points="39 0 0 22 0 67 39 90 78 68 78 23"
  //       />
  //     </g>
  //   </g>
  // </svg>
  <svg
    id="logo"
    width="404"
    height="144"
    viewBox="0 0 404 144"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <title>Logo</title>
    <circle cx="72" cy="72" r="72" fill="#27AE60" />
    <path d="M55.919 87.1981L55.9215 87.2003C56.763 87.9296 58.095 88.2727 59.871 88.2727H69.5549C71.3533 88.2727 72.6771 87.9311 73.4688 87.1969C74.2891 86.4606 74.6757 85.2782 74.6757 83.7031C74.6757 82.229 74.3004 81.092 73.5135 80.3323C72.728 79.5477 71.5664 79.1728 70.0667 79.1728H69.7549V66.2247C69.7549 60.982 68.7154 57.0438 66.6007 54.4468C64.5053 51.8412 61.3167 50.5539 57.076 50.5539C54.5826 50.5539 52.3723 51.0447 50.4503 52.0323C48.7383 52.9005 47.3 54.1598 46.1355 55.8061V53.3914C46.1355 52.7872 45.9163 52.304 45.4659 51.9724C45.0483 51.6456 44.4456 51.4987 43.6916 51.4987H36.9995C35.1738 51.4987 33.8253 51.8407 33.0081 52.5733C32.1869 53.3095 31.8 54.4924 31.8 56.0683C31.8 57.4937 32.1772 58.6147 32.9608 59.3983L32.9608 59.3984L32.9634 59.4009C33.748 60.1574 34.8816 60.5198 36.3302 60.5198H36.7995V79.1728H36.5271C35.0023 79.1728 33.827 79.5471 33.0408 80.3324C32.2539 81.092 31.8787 82.229 31.8787 83.7031C31.8787 85.279 32.2657 86.4618 33.0868 87.1981C33.9032 87.93 35.2244 88.2727 36.9995 88.2727H46.7622C48.5372 88.2727 49.8584 87.93 50.6748 87.1981C51.4959 86.4618 51.8829 85.279 51.8829 83.7031C51.8829 82.229 51.5077 81.092 50.7208 80.3324C49.9347 79.5471 48.7593 79.1728 47.2346 79.1728H46.9622V67.9961C46.9622 65.407 47.6347 63.3582 48.9603 61.8286C50.3121 60.2729 52.0409 59.4963 54.1629 59.4963C56.1639 59.4963 57.5459 60.1472 58.3646 61.4126L58.3646 61.4126L58.3671 61.4164C59.2236 62.6759 59.671 64.8541 59.671 67.9961V79.1728H59.3986C57.8724 79.1728 56.6856 79.5477 55.8742 80.3312C55.0865 81.0908 54.7109 82.2283 54.7109 83.7031C54.7109 85.279 55.0978 86.4618 55.919 87.1981Z" fill="black" stroke="black" stroke-width="0.4" />
    <path d="M106.576 103.514L106.576 103.514C110.328 100.264 112.2 95.8754 112.2 90.3718C112.2 86.7267 111.377 83.7515 109.713 81.463C108.129 79.2572 105.757 77.626 102.614 76.5605C105.348 75.249 107.384 73.6533 108.708 71.7665C110.135 69.7442 110.844 67.2818 110.844 64.3904C110.844 59.9931 109.307 56.4514 106.226 53.7857C103.177 51.1217 99.0876 49.8 93.9791 49.8C88.9118 49.8 84.6355 50.6933 81.159 52.4905C77.6925 54.2825 75.8896 56.4639 75.8896 59.0541C75.8896 60.2337 76.2387 61.2304 76.9458 62.0297L76.9457 62.0298L76.9513 62.0357C77.6937 62.8091 78.667 63.1907 79.8512 63.1907C80.3974 63.1907 81.1422 63.0131 82.0735 62.6757C83.0093 62.3368 84.1505 61.8301 85.4956 61.1576L85.4956 61.1576L85.4971 61.1568C88.1622 59.7953 90.5507 59.1229 92.6669 59.1229C94.6689 59.1229 96.1851 59.6937 97.2458 60.8102L97.2458 60.8103L97.2494 60.8139C98.3392 61.9037 98.8967 63.4506 98.8967 65.4839C98.8967 67.8561 98.4325 69.5319 97.5467 70.557C97.1109 71.0467 96.4021 71.4801 95.3978 71.846C94.395 72.2113 93.1124 72.504 91.5459 72.7215L91.5459 72.7215L91.5406 72.7224C91.374 72.7501 91.1182 72.7787 90.7695 72.8078L90.7695 72.8075L90.7585 72.809C89.4763 72.9879 88.487 73.4241 87.8188 74.139C87.1486 74.856 86.8245 75.8283 86.8245 77.0312C86.8245 78.7342 87.1303 79.9806 87.7953 80.7089L87.7952 80.7091L87.8016 80.7155C88.5014 81.4153 89.8107 81.7651 91.6536 81.8237C95.145 81.9693 97.4366 82.6682 98.6037 83.8631L98.6053 83.8648C99.8034 85.0628 100.428 87.0966 100.428 90.0219C100.428 92.7266 99.6947 94.7835 98.2554 96.2227C96.846 97.6321 94.8044 98.3511 92.0983 98.3511C89.8609 98.3511 87.2649 97.7053 84.3059 96.3999C82.8167 95.7429 81.6051 95.2485 80.6725 94.9181C79.7499 94.5912 79.0739 94.4145 78.6702 94.4145C77.1113 94.4145 75.8335 94.8807 74.8569 95.8268C73.9086 96.7445 73.4401 97.951 73.4401 99.4259C73.4401 101.959 75.2002 104.067 78.5801 105.772C81.9698 107.481 86.2459 108.33 91.3985 108.33C97.7883 108.33 102.855 106.732 106.576 103.514Z" fill="white" stroke="white" stroke-width="0.4" />

  </svg>
);

export default IconLogo;