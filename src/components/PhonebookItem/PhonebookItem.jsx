import PropTypes from 'prop-types';
import { Contact, Button } from './PhonebookItem.styled';
import { TbUser } from 'react-icons/tb';
import { AiOutlineDelete } from 'react-icons/ai';

export default function PhonebookItem({ name, number, onDelContact }) {
  return (
    <>
      <Contact>
        <TbUser size={20} />
        {name} {number}
      </Contact>
      <Button type="button" onClick={onDelContact}>
        <AiOutlineDelete size={20} />
      </Button>
    </>
  );
}

PhonebookItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelContact: PropTypes.func.isRequired,
};
