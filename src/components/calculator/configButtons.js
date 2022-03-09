// themes()
import { themes } from '../themes/themes'
//Config. Buttons
export const configButtons = (dispatch, theme) => {
  const { state } = theme
  return [
    [`${themes()[state - 1].btnAdd}`, { type: 'add', payload: '7' }, dispatch],
    [`${themes()[state - 1].btnAdd}`, { type: 'add', payload: '8' }, dispatch],
    [`${themes()[state - 1].btnAdd}`, { type: 'add', payload: '9' }, dispatch],
    [
      `${themes()[state - 1].btnDelReset}`,
      { type: 'delete', payload: 'DEL' },
      dispatch,
    ],
    [`${themes()[state - 1].btnAdd}`, { type: 'add', payload: '4' }, dispatch],
    [`${themes()[state - 1].btnAdd}`, { type: 'add', payload: '5' }, dispatch],
    [`${themes()[state - 1].btnAdd}`, { type: 'add', payload: '6' }, dispatch],
    [`${themes()[state - 1].btnAdd}`, { type: 'add', payload: '+' }, dispatch],
    [`${themes()[state - 1].btnAdd}`, { type: 'add', payload: '1' }, dispatch],
    [`${themes()[state - 1].btnAdd}`, { type: 'add', payload: '2' }, dispatch],
    [`${themes()[state - 1].btnAdd}`, { type: 'add', payload: '3' }, dispatch],
    [`${themes()[state - 1].btnAdd}`, { type: 'add', payload: '-' }, dispatch],
    [`${themes()[state - 1].btnAdd}`, { type: 'add', payload: '.' }, dispatch],
    [`${themes()[state - 1].btnAdd}`, { type: 'add', payload: '0' }, dispatch],
    [`${themes()[state - 1].btnAdd}`, { type: 'add', payload: '/' }, dispatch],
    [`${themes()[state - 1].btnAdd}`, { type: 'add', payload: '*' }, dispatch],
    [
      `${themes()[state - 1].btnDelReset}`,
      { type: 'reset', payload: 'RESET' },
      dispatch,
    ],
    [
      `${themes()[state - 1].btnEqual}`,
      { type: 'equal', payload: '=' },
      dispatch,
    ],
  ]
}
