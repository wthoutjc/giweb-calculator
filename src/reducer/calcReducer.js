const calcReducer = (state = null, action) => {
  switch (action.type) {
    case 'add':
      return `${state}${action.payload}`
    case 'delete':
      return state.slice(0, -1)
    case 'reset':
      return ''
    case 'equal':
      try {
        return `${eval(state)}`
      } catch (error) {
        return `${error} `
      }
  }
}

export default calcReducer
