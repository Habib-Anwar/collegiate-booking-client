

const Paper = ({ college }) => {
    const { college_name, research } = college;
    return (
        <div>
            <div>
                <h2 className="text-2xl">{college_name}</h2>
                <a href={research.paper_link.one} target="_blank" rel="noopener noreferrer">Energy & Climate</a><br></br>
                <a href={research.paper_link.two} target="_blank" rel="noopener noreferrer">Economics</a><br></br>
                <a href={research.paper_link.three} target="_blank" rel="noopener noreferrer">Urban Development</a>
            </div>
        </div>
    );
};

export default Paper;