import React, { FunctionComponent } from 'react'
import { Layout } from 'antd'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { TypingPage } from 'pages/TypingPage'
import { HomePage } from 'pages/HomePage'

const App: FunctionComponent = () => (
  <Layout style={{ height: '100vh' }}>
    <Layout>
      <Layout.Header>Header</Layout.Header>
      <Layout.Content>
        <Router>
          <Route path='/typing' component={TypingPage} exact />
          <Route path='/' component={HomePage} exact />
        </Router>
      </Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
    <Layout.Sider collapsible reverseArrow>
      Sider
    </Layout.Sider>
  </Layout>
)

export { App }
