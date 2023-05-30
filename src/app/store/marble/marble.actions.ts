import { createAction, props } from '@ngrx/store';

export const addMarble = createAction('[Marble] Add', props<{ color: string, number: number }>());
export const updateMarbleColor = createAction('[Marble] Update Color', props<{ index: number, color: string }>());
export const markMarbleComplete = createAction('[Marble] Mark Complete', props<{ index: number }>());
