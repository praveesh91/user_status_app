import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

function Home() {
    return (
        <div class="site-wrapper">

        <div class="site-wrapper-inner">
  
          <div class="container">
  
            <div class="inner cover">
              <h1 class="cover-heading">User Activity Logger.</h1>
              <p class="lead">Interface to view the activities of the users and the history of their activities</p>
              <p class="lead">
                <Link to="/users" class="btn btn-lg btn-default">See all users</Link>
              </p>
            </div>
  
          </div>
  
        </div>
  
      </div>
    )
}

export default Home
