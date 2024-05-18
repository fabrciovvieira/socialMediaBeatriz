import './Toggle.css'
import { FaRegMoon, FaRegSun } from "react-icons/fa6";
export const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div>
      <label  htmlFor="check">
        {isChecked ? (
          <FaRegSun className='icon-toggle'/>
        ) : (
          <FaRegMoon className='icon-toggle'/>
        )}
      </label>
      <input type="checkbox" id="check"
      className='toggle'
      onChange={handleChange}
      checked={isChecked} />
    </div>
  )
}