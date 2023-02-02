import PropTypes from "prop-types";
import React from "react";

export const ShowIncrement = React.memo(({increment}) => {
  console.log("Me volví generar")

  return (
    <button
      className={"btn btn-primary"}
      onClick={() => increment(5)}
    >
      Incrementar
    </button>
  )
})

ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired
}