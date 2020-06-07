import { FieldConfig, useField } from 'formik';
import React, { HTMLProps } from 'react';
import './index.css';

export const Input = ({
  ...props
}: FieldConfig & HTMLProps<HTMLInputElement>) => {
  const [field, meta] = useField(props as FieldConfig);

  return (
    <input
      {...field}
      {...props}
      className={meta.touched && meta.error ? 'error' : ''}
    />
  );
};
