import React, { createContext, useState, useMemo, useContext } from 'react';

export const TicketShowMode = createContext({
  toggleShowTicket: () => {},
});

export const useTicket = () => {
  const [show, setShow] = useState(false);
  const showTicket = useMemo(() => ({
    toggleShowTicket: () => setShow(!show),
  }), [show]);

  return { show, showTicket };
};

export const TicketProvider = ({ children }) => {
  const value = useTicket();
  
  return (
    <TicketShowMode.Provider value={value}>
      {children}
    </TicketShowMode.Provider>
  );
};

export const useTicketContext = () => {
  return useContext(TicketShowMode);
};
