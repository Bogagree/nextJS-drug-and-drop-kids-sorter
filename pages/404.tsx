import Link from 'next/link'
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Error() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 10000)
    }, [])

    return <StyledDiv>
        <h1>404 - Page Not Found</h1>
        <p>Малыш, видимо что-то пошло не так.</p>
        <p>Попробуй вернуться и поиграть еще для этого нажми кнопку Home</p>
        <p>через 10 секунд ты вернёшься на страницу запуска игры</p>
        <Link href="/">жми сюда</Link>
    </StyledDiv>
};
