import { createContext } from 'react';

import { UseGlobalProperties } from './useGlobal';

const GlobalContext = createContext({} as UseGlobalProperties);
export default GlobalContext;
