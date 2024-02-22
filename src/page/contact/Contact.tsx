import  { useContext } from 'react'
import { MyContext } from '../../context/Context'
import { social } from '../../data'

const Contact = () => {
  const { setPageActive} = useContext(MyContext)
  return (
    <div className='wapped-content contact__page' onMouseEnter={() => setPageActive(3)} id="3">
          {social.map((item,index)=> {
            return (
              <div className="major box-item" key={index}  onClick={()=>{
                window.open(`${item.link
                }`)
              }} >
              <div style={{ width:40, height:40 }}>
                <img src={item.icon} alt="icon"  />
              </div>
              <h2>{item.nickname}</h2>
              <p>{item.name}</p>
            </div>
            )
          })}
    </div>
  )
}

export default Contact