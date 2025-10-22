import { useEffect } from 'react'
import { useHistory } from '@docusaurus/router'

export default function Home(): JSX.Element {
  const history = useHistory()

  useEffect(() => {
    history.replace('/intro')
  }, [history])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        color: '#666',
      }}
    ></div>
  )
}
