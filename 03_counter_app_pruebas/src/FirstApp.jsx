import PropTypes from "prop-types";

const newMessage = {
  message: "Hola mundo",
  tittle: "Antonio"
}

const arr = [1, 2, 3, 4, 5]

const getResult = (a, b) => a + b

export const FirstApp = ({title, subTitle, name}) => {

  return (
    <>
      <h1>{title}</h1>
      {/*<h1>{getResult(1, 2)}</h1>*/}
      {/*<code>{JSON.stringify(newMessage)}</code>*/}
      {/*<h1>{arr}</h1>*/}
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

FirstApp.defaultProps = {
  title: "No hay titulo",
  subTitle: "No hay subtitulo",
  name: "Antonio"
}