import React from 'react'
import logo from '../assets/madeleinehh-transparent.png'

const HeaderComponent = () => {
  return (
    <header class="max-w-lg m-auto">
      <h1>
        <img class="m-auto w-full" src={logo} alt="madeleinehhhh flashes in saturated colors and outlines, but the m is filled with madeleine's face and the tittle on the i is filled with a small dog's disgruntled face" />
      </h1>
      <p class="px-12 py-6">Welcome!My name is Madeleine Herritage.I am an information professional looking for work in front end development, with backgrounds in academic librarianship, energy & marine, and honors education.Currently accelerating my expertise in engineering and design, I am looking for opportunities to utilize my skills and grow.I am adaptable, excellent at critical thinking, quick to learn, and an asset to any team.You can find me on LinkedIn and GitHub.</p>
    </header>
  )
}

export default HeaderComponent