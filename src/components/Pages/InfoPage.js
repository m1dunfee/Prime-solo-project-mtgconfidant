import React, {Component} from 'react';
import duelCommander from './img/duelCommander.png'
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {
  render(){
    return(
      <div class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
            {/* after importing the img you can also just put the var name in instead of an address */}
            <img src={"https://auricanslair.files.wordpress.com/2017/11/magiccards1.png?w=353&h=249"} className="d-block w-50 m-auto"/> 
        </div>
        <div class="carousel-item">
            {/* after importing the img you can also just put the var name in instead of an address */}
            <img src={duelCommander} className="d-block w-50 m-auto"/> 
        </div>
      </div>
    </div>
    );
  }
}

export default InfoPage;
