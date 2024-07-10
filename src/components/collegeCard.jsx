

const CollegeCard = ({image, name}) => {
  return (
    <div>

      <div>
        <img src={image} alt={name} />
        <p className= "left-2 top-2 text-black font-bold">{name}</p>
        <p className="text-purple-600">Satuday, July 13, 9.30PM</p>
        <p className="text-[#7E7E7E]">ONLINE EVENT - Attend anywhere</p>
      </div>

        
    </div>
  )
}

export default CollegeCard