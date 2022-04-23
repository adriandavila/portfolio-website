import { research } from "../config"
import ResearchPaper from "./research/ResearchPaper";

const Research = () => {
    const researchPapers = research;
    const featuredPapers = researchPapers.filter((paper) => (paper.category === 'featured'));
    
    return (
        <div className="section-research">
            <h1>04. Research</h1>
           {featuredPapers && featuredPapers.map((paper, i) => {
               return (
                <ResearchPaper 
                    title={paper.title}
                    authors={paper.authors}
                    date={paper.date}
                    desc={paper.desc}
                    pdf={paper.pdf}
                    doi={paper.doi}
                    image={paper.image}
                    key={i}
                />
               )
           })}
        </div>
  )
}

export default Research