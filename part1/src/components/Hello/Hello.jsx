const Hello = (props) => {
    console.log(props)
    return (
      <div>
        <p>Hello world, welcome to {props.name} world. Code Lab {props.age}.</p>
      </div>
    )
  }

export default Hello;