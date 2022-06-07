const styles = {
    section: {
      fontSize: "28px",
      color: "white",
      backgroundColor: 'black',
      padding: "0 100px"
    },
    wrapper: {
      fontSize: "28px",
      color: "white",
      backgroundColor: '#ade6f4',
      padding: "0 100px"
    },
    wrapper_My: {
      fontSize: "28px",
      color: "white",
      backgroundColor: '#222e30',
      padding: "0 100px"
    }


const Works = (props) => {
    console.log(props)
      return (
          <div className="bio_info" >
          <h2>
            CV of {props.name}
          </h2>
          <div className="info" section style = {styles.section}>
            <h2>
              Personal Info:
            </h2>
            <p>
              Mobile: {props.mobile}
            </p>
            <p>
              email: {props.email}
            </p>
            <p>
              LinkedIn: {props.linkedIn}
            </p>
            <p>
              Github: {props.github}
            </p>
          </div>
          <hr />
  
          <div className="Skills" section style = {styles.wrapper} >
            <p>
              My skills:
            </p>
            <ul>
              {/* <li>JS</li>
              <li>React</li>
              <li>Node</li>
              <li>WP</li>
              <li>PHP</li> */}
              {props.skills.map(skill => (
                <li>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className = "interests" section style = {styles.wrapper_My} >
            <h2>My Interests:</h2>
            <ul>
              {/* <li>DS ALGO</li>
              <li>GoLang</li>
              <li>Java Springboot</li> */}
              {props.interests.map(interest => (
                <li>
                  {interest}
                </li>
              ))}
            </ul>
          </div>
          <p>
            {props.demo.title}
          </p>
        </div>
      )
  }