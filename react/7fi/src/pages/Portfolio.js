import Project from '../components/Project'
import Boids1 from '../images/Boids1.png'
import Scores1 from '../images/Scores1.png'
import Pairs1 from '../images/Pairs1.png'

export default function Portfolio({}) {
  return (
    <main>
      <Project projName={'CrowsNest'} projType={'Hobby | React Firebase JS'} projPicPos={''} projDesc={'A section of the sailing website, that scrapes the scores from the official scoring site, and graphs them based on selected teams and people.'} />
      <Project projName={'Sailing Scores'} projLink={'https://7fi.github.io/sailing-pairs/scores'} projType={'Hobby | JS'} projPic={Scores1} projPicPos={''} projDesc={'A section of the sailing website, that scrapes the scores from the official scoring site, and graphs them based on selected teams and people.'} />
      <Project
        projName={'Boids'}
        projLink={'https://7fi.github.io/boids-js'}
        projType={'School | Java JS'}
        projPic={Boids1}
        projPicPos={''}
        projDesc={"A school project that simulates the basic flocking behaviors of animals. Includes custom triangle renderer, custom vector math class, and is based off Craig Reynold's flocking algorithm. This project and the assignments leading up to it taught me how to use Java and how to write better more structured code. I also ported the project to Javascript for the web."}
      />
      <Project
        projName={'Sailing Pairs'}
        projLink={'https://7fi.github.io/sailing-pairs/'}
        projType={'Hobby | HTML CSS JS'}
        projPic={Pairs1}
        projPicPos={'bottom'}
        projDesc={'A website for my sailing team, to help keep track of pairings for our double handed boats. Features a simple drag and drop interface where you can create pairings and store them in a database to share with other people (or access later). You can create randomized pairings based off of previous pairings, and even the type of boat to sail in.'}
      />
    </main>
  )
}
