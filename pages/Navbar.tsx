import Link from 'next/link'
import styled from '@emotion/styled';

const DivCenter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  & a{
    &:hover {
      background: blueviolet;
    }
  }
`

export const Navbar = () => {
    return <>
        <DivCenter>
            <Link href={'/'}>Home page</Link>
            <Link href={'/settings'}>Settings</Link>
            <Link href={'/game'}>Game</Link>
        </DivCenter>
    </>
}