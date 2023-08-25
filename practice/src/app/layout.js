

import Navbar from '../components/navbar/Navbar';
import { ROUTES } from '../constants/RouteConstants'


export const metadata = {
  title: 'Blog App',
  description: 'A blog app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <header>
          <Navbar link={ROUTES }/>
        </header>
        {children}
      </body>
    </html>
  )
}
