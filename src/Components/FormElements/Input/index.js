import React from 'react';
import PropTypes from 'prop-types';

import FlexBox from 'src/Components/FlexBox';
import Label from './Label';
import Validation from './Validation';
import InputField from './InputField';

const Input = ({
  placeholder, label, type, id,
  isShow, messageType, message, hasButton, ...rest
}) => (
  <FlexBox {...rest}>
    {/* Show Label if label props is true */}
    {label
      // eslint-disable-next-line jsx-a11y/label-has-for
      && (
        <Label htmlFor={id} label={label}>
          <InputField id={id} placeholder={placeholder} type={type} {...rest} />
        </Label>
      )
    }

    {/* Do not show Label */}
    {!label && <InputField id={id} placeholder={placeholder} type={type} {...rest} />}

    {/* Do not show Submit button */}
    {hasButton && <input value="" type="submit" />}

    <Validation isShow={isShow} messageType={messageType} message={message} {...rest} />
  </FlexBox>
);

Input.defaultProps = {
  children: null,

};

Input.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Input;
