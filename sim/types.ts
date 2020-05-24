// The current request state of the Battle:
//
//   - 'teampreview': beginning of BW/XY/SM battle (Team Preview)
//   - 'move': beginning of each turn
//   - 'switch': end of turn if fainted (or mid turn with switching effects)
//   - '': no request. Used between turns, or when the battle is over.
//
// An individual Side's request state is encapsulated in its `activeRequest` field.
export type RequestState = 'teampreview' | 'move' | 'switch' | '';
