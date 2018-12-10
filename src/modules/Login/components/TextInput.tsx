import * as React from 'react';
// import { string } from 'prop-types';
// import { Link } from 'react-router-dom';

interface IProps {
  type: string,
  placeholder: string,
  name: string,
  onChange(event: React.ChangeEvent<HTMLInputElement>): void,

}

class TextInput extends React.Component<IProps> {
  public render() {
    const { type, placeholder, onChange, name } = this.props;
    return (
      <input
        className="form-control"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event)}
      />
    );
  }
}
export default TextInput;