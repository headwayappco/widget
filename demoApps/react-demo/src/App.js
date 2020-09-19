import React from 'react';
import './App.css';
import HeadwayWidget from '@headwayapp/react-widget';

//const HeadwayWidget = ({children}) => <div>{children}</div>;

function App() {
  return (
    <div id="app">
      <div className="toolbar" role="banner">
        <div style={{margin: '16px'}}>
          <HeadwayWidget account="J1LKG7">
            <svg width="30px" height="30px" viewBox="0 0 44 44" version="1.1">
              <defs>
                <linearGradient x1="50%" y1="-1.11022302e-14%" x2="50%" y2="100%" id="lg-1">
                  <stop stop-color="#32E7F9" offset="0%"></stop>
                  <stop stop-color="#17CAF0" offset="100%"></stop>
                </linearGradient>
                <linearGradient x1="3.061617e-15%" y1="50%" x2="100%" y2="50%" id="lg-2">
                  <stop stop-color="#FFC505" offset="0%"></stop>
                  <stop stop-color="#FFB801" offset="100%"></stop>
                </linearGradient>
                <linearGradient x1="3.061617e-15%" y1="50%" x2="100%" y2="50%" id="lg-3">
                  <stop stop-color="#FF4772" offset="0%"></stop>
                  <stop stop-color="#FF4422" offset="97.8117028%"></stop>
                </linearGradient>
                <linearGradient x1="3.061617e-15%" y1="50%" x2="100%" y2="50%" id="lg-4">
                  <stop stop-color="#9D02F9" offset="0%"></stop>
                  <stop stop-color="#6301F0" offset="100%"></stop>
                </linearGradient>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="98.1684471%" id="lg-5">
                  <stop stop-color="#3B29F6" offset="0%"></stop>
                  <stop stop-color="#6302F0" offset="100%"></stop>
                </linearGradient>
                <linearGradient x1="3.061617e-15%" y1="50%" x2="100%" y2="50%" id="lg-6">
                  <stop stop-color="#D793FF" offset="0%"></stop>
                  <stop stop-color="#AE5AFF" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g>
                  <g>
                    <rect fill="url(#lg-1)" x="0" y="0" width="10" height="18" rx="5"></rect>
                    <rect fill="url(#lg-2)" x="0" y="19" width="10" height="14" rx="5"></rect>
                    <rect fill="url(#lg-3)" x="0" y="34" width="10" height="10" rx="5"></rect>
                    <rect fill="url(#lg-4)" x="34" y="0" width="10" height="27" rx="5"></rect>
                    <rect fill="url(#lg-5)" x="34" y="28" width="10" height="16" rx="5"></rect>
                    <rect fill="url(#lg-6)" x="12" y="18" width="20" height="10" rx="5"></rect>
                  </g>
                </g>
              </g>
            </svg>
          </HeadwayWidget>
        </div>
        <span>Headway demo app!</span>
      </div>
      <div className="content" role="main">
        <h2>Headway demo app</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum sem sed neque ultrices, ut varius
          lacus vestibulum. Duis consequat ex quam, tincidunt molestie velit tempus posuere. Vestibulum id lacus
          posuere, elementum est eu, aliquet nisi. Aenean libero magna, tristique ut massa at, rutrum tempus neque. Nunc
          erat urna, auctor eu nisl sit amet, vulputate ultricies orci. Pellentesque egestas ac eros at viverra.
          Pellentesque id eros accumsan, bibendum metus sit amet, tempus nisi. Phasellus a eros sit amet lectus
          facilisis ornare. Maecenas ultricies neque mauris, auctor sollicitudin eros fermentum non. Nullam pharetra et
          nisl ac venenatis. Sed vel quam risus. Donec eu lobortis libero, at imperdiet nunc. Curabitur tincidunt velit
          ligula, sit amet egestas risus pulvinar vitae. Vivamus tincidunt maximus accumsan. Maecenas suscipit neque vel
          libero pharetra sodales sed sed est.</p>
        <p>Cras quis augue ac est euismod dapibus. Proin vel lorem vitae metus ullamcorper feugiat quis sed leo. Nunc
          vulputate rutrum nibh, quis auctor metus bibendum id. Phasellus eget lacus et turpis semper cursus. Nulla
          facilisi. Praesent lacinia gravida metus, vel consectetur est convallis in. Donec iaculis cursus felis, non
          rhoncus ipsum semper eu. Vivamus et congue nisl. In hac habitasse platea dictumst. Donec imperdiet tempor eros
          eu facilisis. Suspendisse potenti.</p>
        <p>Aliquam ex urna, aliquam aliquam ultrices ac, scelerisque non neque. Integer risus lectus, vulputate et nibh
          eu, finibus faucibus nisi. Donec fermentum dictum eleifend. In vestibulum dui urna, a condimentum dui maximus
          ac. Nam placerat eros non orci rhoncus, at imperdiet ex tincidunt. Curabitur volutpat neque gravida nisi
          consectetur, non bibendum mi tincidunt. Fusce ultrices nisl nec justo placerat faucibus. Donec ornare elit
          faucibus viverra mattis. Donec egestas vitae justo ac facilisis.</p>
        <p>In in sagittis elit. Sed consectetur id elit nec congue. Nunc suscipit dui id pellentesque dapibus.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat
          volutpat. Integer accumsan nibh volutpat nunc porttitor, consequat gravida quam tempor. Vivamus vel odio vel
          ante viverra laoreet. Nunc id eleifend leo. Fusce vitae dolor efficitur, euismod enim eu, viverra ligula.
          Vestibulum cursus nunc volutpat, auctor nulla ut, pellentesque sem. Integer rutrum, magna eu mattis pulvinar,
          lacus est sodales nulla, vitae volutpat magna nisl vitae felis. Proin eleifend diam tortor, ultricies
          scelerisque arcu porta vitae. Ut elit nulla, auctor nec egestas quis, suscipit in neque. Praesent volutpat
          ante sit amet elit tempor accumsan a sit amet erat. Fusce cursus enim volutpat tortor placerat, id ultricies
          ante iaculis.</p>
        <svg id="clouds" alt="Gray Clouds Background" xmlns="http://www.w3.org/2000/svg" width="2611.084"
             height="485.677" viewBox="0 0 2611.084 485.677">
          <path id="Path_39" data-name="Path 39"
                d="M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z"
                transform="translate(142.69 -634.312)" fill="#eee"/>
        </svg>
      </div>
    </div>
  );
}

export default App;
