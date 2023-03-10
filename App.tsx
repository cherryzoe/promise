import * as React from 'react';
import './style.css';

export default function App() {
  const lunchTime = new Date('Jan 11, 2024');
  const lunchPromise = () => {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        if (Date.now() > lunchTime.getTime()) {
          resolve("it's lunchtime!");
        } else {
          reject('rejected');
        }
      }, 1);
    });
  };

  // WRONG IMPLEMENTATION
  // const lunchPromise = () => {
  //   setInterval(() => {
  //     if (Date.now() > lunchTime.getDate()) {
  //       return Promise.resolve("it's lunchtime!");
  //     } else {
  //       return Promise.reject('error message');
  //     }
  //   }, 60);
  // };

  lunchPromise()
    .then((val) => {
      console.log('success' + val);
    })
    .catch((err) => {
      console.log('error!' + err);
    });

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
