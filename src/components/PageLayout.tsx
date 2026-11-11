import { Outlet } from 'react-router-dom'
import PageHeader from './PageHeader'

type Props = {
  onToggleTheme: () => void
}

function PageLayout({ onToggleTheme }: Props) {
  return (
    <>
      <PageHeader onToggleTheme={onToggleTheme} />
      <Outlet />
    </>
  )
}

export default PageLayout