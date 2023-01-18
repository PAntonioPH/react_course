import PropTypes from "prop-types";

export const FirstApp = ({title, subTitle, name}) => {

  return (
    <>
      <div data-testid={"testTitle"}>{title}</div>
      <p>{subTitle}</p>
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
  // title: "No hay titulo",
  subTitle: "No hay subtitulo",
  name: "Antonio"
}