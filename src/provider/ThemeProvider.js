import React from 'react'
import 'antd/dist/antd.variable.min.css'
// import 'antd/dist/antd.dark.min.css'
import viVN from 'antd/lib/locale/vi_VN'
import moment from 'moment'
import 'moment/locale/vi'
import { ConfigProvider } from 'antd'
import { THEME } from '../constant'

moment.locale('vi')

const ThemeProvider = props => {
  const { children } = props

  ConfigProvider.config({
    theme: THEME,
  })

  return (
    <ConfigProvider
      locale={viVN}
    >
      {children}
    </ConfigProvider>
  )
}

ThemeProvider.propTypes = {}

export default ThemeProvider