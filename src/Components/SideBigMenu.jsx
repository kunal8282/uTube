import Footer from "./Footer"

const SideBigMenu = () => {

  return (
    <div className="w-3/12 mr-5">
      <ul className="border-b border-slate-600 px-2">
        <li className="px-2 py-1">Home</li>
        <li className="px-2 py-1">Shorts</li>
        <li className="px-2 py-1">Subscription</li>
      </ul>

      <ul className="border-b border-slate-600 px-2">
        <li className="px-2 py-1">Library</li>
        <li className="px-2 py-1">History</li>
        <li className="px-2 py-1">Your Video</li>
        <li className="px-2 py-1">Watch Later</li>
        <li className="px-2 py-1">Liked Video</li>
      </ul>

    <div className="border-b border-slate-600 px-2">
      <h1>Explore</h1>
        <ul className="px-2">
        <li className="px-2 py-1">Trending</li>
        <li className="px-2 py-1">Shopping</li>
        <li className="px-2 py-1">Music</li>
        <li className="px-2 py-1">Live</li>
        <li className="px-2 py-1">Gaming</li>
      </ul>
    </div>

    <div>
      <Footer />
    </div>

    </div>
  )
}

export default SideBigMenu