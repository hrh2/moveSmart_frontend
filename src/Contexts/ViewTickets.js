import React, { createContext, useState, useMemo, useContext } from 'react';

export const TicketDetailsMode = createContext({
  toggleTicketDetails: () => {},
});

export const useTicketDetails = () => {
  const [show, setShow] = useState(false);
  const showTicketDetails = useMemo(() => ({
    toggleTicketDetails: () => setShow(!show),
  }), [show]);

  return { show, showTicketDetails };
};

export const TicketDetailsProvider = ({ children }) => {
  const value = useTicketDetails();
  
  return (
    <TicketDetailsMode.Provider value={value}>
      {children}
    </TicketDetailsMode.Provider>
  );
};

export const useTicketDetailsContext = () => {
  return useContext(TicketDetailsMode);
};
