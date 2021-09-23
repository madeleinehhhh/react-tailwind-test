import React from 'react'
import Header from './components/header.js'
import Nav from './components/nav.js'
import Portfolio from './components/portfolio/portfolio'

const App = () => {
  return (
    <div class="m-auto max-w-2xl p-4" >
      <Header />
      <Nav />

      <Portfolio>
        <h2>engineering</h2>
        <div class="subsection">
          <h3>courses</h3>
          <h4>freeCodeCamp: <a href="https://www.freecodecamp.org/learn/responsive-web-design/">Responsive Web Design</a></h4>
          <p><a href="https://www.freecodecamp.org/certification/fccd4427690-f86e-4136-b243-3d6c63500993/responsive-web-design">Certificate, June 2021</a></p>
          <ul>
            <li class="work original-work">
              <a href="https://codepen.io/madeleinehhhh/pen/xxqBGyJ">Tribute Page</a>
            </li>
            <li class="work original-work">
              <a href="https://codepen.io/madeleinehhhh/pen/BaWbzpp">Survey Form</a>
            </li>
            <li class="work original-work">
              <a href="https://codepen.io/madeleinehhhh/pen/rNybLjd">Product Landing Page</a>
            </li>
            <li class="work original-work">
              <a href="https://codepen.io/madeleinehhhh/pen/zYZXBgX">Technical Documentation Page</a>
            </li>
            <li class="work original-work">
              <a href="https://codepen.io/madeleinehhhh/pen/eYvadOj">Personal Portfolio Webpage</a>
            </li>
          </ul>

          <h4>SuperHi: <a href="https://superhi.com/courses/html-css-javascript-foundation">Foundation HTML, CSS + Javascript</a>[stet]</h4>
          <p>Completed, July 2021</p>
          <ul>
            <li class="work">
              <a href="https://superhi-foundations-w01-1-draft.superhi.com">Week 01, Sally Hart</a>
            </li>
            <li class="work">
              <a href="https://superhi-foundations-w05-essmei-draft.superhi.com">Week 05, Essmei</a>
            </li>
            <li class="work">
              <a href="https://superhi-foundations-w05-hexagons-draft.superhi.com">Week 05, Hexagons</a>
            </li>
            <li class="work">
              <a href="https://superhi-foundations-w06-bakerbrown-draft.superhi.com">Week 06, Baker + Brown</a>
            </li>
            <li class="work original-work">
              <a href="https://superhi-foundations-w06-valencia-draft.superhi.com">Week 06, Valencia</a>
            </li>
            <li>
              <a href="https://superhi-found-w07-interiorweekly-draft.superhi.com">Week 07, Interior Weekly</a>
            </li>
            <li class="work">
              <a href="https://superhi-found-w07-sallyhart-draft.superhi.com/">Week 07, Sally Hart, redux</a>
            </li>
            <li class="work">
              <a href="https://superhi-found-w08-boyceslideshow-draft.superhi.com">Week 08, Boyce</a>
            </li>
          </ul>
          <h4 class="no-work"><a href="https://mediaspace.baylor.edu/media/power+bi+demo+for+libraries+lats/1_53uh5jlw">Power BI Workshop</a></h4>
          <p class="no-work">Completed, May 2021</p>

          <h4>SuperHi: <a href="">Intro to React.js</a></h4>
          <p>In progress</p>
          <ul>
            <li class="work original-work">
              Chapter 01, Zesty: <a href="https://csb-nsrmb.netlify.app/">live page</a> & <a href="https://codesandbox.io/s/zesty-addedarrows-vgwpz">code</a>
            </li>
            <li class="work">
              IN PROGRESS: Chapter 02, Milky Mood: <a href="">live page</a> & <a href="https://codesandbox.io/s/milkymood-kebu7?file=/src/App.jsx">code</a>
            </li>
          </ul>

          <h4>The Odin Project: <a href="https://www.theodinproject.com/paths/foundations">Foundations</a></h4>
          <p>In progress</p>
          <ul>
            <li class="work original-work">
              Recreation of Google Homepage: <a href="https://google-2-draft.superhi.com/">live page</a> & <a href="https://github.com/madeleinehhhh/google-homepage">code</a>
            </li>
          </ul>

          <h4 class="no-work">Kevin Powell: <a href="https://courses.kevinpowell.co/courses/conquering-responsive-layouts/">Conquering Responsive Layouts</a></h4>
          <p class="no-work">In progress</p>

          <h4 class="no-work">freeCodeCamp: <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/">JavaScript Algorithms and Data Structures</a></h4>
          <p class="no-work">In progress</p>

          <h4 class="no-work">Sabio: <a href="https://lms.sabio.la/courses/enrolled/799460">JavaScript Foundations</a></h4>
          <p class="no-work">In progress</p>
        </div>

      </Portfolio >
    </div >

  );
}

export default App;
