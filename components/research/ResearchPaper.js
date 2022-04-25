const ResearchPaper = ({ title, authors, date, desc, pdf, doi, image }) => {
  return (
    <div className="research-paper">
        <div className="paper-image">
            <img src={image} alt="" />
        </div>
        <div className="paper-content">
            <h1>{title}</h1>
            <div className="subtitle">
                <p className="authors">{authors}</p>
                <h3>{date}</h3>
            </div>
            
            {/* <ul className="authors">
                {authors && authors.map((author, i) => (
                    <li author={author} key={i}>{author}</li>
                ))}
            </ul> */}
            
            <p className="desc">{desc}</p>
            <div className="cta">

            </div>
        </div>
    </div>
  )
}

export default ResearchPaper