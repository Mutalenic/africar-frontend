/* eslint-disable react/prop-types */
import { removeItem } from '../features/reservation/reservationSlice';
import { useDispatch } from 'react-redux';

const ReservedItem = ({ id, picture, name, price, description }) => {
  const dispatch = useDispatch();
  return (
    <article className='reservation-item'>
      <img src={picture} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
        <h4 className='item-price'>${price}</h4>
        <button
          className='remove-btn'
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
    </article>
  );
};
export default ReservedItem;
