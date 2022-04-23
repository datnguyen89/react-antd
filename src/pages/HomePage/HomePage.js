import React from 'react'
import { Button, Switch } from 'antd'
import { useTheme } from '../../hooks/use-theme'

const HomePage = props => {
  const [darkMode, setDarkMode] = useTheme();

  return (
    <div>
      <Button>OKKKKK</Button>
      <Switch checked={darkMode} onChange={setDarkMode} />
    </div>
  )
}

HomePage.propTypes = {
  
}

export default HomePage