function Footer(){
    return(

        <footer
        style={{
          backgroundColor: '#333',
          color: 'white',
          textAlign: 'center',
          padding: '15px 0',
          position: 'relative',//position: relative is useful for creating slight adjustments to positioning without removing the element from the document flow.
          bottom: 0,
          width: '100%',
        }}
      >
        <p>© 2024 My Website. All rights reserved.</p>
      </footer>
    )
}
export default Footer