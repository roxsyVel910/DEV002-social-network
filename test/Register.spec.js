// importamos la funcion que vamos a testear
import { registerComponents } from '../src/components/Register';
import { auth, createUserWithEmailAndPassword } from '../src/firebase/index.js';


// jess es un objeto global
jest.mock('../src/firebase/index.js', () => {
  return {
    // la funcion jest.fn, crea una funcion interceptada por JEST
    auth: jest.fn(() => {
      return { auth: 'TEST'}
    }),

    createUserWithEmailAndPassword: jest.fn((auth, email, password) => {
      if(!email || !password){
        throw new Error('ERROR')
      }

      Promise.resolve({ user: "admin"})
      
    })
  }
})

describe('test para registrarse', () => {
  const email = 'example@gmail.com'
  const password = '09870987'

  it('deberia llamar a createUserWithEmailAndPassword', async() => {
    await registerComponents(email, password)
    expect( createUserWithEmailAndPassword).toHaveBeenCalled()
  })

  it('deberia llamar a createUserWithEmailAndPassword con auth, email y pasar los argumentos', async() => {
    await registerComponents(email,password)
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth,email,password)
  })

  it('deberia arrojar un error si ejecuta sin argumentos', async() => {
    try {
      await registerComponents()
    } catch(error){
      expect(error).toMatch('ERROR')
    }
  })

})

// se puede utilizar to equal ( new Error('ERROR'))

// import { myFunction } from '../src/lib/index';

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });
