import Link from 'next/link'
import styled from '@emotion/styled';
import {useRouter} from 'next/router';

const DivCenter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  list-style-type: none;

  .active {
    color: yellow;
  }

  & a:hover {
    background: blueviolet;
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

export const Navbar = () => {
    const {pathname} = useRouter()

    return <>
        <DivCenter>
            {
                navigation.map(({id, title, path}) => (
                    <li className={pathname === path ? "active" : ""}>
                        <Link key={id} href={path}>{title}</Link>
                    </li>
                ))
            }
        </DivCenter>
    </>
}