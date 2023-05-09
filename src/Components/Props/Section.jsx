import "./Section.css"

function Section(props) {
    return (
      <div className='major-header' data-aos="fade-right">
        <p className='primary text-center text-sm-start m-0'>{props.section}</p>
      </div>
    )
}

export default Section;