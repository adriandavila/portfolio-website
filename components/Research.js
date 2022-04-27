import { research } from "../config"
import ResearchPaper from "./research/ResearchPaper";

const Research = () => {
    const researchPapers = research;
    const featuredPapers = researchPapers.filter((paper) => (paper.category === 'featured'));
    
    return (
        <div className="section-research">
            {(<h1 className="section-title"><span aria-hidden="true">04.</span>Research</h1>)}
            {(featuredPapers.length === 0 && (
                <div className="no-papers">Currently working with Dr. Edith Law and Ph.D candidate Ken Jen in the Human Computer Interaction Lab investigating the role positive technology can play to help enact meaningful climate action.</div>
            ))}
            <ul className="research-list">
                {featuredPapers && featuredPapers.map((paper, i) => (
                    <li key={i}><ResearchPaper 
                        title={paper.title}
                        authors={paper.authors}
                        date={paper.date}
                        desc={paper.desc}
                        pdf={paper.pdf}
                        doi={paper.doi}
                        image={paper.image}
                    /></li>
                ))}
            </ul>
            
        </div>
  )
}

export default Research