import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

function Home() {
    return (
        <div className="site-wrapper">

        <div className="site-wrapper-inner">
  
          <div className="container">
  
            <div className="inner cover">
              <h1 className="cover-heading">User Activity Logger.</h1>
              <p className="lead">Interface to view the activities of the users and the history of their activities</p>
              <p className="lead">
                <Link to="/users" class="btn btn-lg btn-default">See all users</Link>
              </p>
            </div>
  
          </div>
  
        </div>
  
      </div>
    )
}

export default Home
