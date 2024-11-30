

const Button = ({ name, styles }) => {
  return (
    <a href="#" className={`link mt-5 m-auto w-fit ${styles}`}>
      <span className="mask">
        <div className="link-container">
          <span className="link-title1 title">{name}</span>
          <span className="link-title2 title">{name}</span>
        </div>
      </span>
      <div className="link-icon">
        <svg className="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
        <svg className="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
      </div>
    </a>
  )
}

export default Button