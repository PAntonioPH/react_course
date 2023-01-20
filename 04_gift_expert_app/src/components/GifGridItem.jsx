export const GifGridItem = ({title, url, id}) => {
  console.log(title);

  return (
    <div className={"card"}>
      <p>{title}</p>
      <img src={url} alt={title}/>
      <p>{title}</p>
    </div>
  )
}