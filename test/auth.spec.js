// importamos la funcion que vamos a testear
import { registerComponents } from '../src/components/Register.js';
import { loginWithEmailAndPassword } from '../src/components/Login.js';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../src/firebase/index.js';


// jess es un objeto global
// las funciones de este archivo son mock
jest.mock('../src/firebase/index.js', () => {
  return {
    // la funcion jest.fn, crea una funcion interceptada por JEST
    auth: jest.fn(() => ({ auth: 'test' })),
  
    updateProfile: jest.fn(),

    createUserWithEmailAndPassword: jest.fn((auth, email, password) => {
      return Promise.resolve({ user: "admin" })
    }),

    signInWithEmailAndPassword: jest.fn((auth, email, password) => {
      return Promise.resolve({ user: "admin" })
    })
  }
})

// funcion register
describe('test para registrarse', () => {
  const email = 'example@gmail.com'
  const password = '09870987'

  it('deberia llamar a createUserWithEmailAndPassword', async () => {
    await registerComponents(email, password)
    // revisamos si realmente invoco a la funcion de firebase
    expect(createUserWithEmailAndPassword).toHaveBeenCalled()
  })


  // //  o que haya sido llamada con los argumentos que corresponde 
  it('deberia llamar a createUserWithEmailAndPassword con auth, email y pasar los argumentos', async () => {
    createUserWithEmailAndPassword.mockClear();
    await registerComponents(email, password)
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password)
  })

  it('deberia arrojar un error "auth/invalid-email" si el email es inválido', async () => {
      const invalidEmail = 'invalidEmail'
      await registerComponents(invalidEmail, password)
  })

  it('deberia arrojar un error si ejecuta sin argumentos', async () => {
      await registerComponents()
  })

});


// se puede utilizar to equal ( new Error('ERROR'))

// funcion login
describe('test para registrarse', () => {
  const email = 'example@gmail.com'
  const password = '09870987'

  it('deberia llamar a signInWithEmailAndPassword', async () => {
    await loginWithEmailAndPassword(email, password)
    expect(signInWithEmailAndPassword).toHaveBeenCalled()
  })

  it('deberia llamar a signInWithEmailAndPassword con auth, email y pasar los argumentos', async () => {
    await loginWithEmailAndPassword(email, password)
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password)
  })

  it('deberia arrojar un error si ejecuta sin argumentos', async () => {
      await loginWithEmailAndPassword()
  
  })

  
})