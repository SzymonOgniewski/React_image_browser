import React, { Component } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

export class Loader extends Component {
  render() {
    return (
      <div style={{textAlign:"center"}}>
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }
}
