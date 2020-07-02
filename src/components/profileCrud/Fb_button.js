import React, { Component} from 'react';
import { FacebookProvider, Share } from 'react-facebook';


 
export default class Example extends Component {
    
  render() {
    return (
      <FacebookProvider appId="673256423275491">
        <Share href="https://www.npmjs.com/package/react-facebook">
          {({ handleClick, loading }) => (
            <button type="button" disabled={loading} onClick={handleClick}>Share</button>
          )}
        </Share>
      </FacebookProvider>
    );
  }
}