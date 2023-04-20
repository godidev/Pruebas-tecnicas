export default function MovieDetail({ title, year, img }) {
  return (
    <div className='movie-detail'>
      <h2>{title}</h2>
      <p>{year}</p>
      <img src={img} />
    </div>
  )
}
