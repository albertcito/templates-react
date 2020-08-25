import { createContext } from 'react';
import { IUseGlobal } from './useGlobal';
const GlobalContext = createContext({} as IUseGlobal);
export default GlobalContext;
