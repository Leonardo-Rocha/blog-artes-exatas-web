import React, { TextareaHTMLAttributes } from 'react';

import {
  StyledTextArea,
} from './styles';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: React.FC<Props> = (props) => (
  <StyledTextArea
    {...props}
  />
);

export default TextArea;
