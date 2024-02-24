import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './history.css'

const History = (props) => {
  return (
    <div className="history-container">
      <Helmet>
        <title>history - longpants.xyz</title>
        <meta property="og:title" content="history - longpants.xyz" />
      </Helmet>
      <header data-role="Header" className="history-header">
        <span className="history-contact">contact - stanley@longpants.xyz</span>
        <span className="history-contact1">
          <Link to="/" className="history-navlink">
            newest
          </Link>
          <span>
            {' '}
            - oldest -
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <Link to="/history" className="history-navlink1">
            all posts
          </Link>
        </span>
      </header>
      <div className="history-post-setup">
        <div className="history-title-date-body">
          <span className="history-post-heading">History</span>
          <div className="history-container1">
            <span className="history-body">02/24/2024</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History
