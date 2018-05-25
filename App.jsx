import React from 'react';

import SvgWrapper from './SvgWrapper';

class App extends React.Component {
  render() {
    return (
      <section>
        <h1>Using 'use' with SVGs</h1>
        <div>
          <SvgWrapper icon="empty-box" />
        </div>
        <div>
          <SvgWrapper icon="empty-box" width="150px" height="150px" />
        </div>
        <div style={{
          fill: 'red', // "primary colour"
          color: '#7FCBE5' // secondary aka one with "fill:currentColor" on SVG
        }}>
          <SvgWrapper icon="link-documents" width="150px" height="150px" />
        </div>
      </section>
    );
  }
}

export default App;