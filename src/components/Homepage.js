import React from 'react';
import ReactPlayer from 'react-player';

function Homepage(){

    return(
        <div id="homepage" className="container-fluid text-dark p-3">
          <div className="container">
             <h3 className="display-6 fw-bold">WELCOME TO EAT HERE</h3>
                 <hr />
             <p>🍽️ Explore the most unusual restautrants around the world 🍽️</p>
          </div>
         
          <div className="main-video"> 
            <div className='player-wrapper'>
               <ReactPlayer
                 className='react-player'
                 url='https://www.youtube.com/watch?v=jQ7mb77SDic'
                 width="560"
                 height="349"
               />
            </div>
           </div>
        </div>
    )

}

export default Homepage