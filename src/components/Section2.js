
import React, { Component } from 'react'

class Section2 extends Component {
  render() {
    return (
      <div><section class="white-section" id="features">

    <div class="container-fluid">

      <div class="row">
        <div class="feature-box col-lg-4">
          <i class="icon fas fa-check-circle fa-4x"></i>
          <h3 class="feature-title">Easy to use.</h3>
          <p>So easy to use, even your dog could do it.</p>
        </div>

        <div class="feature-box col-lg-4">
          <i class="icon fas fa-bullseye fa-4x"></i>
          <h3 class="feature-title">Elite Clientele</h3>
          <p>We have all the dogs, the greatest dogs.</p>
        </div>

        <div class="feature-box col-lg-4">
          <i class="icon fas fa-heart fa-4x"></i>
          <h3 class="feature-title">Guaranteed to work.</h3>
          <p>Find the love of your dog's life or your money back.</p>
        </div>
      </div>


    </div>
  </section>
  </div>
    )
  }
}

export default Section2