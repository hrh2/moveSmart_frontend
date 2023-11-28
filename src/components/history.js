import React, { useState } from 'react';
import { FaHistory } from 'react-icons/fa';

export default function History() {
     // eslint-disable-next-line no-unused-vars
     const [data, setdata] = useState(false);

     return (
          <div className="container">
               <h1 className="history-h1 px-4">History</h1>
               <div className="table-responsive">
                    <table className="table table-hover">
                         <thead>
                              <tr className="fw-border">
                                   <th scope="col"><h4>Ticket No</h4></th>
                                   <th scope="col"><h4>From</h4></th>
                                   <th scope="col"><h4>To</h4></th>
                                   <th scope="col"><h4>Date</h4></th>
                                   <th scope="col"><h4>Time</h4></th>
                                   <th scope="col"><h4>Amount</h4></th>
                              </tr>
                         </thead>
                         {data && (
                              <tbody>
                                   <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>12/4/2023</td>
                                        <td>12:00</td>
                                        <td>1025frw</td>
                                   </tr>
                                   <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>10/4/2023</td>
                                        <td>14:00</td>
                                        <td>2500frw</td>
                                   </tr>
                              </tbody>
                         )}
                         {!data && (
                              <tbody>
                                   <tr>
                                        <td colSpan="6">
                                             <div className="w-4/5 flex flex-column justify-content-center align-items-center py-5">
                                                  <p className=" font-extralight text-center italic">
                                                       <FaHistory size={20} />
                                                       <span className="text-muted">
                                                            your car booking history will be displayed here.
                                                       </span>
                                                  </p>
                                             </div>
                                        </td>
                                   </tr>
                              </tbody>
                         )}
                    </table>
               </div>
          </div>
     );
}

