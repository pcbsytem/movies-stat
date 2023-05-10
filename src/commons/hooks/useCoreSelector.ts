import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from "../../store/Store"

export const useCoreSelector: TypedUseSelectorHook<RootState> = useSelector;
