import {useCounter, useFetch} from "../hooks";
import {LoadingQuote} from "./LoadingQuote.jsx";

export const MultipleCustomHooks = () => {
  const {counter, increment} = useCounter(1)
  const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes`)

  const {author, quote} = !!data && data[0]

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr/>

      {
        isLoading ? <LoadingQuote/>
          : (
            <blockquote className={"blockquote text-end"}>
              <p className={"mb-1"}>{quote}</p>
              <footer className={"blockquote-footer mt-2"}>{author}</footer>
            </blockquote>
          )
      }

      <button
        className={"btn btn-primary"}
        disabled={isLoading}
        onClick={() => increment()}
      >Next quote
      </button>
    </>
  )
}