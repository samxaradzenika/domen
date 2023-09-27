import create, { SetState } from 'zustand';

interface State {
    count: number;
}

interface Actions {
    inc: () => void;
}

export const useStore = create<State & Actions>((set: SetState<State>) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
}));
