import React from 'react'

const Menu = () => {
  return (
    <>
      <div>
        <input type="text" placeholder='Nombre' />
        <div>
          <span>Celeste</span>
          <span>Verde</span>
          <span>Amarillo</span>
          <span>Rosa</span>
          <span>Naranja</span>
        </div>
        <button>Crear</button>
      </div>

      <section>
        {/* <CardItem /> */}
        <div>
          <img src="" alt="Avatar" />
          <p>Name</p>
          <button>Delete</button>
        </div>
      </section>
    </>
  );
}

export default Menu;