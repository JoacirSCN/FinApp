import styled from 'styled-components'

export const Container = styled.div`
  background-color: #262626;
  box-shadow: 0px 0px 5px #000;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`

export const InputLabel = styled.label`
  flex: 1;
  margin: 10px;
`

export const InputTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  color: #fff;
`

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
`

export const Select = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
`

export const Button = styled.button`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
  background-color: lightblue;
  color: black;
  cursor: pointer;
  -webkit-transition: background-color 0.1s ease-out;
  -moz-transition: background-color 0.1s ease-out;
  -o-transition: background-color 0.1s ease-out;
  transition: background-color 0.1s ease-out;

  &:hover {
    background-color: #246276;
    border: 1px solid #246276;
    color: white;
  }
`
