import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {
      name: 'Taro',
      age: 14,
    },
    {
      name: 'Hanako',
      age: 4,
    },
    {name: 'fuga', age: 5},
    {},
    {},
    {},
  ];
  return (
    <div>
      {profiles.map((p, i) => {
        return <User name={p.name} age={p.age} key={i} />;
      })}
    </div>
  );
};
const User = props => {
  return (
    <p>
      Hi, I am {props.name}, and {props.age} years old !
    </p>
  );
};

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

User.defaultProps = {
  name: 'No Name',
  age: 30,
};

export default App;
