import Link from 'next/link'
import styled from '@emotion/styled';
import {useRouter} from 'next/router';
import Image from 'next/image';

const NavDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 5px;
  list-style-type: none;
  
  li {
    padding: 3px;
  }
  
  img {
    border-radius: 50%;
  }

  .active {
    color: gold;
  }

  & a:hover {
    color: red;
  }
`

type NavigationType = {
    id: number
    title: string
    path: string
}

const navigation: NavigationType[] = [
    {id: 1, title: 'Home', path: '/'},
    {id: 2, title: 'Settings', path: '/settings'},
    {id: 3, title: 'Game', path: '/game'}
]

const Navbar = () => {
    const {pathname} = useRouter()

    return <>
        <NavDiv>
            <Image width={100} height={100} src="/TagBogNet_Logo.jpg" alt="developer-logo"/>
            {
                navigation.map(({id, title, path}) => (
                    <li key={id} className={pathname === path ? "active" : ""}>
                        <Link  href={path}>{title}</Link>
                    </li>
                ))
            }
        </NavDiv>
    </>
}

export default Navbar