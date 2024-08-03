/* eslint-disable react/prop-types */
import styled from "styled-components"

export const InputElement = styled.input`
  grid-column: 2;
  grid-row: 2;
  background-color: transparent;
  color: white;
  border: none;
  height: 40px;

  font-weight: 600;
  padding: 10px;
  font-size: 1.2em;
  outline: none;
`

export const SelectElement = styled.select`
  grid-column: 1;
  grid-row: 2;
  border: none;
  text-align: center;
  font-weight: 700;
  background-color: gray;
  color: white;
  font-size: 1.2em;
  height: 40px;
`
const Horarios = ({onChange, selectTime,value, valueTime, read}) => {
  return (
    <>
          
            <InputElement onChange={onChange} type="text" name='compromisso' defaultValue={value}  readOnly={read}/>
            <SelectElement name="hora" id="" defaultValue={valueTime} onChange={selectTime} >
            <option value="00:00">00:00</option>
            <option value="01:00">01:00</option>
            <option value="02:00">02:00</option>
            <option value="03:00">03:00</option>
            <option value="04:00">04:00</option>
            <option value="05:00">05:00</option>
            <option value="06:00">06:00</option>
            <option value="07:00">07:00</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
            </SelectElement>
    </>
  )
}

export default Horarios