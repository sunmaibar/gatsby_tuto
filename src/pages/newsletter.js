import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>接受最新消息</h2>
          <h4>每週一次更新會寄送到你的mail</h4>
          <form
            className="contact-form"
            name="testing-contact"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="testing-contact" />
            <input
              type="text"
              name="name"
              placeholder="你的名字"
              className="form-control"
            />
            <input
              type="email"
              name="email"
              placeholder="你的email"
              className="form-control"
            />
            <button type="submit" className="btn form-control submit-btn">
              訂閱
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
