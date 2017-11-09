export default ({ children }) => {
  return (
    <div className="section">
      <style jsx>{`
        .section + .section {
          margin-top: 100px;
        }
      `}</style>

      {children}

    </div>
  )
}
