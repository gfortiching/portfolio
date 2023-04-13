import "./Header.css"

function Header(props) {
    return (
      <div className='major-header' data-aos="fade-right">
        <p className='primary text-center text-sm-start m-0'>{props.header}</p>
      </div>
    )
}

export default Header;