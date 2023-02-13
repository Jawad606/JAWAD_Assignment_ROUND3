import { Input } from 'antd';
import React, { useState } from 'react';

const FloatLabel = ({ value, onChange, ...restProps }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setHasValue(!!value);
  };

  return (
    <div
      style={{
        position: 'relative',
        marginBottom: 16
      }}
    >
      {(isFocused || hasValue) && (
        <label
          style={{
            position: 'absolute',
            top: -12,
            left: 0,
            fontSize: 12,
            color: 'rgba(0,0,0,0.25)'
          }}
        >
          {restProps.placeholder}
        </label>
      )}
      <Input
        {...restProps}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          paddingTop: (isFocused || hasValue) ? 12 : 16,
          fontSize: 16
        }}
      />
    </div>
  );
};

export default FloatLabel;