export default () => {
  return (
    <div className="main-bar">
      <style jsx>{`
        .main-bar {
          background: #39a769;
          margin-top: 100px;
          outline: 1px dashed #39a769;
          outline-offset: 3px;
        }

        .main-bar__img {
          display: block;
          margin-left: 40px;
          width: 300px;
        }
      `}</style>

      <img className="main-bar__img" src="/static/img/jp.png" />
    </div>
  )
}
