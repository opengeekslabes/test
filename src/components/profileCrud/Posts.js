import React from 'react';
import './Profile.css';
import Main from './Main'
import PostBlock from './PostBlock'
import Settings from './Settings'
import { Route, Switch } from 'react-router-dom'

const Posts = (props) => { 

  return (
    <div className="col-10 p-0">      
      <div className="container-fluid">
        <div className="row container-height">
            <Switch>
              <Route path="/home/posts/settings" component={Settings} />  
              <Route path="/home/posts/create-post" component={Main}/>
            </Switch>
          <PostBlock />
        </div>
      </div>
    </div>
  );
}


export default Posts