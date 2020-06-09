import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
const Success = () => {
  return (
    <Layout>
      <section className="success-page">
        <div className="page-center">
          <h2>你成功訂閱了我們最新消息</h2>
          <Link to="/" className="btn">
            回首頁
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Success
