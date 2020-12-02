import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Svg from '../Svg';

const HeaderMenuBtn = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  svg {
    margin-right: 10px;
  }
`;

const HeaderMenu = ({ isMobile, className }) => {
  const innerText = 'Login / Register';

  return (
    <div className={className}>
      <HeaderMenuBtn type="button">
        <Svg width="30px" height="30px" fill="#161920" viewBox="0 0 439 439">
          <g>
            <path
              d="M219.265,219.267c30.271,0,56.108-10.71,77.518-32.121c21.412-21.411,32.12-47.248,32.12-77.515
			      c0-30.262-10.708-56.1-32.12-77.516C275.366,10.705,249.528,0,219.265,0S163.16,10.705,141.75,32.115
			      c-21.414,21.416-32.121,47.253-32.121,77.516c0,30.267,10.707,56.104,32.121,77.515
			      C163.166,208.557,189.001,219.267,219.265,219.267z"
            />
            <path
              d="M419.258,335.036c-0.668-9.609-2.002-19.985-3.997-31.121c-1.999-11.136-4.524-21.457-7.57-30.978
			      c-3.046-9.514-7.139-18.794-12.278-27.836c-5.137-9.041-11.037-16.748-17.703-23.127c-6.666-6.377-14.801-11.465-24.406-15.271
			      c-9.617-3.805-20.229-5.711-31.84-5.711c-1.711,0-5.709,2.046-11.991,6.139c-6.276,4.093-13.367,8.662-21.266,13.708
			      c-7.898,5.037-18.182,9.609-30.834,13.695c-12.658,4.093-25.361,6.14-38.118,6.14c-12.752,0-25.456-2.047-38.112-6.14
			      c-12.655-4.086-22.936-8.658-30.835-13.695c-7.898-5.046-14.987-9.614-21.267-13.708c-6.283-4.093-10.278-6.139-11.991-6.139
			      c-11.61,0-22.222,1.906-31.833,5.711c-9.613,3.806-17.749,8.898-24.412,15.271c-6.661,6.379-12.562,14.086-17.699,23.127
			      c-5.137,9.042-9.229,18.326-12.275,27.836c-3.045,9.521-5.568,19.842-7.566,30.978c-2,11.136-3.332,21.505-3.999,31.121
			      c-0.666,9.616-0.998,19.466-0.998,29.554c0,22.836,6.949,40.875,20.842,54.104c13.896,13.224,32.36,19.835,55.39,19.835h249.533
			      c23.028,0,41.49-6.611,55.388-19.835c13.901-13.229,20.845-31.265,20.845-54.104C420.264,354.502,419.932,344.652,419.258,335.036z"
            />
          </g>
        </Svg>
        {!isMobile && innerText}
      </HeaderMenuBtn>
    </div>
  );
};

HeaderMenu.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

const StyledHeaderMenu = styled(HeaderMenu)`
  margin-right: 20px;
  margin-left: auto;
  color: #161920;
  font-size: 1.5rem;
  letter-spacing: 0.01em;
`;

export default StyledHeaderMenu;
