import React from 'react'
import { Button, DatePicker, Pagination, Tag } from 'antd'
import { Link } from 'react-router-dom'
const HomePage = props => {
  // region props, hook, state =================

  // endregion
  // region destructuring ======================

  // endregion
  // region variable ===========================

  // endregion
  // region function handle logic ==============

  // endregion
  // region function render ====================

  // endregion
  // region side effect ========================

  // endregion
  return (
    <div>
      <Button type={'primary'}>Hello</Button>
      <DatePicker format={'DD-MM-YYYY'} />
      <DatePicker.RangePicker />
      <Pagination showSizeChanger />
      <Tag color="success">success</Tag>
      <Tag color="processing">processing</Tag>
      <Tag color="error">error</Tag>
      <Tag color="warning">warning</Tag>
      <Tag color="default">default</Tag>

      <Link to={'#'}>test this link</Link>
    </div>
  )
}

HomePage.propTypes = {

}

export default HomePage