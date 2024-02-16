import  { useContext } from 'react'
import { MyContext } from '../../context/Context'
import { social } from '../../data'

const Contact = () => {
  const { setPageActive} = useContext(MyContext)
  return (
    <div className='wapped-content contact__page' onMouseEnter={() => setPageActive(3)} id="3" >
          {social.map((item,index)=> {
            return (
              <div className="major box-item" key={index}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                </svg>
              </span>
              <h2>{item.nickname}</h2>
              <p>{item.name}</p>
            </div>
            )
          })}
    </div>
  )
}

export default Contact