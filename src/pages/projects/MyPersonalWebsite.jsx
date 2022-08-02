import React, { Component } from 'react';

export default class MyPersonalWebsite extends Component {
    render() {
        return (
            <div className="PersonalWebsite" style={{color: "#D8D8D8", textAlign: "left", margin: "5%"}}>
                <h2 id="mypersonalwebsite">My Personal Website</h2>

                <h3 id="what">What</h3>

                <p>This website, <code>sammyjaved.com</code>, is my personal website.
                  My intention for this site is for me to share interesting things and experiences from my life.
                  Though, you should be forewarned, my life isn't that interesting.
                </p>

                <h3 id="why">Why</h3>

                <p>What's inspired me to have a website has been my desire to learn how to use React.
                  React is a framework for building user interfaces. It's been fun so far!</p>

                <p>In this age of content moderation, I think I've also been interested in having my own medium.
                  One that isn't censored or dependent on external services.
                  An ode to the old internet. <br />
                </p>

                <h3 id="how">How</h3>

                <p>I boot strapped this application using the <code>create-react-app</code> framework.
                  This out-of-the-box framework was a great way for me to minimize the setup
                  involved with working on a new application.  React, Webpack, and a solid file
                  structure has already been provided.  This has allowed me to focus on the
                  application code and providing the content I wish.  </p>
            </div>

        );
    }
}
