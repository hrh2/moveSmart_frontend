import React,{useState} from 'react'
import {FaChair} from 'react-icons/fa'
import Loader from '../../components/Loader'
import Axios from 'axios'

export default function BookItem({ details, item,time }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    plate: item.plate,
    from: details.from,
    to: details.to,
    time: time,
    cost: item.price,
    passengers: 1,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setMessage("");

    try {
      const response = await Axios.post('https://movesmart.onrender.com/api/book', data);
      setMessage(response.data.message);
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="book-item">
      {loading && <Loader />}
      {!loading && !error && !message && (
        <form className="bg-white rounded-sm text-[.7em] text-black grid grid-cols-4" onSubmit={handleSubmit}>
          <div className="col-span-2 p-1">
            <h2 className="font-bold">{details.from} To {details.to}</h2>
            <p>Time: {item.time}</p>
            <p className="flex gap-2"><FaChair size={23} />: {item.availableSize} Available</p>
          </div>
          <div className="border-2 p-1 grid grid-flow-row">
            <h2 className="font-bold">Passengers</h2>
            <input
              type="number"
              name="passengers"
              onChange={handleChange}
              max={item.availableSize}
              min={1}
              placeholder="1"
              value={data.passengers}
              className="w-11/12 bg-slate-400 h-8 rounded-lg number-of-passenger"
            />
          </div>
          <div className="p-1 grid grid-flow-row">
            <span>Price</span>
            <span className="font-bold">{item.price} Frw</span>
            <button
              type="submit"
              className="bg-blue-500 p-2 rounded-lg h-7 mx-auto md:w-4/6 sm:w-5/6"
            >
              Book Now
            </button>
          </div>
        </form>
      )}
      {error && <p className="text-red-500">{error}</p>}
      {message && <p className="text-green-500">{message}</p>}
    </div>
  );
}

