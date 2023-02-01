import {useCounter, useFetch} from "../hooks";
import {ErrorQuote, LoadingQuote, Quote} from "./";

export const MultipleCustomHooks = () => {
  const {counter, increment} = useCounter(1)
  const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes`)

  const {author, quote} = !!data && data[0]

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr/>

      {
        hasError ? <ErrorQuote/> : isLoading ? <LoadingQuote/> : <Quote quote={quote} author={author}/>
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