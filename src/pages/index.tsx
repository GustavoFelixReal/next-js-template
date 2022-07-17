import type { NextPage } from 'next'
import styled from 'styled-components'

const Button = styled.button`
  background-color: red;
  border-radius: 5px;
  color: white;
  padding: 2em;
`

const Home: NextPage = () => {
  return (
    <>
      Hello World!
      <Button type="button">Olá</Button>
    </>
  )
}

export default Home
