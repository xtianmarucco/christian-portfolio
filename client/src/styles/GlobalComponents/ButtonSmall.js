import React from 'react'

import { ButtonBackSmall, ButtonFrontsmall } from './index'

const ButtonSmall = (props) => (
  <ButtonBackSmall alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <ButtonFrontsmall alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFrontsmall>
  </ButtonBackSmall>
);

export default ButtonSmall