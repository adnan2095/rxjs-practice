import { createReducer, on } from '@ngrx/store';
import { addMarble, updateMarbleColor, markMarbleComplete } from './marble.actions';

export interface Marble {
  color: string;
  number: number;
  complete: boolean;
}

export interface MarbleState {
  marbles: Marble[];
}

export const initialState: MarbleState = {
  marbles: []
};

export const marbleReducer = createReducer(
  initialState,
  on(addMarble, (state, { color, number }) => ({
    ...state,
    marbles: [...state.marbles, { color, number, complete: false }]
  })),
  on(updateMarbleColor, (state, { index, color }) => ({
    ...state,
    marbles: state.marbles.map((marble, i) =>
      i === index ? { ...marble, color } : marble
    )
  })),
  on(markMarbleComplete, (state, { index }) => ({
    ...state,
    marbles: state.marbles.map((marble, i) =>
      i === index ? { ...marble, complete: true } : marble
    )
  }))
);
