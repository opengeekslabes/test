import React from 'react';
import '../Profile.css';
import CreatePostBlock from '../Posts/CreatePostBlock'
import PostBlock from '../Posts/PostBlock'
import Settings from '../Settings'
import { Route, Switch } from 'react-router-dom'

const CenterBlock = () => { 

  return (
    <div className="col-10 p-0">      
      <div className="container-fluid">
        <div className="row container-height">
            <Switch>
              <Route path="/home/posts/settings" component={Settings} />  
              <Route path="/home/posts/create-post" component={CreatePostBlock}/>
            </Switch>
          <PostBlock />
        </div>
      </div>
    </div>
  );
}


export default CenterBlock