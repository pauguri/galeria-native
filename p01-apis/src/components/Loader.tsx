import './Loader.css';

export default function Loader() {
  return (
    <div className="loader">
      <div className='loader-item' style={{animationDelay: '-0.3s'}}></div>
      <div className='loader-item' style={{animationDelay: '-0.2s'}}></div>
      <div className='loader-item' style={{animationDelay: '-0.1s'}}></div>
      <div className='loader-item'></div>
    </div>
  )
}
