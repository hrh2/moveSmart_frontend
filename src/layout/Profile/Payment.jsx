import React from 'react'
import AddVisaCard from '../../scenes/profile/AddVisaCard'
import "bootstrap/dist/css/bootstrap.min.css";
function PaymentCard() {
  return (
    <div className="w-full min-h-[85vh]">
      <h2 className="text-center">Add your Card</h2>
      <AddVisaCard />
    </div>
  );
}
export default PaymentCard;
