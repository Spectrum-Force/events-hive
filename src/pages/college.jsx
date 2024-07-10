import college from "../assets/images/college.png"
import CollegeCard from "../components/collegeCard"
import collegeOneImage from "../assets/images/collegeOne.png"
import collegeTwoImage from "../assets/images/collegeTwo.png"
import collegeThreeImage from "../assets/images/collegeThree.png"
import collegeFourImage from "../assets/images/collegeFour.png"
import collegeFiveImage from "../assets/images/collegeFive.png"
import collegeSixImage from "../assets/images/collegeSix.png"

const College = () => {
  return (
    <div>

      <div className="px-5 pt-5">
        <img src={college} alt="college" />
      </div>

      <div className="flex flex-col px-10 pt-5 font-sans">
        <h1 className="font-bold">IIT Roorke</h1>
        <p className="text-[#7E7E7E]">DesignHub organised a workshop for international students who have been newly admitted for the September intake. As a tech college, we pride ourselves in organizing very great events that bring to bare the take skills of our faculty members while helping to shape the discourse around students especially more women venturing into tech learning and tech jobs.
        </p>

      </div>

      <div className="px-10 pt-10">
        <p className="text-black font-bold">College <b className="text-purple-700 font-bold">Events</b></p>

        <div className="grid grid-cols-3 gap-5 ">
        <CollegeCard image={collegeOneImage}
          name="BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow" />
        <CollegeCard image={collegeTwoImage}
          name="BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow" />
        <CollegeCard image={collegeThreeImage}
          name="BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow" />
        <CollegeCard image={collegeFourImage}
          name="BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow" />
        <CollegeCard image={collegeFiveImage}
          name="BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow" />
        <CollegeCard image={collegeSixImage}
          name="BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow"
           />
      </div>
      </div>
      


    </div>
  )
}

export default College