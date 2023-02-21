import { Link } from 'react-router-dom'

export default function Project({ projName, projLink, projType, projEnv, projDesc, projPic }) {
  return (
    <div>
      <div className='project'>
        <img src={require(projPic)} />
        <Link to={projLink} className='projectHeader'>
          <span>{projName}</span>
          <span>{projType}</span>
        </Link>
        <div>{projDesc}</div>
      </div>
    </div>
  )
  /* <div class="project"style="background-image: url('/images/Boids1.png');">
            <!-- <iframe style='min-height: 300px; width: 100%;position:absolute; pointer-events: none;' src="https://7fi.github.io/boids-js" scrolling="no" frameborder="0" allowfullscreen=""></iframe> -->
            <a class="projectHeader" href="https://7fi.github.io/boids-js" target="blank">
                <div class="projectTitle">Flocking Simulation</div>
                <div class="projectType">School | Java</div>
            </a>
            <div class="projectBody">A school project that simulates the basic flocking behaviors of animals. Includes custom triangle renderer, custom vector math class, and is based off Craig Reynold's flocking algorithm. This project and the assignments leading up to it taught me how to use Java and how to write better more structured code. I also ported the project to Javascript for the web.</div>
        </div>
   */
}
